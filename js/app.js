// Configuración de contenido
// INSTRUCCIONES:
// 1. Guarda tus fotos en la carpeta 'assets/images'
// 2. Añade aquí el nombre del archivo (ej: 'assets/images/mifoto.jpg') y el título

const galleryImages = [
    {
        "src": "assets/images/thumbs/IMG_0437.jpeg",
        "full": "assets/images/optimized/IMG_0437.jpeg",
        "title": "",
        "year": "2025",
        "exif": {
            "camera": "iPhone 17 Pro",
            "iso": "ISO 50",
            "aperture": "f/2.8",
            "shutter": "1/498s",
            "focal": "17mm"
        }
    },
    {
        "src": "assets/images/thumbs/IMG_0309.jpeg",
        "full": "assets/images/optimized/IMG_0309.jpeg",
        "title": "",
        "year": "2025",
        "exif": {
            "camera": "iPhone 17 Pro",
            "iso": "ISO 25",
            "aperture": "f/2.8",
            "shutter": "1/3115s",
            "focal": "17mm"
        }
    },
    {
        "src": "assets/images/thumbs/IMG_0269.jpeg",
        "full": "assets/images/optimized/IMG_0269.jpeg",
        "title": "",
        "year": "2025",
        "exif": {
            "camera": "iPhone 17 Pro",
            "iso": "ISO 64",
            "aperture": "f/1.8",
            "shutter": "1/171s",
            "focal": "7mm"
        }
    },
    {
        "src": "assets/images/thumbs/IMG_5920.jpeg",
        "full": "assets/images/optimized/IMG_5920.jpeg",
        "title": "",
        "year": "2025",
        "exif": {
            "camera": "iPhone 14 Pro",
            "iso": "ISO 50",
            "aperture": "f/2.8",
            "shutter": "1/99s",
            "focal": "9mm"
        }
    },
    {
        "src": "assets/images/thumbs/IMG_5685.jpeg",
        "full": "assets/images/optimized/IMG_5685.jpeg",
        "title": "",
        "year": "2025",
        "exif": {
            "camera": "iPhone 14 Pro",
            "iso": "ISO 125",
            "aperture": "f/2.2",
            "shutter": "1/99s",
            "focal": "2mm"
        }
    },
    {
        "src": "assets/images/thumbs/IMG_9098.jpeg",
        "full": "assets/images/optimized/IMG_9098.jpeg",
        "title": "",
        "year": "2024",
        "exif": {
            "camera": "iPhone 14 Pro",
            "iso": "ISO 80",
            "aperture": "f/1.8",
            "shutter": "1/816s",
            "focal": "7mm"
        }
    },
    {
        "src": "assets/images/thumbs/IMG_7573.jpeg",
        "full": "assets/images/optimized/IMG_7573.jpeg",
        "title": "",
        "year": "2024",
        "exif": {
            "camera": "iPhone 14 Pro",
            "iso": "ISO 32",
            "aperture": "f/2.8",
            "shutter": "1/708s",
            "focal": "9mm"
        }
    },
    {
        "src": "assets/images/thumbs/337D5603-445C-42D9-BDC2-777A892C45F6.jpg",
        "full": "assets/images/optimized/337D5603-445C-42D9-BDC2-777A892C45F6.jpg",
        "title": "",
        "year": "2023",
        "exif": {
            "camera": "iPhone 14 Pro",
            "iso": "ISO 640",
            "aperture": "f/1.8",
            "shutter": "1/33s",
            "focal": "7mm"
        }
    },
    {
        "src": "assets/images/thumbs/IMG_6852.JPG",
        "full": "assets/images/optimized/IMG_6852.JPG",
        "title": "",
        "year": "2023",
        "exif": {
            "camera": "iPhone 14 Pro",
            "iso": "ISO 64",
            "aperture": "f/1.8",
            "shutter": "1/1400s",
            "focal": "7mm"
        }
    },
    {
        "src": "assets/images/thumbs/IMG_4359.JPG",
        "full": "assets/images/optimized/IMG_4359.JPG",
        "title": "",
        "year": "2023",
        "exif": {}
    },
    {
        "src": "assets/images/thumbs/IMG_4291.JPG",
        "full": "assets/images/optimized/IMG_4291.JPG",
        "title": "",
        "year": "2023",
        "exif": {
            "camera": "iPhone 14 Pro",
            "iso": "ISO 100",
            "aperture": "f/2.8",
            "shutter": "1/117s",
            "focal": "9mm"
        }
    },
    {
        "src": "assets/images/thumbs/14E0B3EF-F5F4-4C10-8487-C317F3E31BA4.jpg",
        "full": "assets/images/optimized/14E0B3EF-F5F4-4C10-8487-C317F3E31BA4.jpg",
        "title": "",
        "year": "2019",
        "exif": {
            "camera": "iPhone XR",
            "iso": "ISO 25",
            "aperture": "f/1.8",
            "shutter": "1/5128s",
            "focal": "4mm"
        }
    },
    {
        "src": "assets/images/thumbs/A572F687-A925-4E8F-A221-C722BDF5CAFD.jpg",
        "full": "assets/images/optimized/A572F687-A925-4E8F-A221-C722BDF5CAFD.jpg",
        "title": "",
        "year": "2019",
        "exif": {
            "camera": "iPhone XR",
            "iso": "ISO 25",
            "aperture": "f/1.8",
            "shutter": "1/1845s",
            "focal": "4mm"
        }
    },
    {
        "src": "assets/images/thumbs/IMG_1705.JPG",
        "full": "assets/images/optimized/IMG_1705.JPG",
        "title": "",
        "year": "2017",
        "exif": {
            "camera": "Canon EOS 750D",
            "iso": "ISO 3200",
            "aperture": "f/4.5",
            "shutter": "1/100s",
            "focal": "33mm"
        }
    },
    {
        "src": "assets/images/thumbs/IMG_8555.JPG",
        "full": "assets/images/optimized/IMG_8555.JPG",
        "title": "",
        "year": "2017",
        "exif": {
            "camera": "iPhone SE",
            "iso": "ISO 25",
            "aperture": "f/2.2",
            "shutter": "1/777s",
            "focal": "4mm"
        }
    },
    {
        "src": "assets/images/thumbs/IMG_8418.JPG",
        "full": "assets/images/optimized/IMG_8418.JPG",
        "title": "",
        "year": "2017",
        "exif": {
            "camera": "iPhone SE",
            "iso": "ISO 25",
            "aperture": "f/2.2",
            "shutter": "1/1425s",
            "focal": "4mm"
        }
    },
    {
        "src": "assets/images/thumbs/IMG_8248.JPG",
        "full": "assets/images/optimized/IMG_8248.JPG",
        "title": "",
        "year": "2017",
        "exif": {
            "camera": "iPhone SE",
            "iso": "ISO 25",
            "aperture": "f/2.2",
            "shutter": "1/674s",
            "focal": "4mm"
        }
    },
    {
        "src": "assets/images/thumbs/IMG_7971.JPG",
        "full": "assets/images/optimized/IMG_7971.JPG",
        "title": "",
        "year": "2017",
        "exif": {
            "camera": "iPhone SE",
            "iso": "ISO 25",
            "aperture": "f/2.2",
            "shutter": "1/746s",
            "focal": "4mm"
        }
    },
    {
        "src": "assets/images/thumbs/IMG_2266.jpg",
        "full": "assets/images/optimized/IMG_2266.jpg",
        "title": "",
        "year": "2015",
        "exif": {
            "camera": "iPhone 5s",
            "iso": "ISO 32",
            "aperture": "f/2.2",
            "shutter": "1/352s",
            "focal": "4mm"
        }
    }
];

document.addEventListener('DOMContentLoaded', () => {
    console.log("App iniciada"); // Debug
    initCursor();
    initGallery();
    initScrollAnimations();
    initMobileMenu();
    initLightbox();
    initBackToTop();
    initScrollProgress();
    initTheme();
});

// Mobile Menu Logic
function initMobileMenu() {
    // ... existing code ...
}

// Back to Top Logic
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');

    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Scroll Progress Logic
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');

    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = scrollPercent + '%';
    });
}

// Theme Logic
function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            // Save preference
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
}

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');

        // Animate Links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
}

// Custom Cursor Logic
function initCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    // Check key elements
    if (!cursorDot || !cursorOutline) {
        console.error("Cursor elements not found");
        return;
    }

    // Force visibility via JS
    cursorDot.style.opacity = '1';
    cursorOutline.style.opacity = '1';

    // Check if device is touch or fine pointer
    if (matchMedia('(pointer:fine)').matches) {

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot moves instantly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline moves with lag using animate for performance
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effects on clickable elements
        const clickables = document.querySelectorAll('a, button, .gallery-item');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });
    } else {
        // Hide on touch DEVICES, but if user requests mobile view on desktop we might want to keep it?
        // Actually, for true mobile devices we usually hide the custom cursor.
        // Let's ensure it's hidden on touch only.
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
    }
}

// Gallery Population Logic
let IMAGES_PER_PAGE = window.innerWidth <= 768 ? 9 : 8; // 9 for mobile (3x3), 8 for desktop
let currentIndex = 0;

function initGallery() {
    const grid = document.getElementById('gallery-grid');
    const gallerySection = document.querySelector('#gallery .container');

    if (!grid || !gallerySection) return;

    // Sort images by year descending (newest first)
    // If years are equal, we could sort by src (filename) as secondary, but year is main request
    galleryImages.sort((a, b) => b.year - a.year);

    // Create Load More button
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.innerText = 'Ver más';
    loadMoreBtn.classList.add('btn', 'primary-btn', 'load-more-btn');
    loadMoreBtn.style.marginTop = '2rem';
    loadMoreBtn.style.display = 'none'; // Hidden initially

    // Wrapper for button to center it
    const btnWrapper = document.createElement('div');
    btnWrapper.style.textAlign = 'center';
    btnWrapper.style.width = '100%';
    btnWrapper.appendChild(loadMoreBtn);

    gallerySection.appendChild(btnWrapper);

    const loadImages = () => {
        // If we showed all images, this click means "Show Less"
        if (currentIndex >= galleryImages.length) {
            // Animate removal row by row (reverse order)
            // 1. Get all items to remove
            const allItems = Array.from(grid.querySelectorAll('.gallery-item'));
            const itemsToRemove = allItems.slice(IMAGES_PER_PAGE);

            // 2. Animate them out in reverse (bottom to top)
            itemsToRemove.reverse().forEach((item, index) => {
                // Stagger transition
                setTimeout(() => {
                    item.style.animation = 'fadeOutDown 0.3s ease forwards';

                    // Remove from DOM after animation
                    setTimeout(() => {
                        item.remove();
                    }, 300);
                }, index * 50); // Fast stagger (50ms per item)
            });

            // 3. Reset state & Scroll after animations complete
            const totalAnimationTime = (itemsToRemove.length * 50) + 300;

            setTimeout(() => {
                currentIndex = IMAGES_PER_PAGE;
                loadMoreBtn.innerText = 'Ver más';
                loadMoreBtn.style.display = 'inline-block';

                // Smooth scroll to top to realign view
                document.getElementById('gallery').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, totalAnimationTime);

            return;
        }

        const nextBatch = galleryImages.slice(currentIndex, currentIndex + IMAGES_PER_PAGE);

        nextBatch.forEach((imgData, index) => {
            const item = document.createElement('div');
            item.classList.add('gallery-item');

            // Add fade-in animation class for new items with stagger
            item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`; // 100ms stagger

            // Calculate absolute index
            const absoluteIndex = currentIndex + index;

            item.dataset.index = absoluteIndex; // Store index for lightbox

            item.innerHTML = `
        <img src="${imgData.src}" alt="${imgData.title}" loading="lazy" oncontextmenu="return false;" ondragstart="return false;">
        <div class="image-overlay">
            <h3>${imgData.title}</h3>
            <p>${imgData.year}</p>
        </div>
    `;

            // Blur-up logic
            const img = item.querySelector('img');

            // If image is already cached/loaded
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.onload = () => {
                    img.classList.add('loaded');
                };
            }

            // Remove the previous opacity=0 hack as we are now handling it via CSS class
            // item.style.opacity = '0';

            grid.appendChild(item);
        });

        currentIndex += nextBatch.length;

        // Check if we reached the end
        if (currentIndex >= galleryImages.length) {
            loadMoreBtn.innerText = 'Ver menos';
            loadMoreBtn.style.display = 'inline-block';
        } else {
            loadMoreBtn.innerText = 'Ver más';
            loadMoreBtn.style.display = 'inline-block';
        }
    };

    // Load first batch
    loadImages();

    // Event listener for button
    loadMoreBtn.addEventListener('click', loadImages);

    // Event listener for Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && loadMoreBtn.innerText === 'Ver menos') {
            loadImages(); // Re-uses the reset logic inside loadImages
        }
    });
}

// Lightbox Logic
let currentLightboxIndex = 0;

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxYear = document.getElementById('lightbox-year');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const grid = document.getElementById('gallery-grid');

    if (!lightbox || !grid) return;

    // Open Lightbox (Event Delegation)
    grid.addEventListener('click', (e) => {
        // Find closest gallery-item parent
        const item = e.target.closest('.gallery-item');
        if (item) {
            const index = parseInt(item.dataset.index);
            openLightbox(index);
        }
    });

    function openLightbox(index) {
        currentLightboxIndex = index;
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.classList.add('lightbox-active'); // For cursor style
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.classList.remove('lightbox-active');
        document.body.style.overflow = '';
    }

    function updateLightboxContent() {
        const imgData = galleryImages[currentLightboxIndex];

        // Update button states
        if (currentLightboxIndex === 0) {
            prevBtn.style.opacity = '0.1';
            prevBtn.style.pointerEvents = 'none';
        } else {
            prevBtn.style.opacity = '1';
            prevBtn.style.pointerEvents = 'all';
        }

        if (currentLightboxIndex === galleryImages.length - 1) {
            nextBtn.style.opacity = '0.1';
            nextBtn.style.pointerEvents = 'none';
        } else {
            nextBtn.style.opacity = '1';
            nextBtn.style.pointerEvents = 'all';
        }

        // 1. Fade out current image completely
        lightboxImg.style.opacity = '0';

        // 2. Wait for fade out, then swap source
        setTimeout(() => {
            lightboxImg.src = imgData.full || imgData.src;
            lightboxImg.alt = imgData.title;
            // lightboxTitle.innerText = imgData.title; // Title usually empty, hiding to clean up

            // Unify Year and EXIF
            const exifContainer = document.getElementById('lightbox-exif');

            let yearHTML = '';
            let techDataParts = [];

            if (imgData.year) {
                yearHTML = `<span class="year">${imgData.year}</span>`;
            }

            if (imgData.exif) {
                const { camera, focal, aperture, shutter, iso } = imgData.exif;
                if (camera) techDataParts.push(camera);
                if (focal) techDataParts.push(focal);
                if (aperture) techDataParts.push(aperture);
                if (shutter) techDataParts.push(shutter);
                if (iso) techDataParts.push(iso);
            }

            const techDataHTML = techDataParts.map(p => `<span class="tech-data">${p}</span>`).join('<span class="separator">|</span>');

            // Combine with separator if both exist
            const parts = [yearHTML, techDataHTML].filter(p => p);
            exifContainer.innerHTML = parts.join('<span class="separator">|</span>');
            exifContainer.style.display = 'flex';

            // Clear separate year just in case
            lightboxYear.innerText = '';
            lightboxTitle.innerText = ''; // Hide title for minimal look unless needed

            // 3. When new image loads, fade it in
            lightboxImg.onload = () => {
                lightboxImg.style.opacity = '1';

                // 4. Preload next image for better performance
                if (currentLightboxIndex < galleryImages.length - 1) {
                    const nextImg = new Image();
                    nextImg.src = galleryImages[currentLightboxIndex + 1].full || galleryImages[currentLightboxIndex + 1].src;
                }
            };
        }, 200);
    }

    function nextImage() {
        if (currentLightboxIndex < galleryImages.length - 1) {
            currentLightboxIndex++;
            updateLightboxContent();
        }
    }

    function prevImage() {
        if (currentLightboxIndex > 0) {
            currentLightboxIndex--;
            updateLightboxContent();
        }
    }

    // Event Listeners
    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });

    // Close on click outside
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });

    // Touch/Swipe navigation for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance for swipe
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        // Check if horizontal swipe is more dominant than vertical
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Swipe left (next image)
            if (deltaX < -swipeThreshold) {
                nextImage();
            }
            // Swipe right (previous image)
            else if (deltaX > swipeThreshold) {
                prevImage();
            }
        }
    }

    // Security: Disable right click and drag on image
    lightboxImg.addEventListener('contextmenu', (e) => e.preventDefault());
    lightboxImg.addEventListener('dragstart', (e) => e.preventDefault());
}

// Simple Intersection Observer for Fade-in effects
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in-section'); // Add base class via JS
        observer.observe(section);
    });
}
