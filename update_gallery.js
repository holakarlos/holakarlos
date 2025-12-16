const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const exifr = require('exifr'); // Fix missing import

const imagesDir = path.join(__dirname, 'assets', 'images');
const thumbsDir = path.join(imagesDir, 'thumbs');
const optimizedDir = path.join(imagesDir, 'optimized'); // Fix missing definition
const appJsPath = path.join(__dirname, 'js', 'app.js');

// Configuración Thumbnails & Optimized
const THUMB_WIDTH = 600;
const OPTIMIZED_WIDTH = 1920;
const QUALITY = 85;

// Helper to format fraction seconds (e.g., 0.005 -> 1/200)
function formatShutterSpeed(os) {
    if (!os) return '';
    if (os >= 1) return `${os}s`;
    const recip = Math.round(1 / os);
    return `1/${recip}s`;
}

// Manual overrides disabled - user has fixed source images
// const MANUAL_ROTATIONS = {};

async function processImages() {
    console.log('📸 Escaneando carpeta de imágenes...');

    // 0. Crear carpeta thumbs si no existe
    if (!fs.existsSync(thumbsDir)) {
        fs.mkdirSync(thumbsDir);
        console.log('📁 Carpeta thumbs creada');
    }
    if (!fs.existsSync(optimizedDir)) {
        fs.mkdirSync(optimizedDir, { recursive: true });
        console.log('📁 Carpeta optimized creada');
    }

    try {
        const files = fs.readdirSync(imagesDir);
        // Filtrar solo imágenes (jpg, jpeg, png, etc.)
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

        if (imageFiles.length === 0) {
            console.log('⚠️ No se encontraron imágenes en assets/images');
            process.exit(0);
        }

        // Sort files by creation date (newest first)
        imageFiles.sort((a, b) => {
            const statA = fs.statSync(path.join(imagesDir, a));
            const statB = fs.statSync(path.join(imagesDir, b));
            return statB.birthtime.getTime() - statA.birthtime.getTime();
        });

        const galleryData = await Promise.all(imageFiles.map(async (file) => {
            const filePath = path.join(imagesDir, file);
            const thumbPath = path.join(thumbsDir, file);
            const optimizedPath = path.join(optimizedDir, file);

            // Get stats for year (fallback)
            const stats = fs.statSync(filePath);
            const birthYear = stats.birthtime.getFullYear();

            // Extract EXIF from ORIGINAL file
            let exifData = {};
            try {
                const output = await exifr.parse(filePath, ['Make', 'Model', 'ISO', 'FNumber', 'ExposureTime', 'FocalLength']);
                if (output) {
                    let camera = output.Model || output.Make || '';
                    exifData = {
                        camera: camera,
                        iso: output.ISO ? `ISO ${output.ISO}` : '',
                        aperture: output.FNumber ? `f/${parseFloat(output.FNumber).toFixed(1)}` : '',
                        shutter: formatShutterSpeed(output.ExposureTime),
                        focal: output.FocalLength ? `${Math.round(output.FocalLength)}mm` : ''
                    };
                }
            } catch (e) {
                console.log(`⚠️ No EXIF for ${file}: ${e.message}`);
            }

            // 1. Generar Thumbnail (si no existe)
            if (!fs.existsSync(thumbPath)) {
                console.log(`⚙️  Generando thumbnail para: ${file}`);
                await sharp(filePath)
                    .rotate() // Auto-rotate based on EXIF
                    .resize(THUMB_WIDTH)
                    .jpeg({ quality: QUALITY })
                    .toFile(thumbPath)
                    .catch(err => console.error(`❌ Error generando thumb para ${file}:`, err));
            }

            // 2. Generar Optimized Full (si no existe)
            if (!fs.existsSync(optimizedPath)) {
                console.log(`⚙️  Generando optimized full para: ${file}`);
                await sharp(filePath)
                    .rotate() // Auto-rotate based on EXIF
                    .resize({ width: OPTIMIZED_WIDTH, withoutEnlargement: true })
                    .jpeg({ quality: QUALITY })
                    .toFile(optimizedPath)
                    .catch(err => console.error(`❌ Error generando optimized para ${file}:`, err));
            }

            return {
                src: `assets/images/thumbs/${file}`,
                full: `assets/images/optimized/${file}`, // Point to the FIXED orientation version
                title: '',
                year: birthYear.toString(),
                exif: exifData
            };
        }));

        // 2. Leer js/app.js y reemplazar la constante galleryImages
        let appJsContent = fs.readFileSync(appJsPath, 'utf8');

        // Regex para encontrar el bloque galleryImages = [ ... ];
        const regex = /const galleryImages = \[\s*[\s\S]*?\];/;

        const newContentString = `const galleryImages = ${JSON.stringify(galleryData, null, 4)};`;

        if (appJsContent.match(regex)) {
            appJsContent = appJsContent.replace(regex, newContentString);
            fs.writeFileSync(appJsPath, appJsContent, 'utf8');
            console.log(`✅ ¡Listo! Se han procesado ${galleryData.length} fotos y actualizado la web.`);
        } else {
            console.error('❌ No se encontró la constante galleryImages en js/app.js');
        }

    } catch (err) {
        console.error('❌ Error:', err.message);
    }
}

processImages();
