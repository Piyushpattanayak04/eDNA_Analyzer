// PhyloDive - Professional & Elegant Interactive Script

document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initNavigation();
    initScrollAnimations();
    initSmoothScrolling();
    initScrollToTopButton();
    initContactForm();
    initDNAHelix();
});

/**
 * Preloader Logic
 * Hides the preloader after the window has fully loaded and cycles through titles.
 */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const titles = document.querySelectorAll('.preloader-title');
    let currentIndex = 0;

    if (!preloader || titles.length === 0) {
        // If no preloader or titles, just hide it on load
        window.addEventListener('load', () => {
            if (preloader) {
                preloader.classList.add('hidden');
                preloader.addEventListener('transitionend', () => preloader.remove());
            }
        });
        return;
    }

    // Function to cycle titles
    const cycleTitles = () => {
        if (currentIndex >= titles.length) {
            // End of titles, hide preloader
            if (preloader) {
                preloader.classList.add('hidden');
                preloader.addEventListener('transitionend', () => preloader.remove());
            }
            return;
        }

        const currentTitle = titles[currentIndex];
        const previousTitle = currentIndex > 0 ? titles[currentIndex - 1] : null;

        if (previousTitle) {
            previousTitle.classList.remove('active');
            previousTitle.classList.add('previous');
        }
        
        currentTitle.classList.add('active');
        
        currentIndex++;
    };

    // Start cycling on DOMContentLoaded, then continue on an interval
    cycleTitles(); // Show the first title immediately
    const titleInterval = setInterval(cycleTitles, 2000); // Cycle every 2 seconds

    // As a fallback, ensure preloader is hidden after window load and some delay
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (!preloader.classList.contains('hidden')) {
                clearInterval(titleInterval);
                preloader.classList.add('hidden');
                preloader.addEventListener('transitionend', () => preloader.remove());
            }
        }, titles.length * 2000); // Wait for all titles to have had a chance to show
    });
}


/**
 * Navigation Functionality
 * Handles mobile menu, active link highlighting, and navbar styling on scroll.
 */
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navContainer = document.querySelector('.nav-container');

    // Toggle mobile menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Update navbar background and active link on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link highlighting
        let currentSectionId = '';
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - (navbar.offsetHeight + 50)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
        // Special case for home
        if (window.scrollY < 400) {
             navLinks.forEach(link => link.classList.remove('active'));
             document.querySelector('.nav-link[href="#home"]').classList.add('active');
        }
    });
}

/**
 * Smooth Scrolling
 * Implements smooth scrolling for internal navigation links.
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            // Do not smooth scroll for external links
            if (targetId.startsWith("http")) {
                window.open(targetId, '_blank');
                return;
            }
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scroll Animations
 * Initializes animations for elements as they enter the viewport.
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section-header, .stat-card, .narrative-content, .narrative-visual, .problem-card, .solution-stage, .solution-visual, .pipeline-step, .feature-card, .contact-info, .contact-form');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}


/**
 * Scroll to Top Button
 * Displays a button to scroll to the top of the page when scrolled down.
 */
function initScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/**
 * Contact Form Functionality
 * Handles submission of the contact form.
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

/**
 * DNA Helix Animation
 * Initializes and animates a 3D DNA helix using Three.js.
 */
function initDNAHelix() {
    const container = document.querySelector('.dna-helix');
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // DNA Helix parameters
    const helixRadius = 1.5;
    const helixHeight = 8;
    const turns = 4;
    const particlesPerTurn = 32;
    const totalParticles = turns * particlesPerTurn;
    const basePairDistance = 0.6;

    // Materials
    const strandMaterial1 = new THREE.MeshPhongMaterial({ 
        color: 0x67e8f9,
        shininess: 100,
        transparent: true,
        opacity: 0.9
    });
    const strandMaterial2 = new THREE.MeshPhongMaterial({ 
        color: 0x06b6d4,
        shininess: 100,
        transparent: true,
        opacity: 0.9
    });
    const basePairMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xf0f9ff,
        transparent: true,
        opacity: 0.7
    });

    // Geometries
    const sphereGeometry = new THREE.SphereGeometry(0.1, 8, 6);
    const cylinderGeometry = new THREE.CylinderGeometry(0.02, 0.02, helixRadius * 2, 8);

    // Create DNA strands
    const dnaGroup = new THREE.Group();
    const strand1Points = [];
    const strand2Points = [];
    
    // Generate helix points
    for (let i = 0; i < totalParticles; i++) {
        const t = i / totalParticles;
        const angle = t * turns * Math.PI * 2;
        const y = (t - 0.5) * helixHeight;
        
        // Strand 1
        const x1 = Math.cos(angle) * helixRadius;
        const z1 = Math.sin(angle) * helixRadius;
        strand1Points.push(new THREE.Vector3(x1, y, z1));
        
        // Strand 2 (opposite side)
        const x2 = Math.cos(angle + Math.PI) * helixRadius;
        const z2 = Math.sin(angle + Math.PI) * helixRadius;
        strand2Points.push(new THREE.Vector3(x2, y, z2));
    }

    // Create strand spheres and connections
    const strand1Spheres = [];
    const strand2Spheres = [];
    const basePairs = [];

    for (let i = 0; i < totalParticles; i++) {
        // Strand 1 spheres
        const sphere1 = new THREE.Mesh(sphereGeometry, strandMaterial1);
        sphere1.position.copy(strand1Points[i]);
        dnaGroup.add(sphere1);
        strand1Spheres.push(sphere1);

        // Strand 2 spheres
        const sphere2 = new THREE.Mesh(sphereGeometry, strandMaterial2);
        sphere2.position.copy(strand2Points[i]);
        dnaGroup.add(sphere2);
        strand2Spheres.push(sphere2);

        // Base pairs (every few particles)
        if (i % 4 === 0) {
            const basePair = new THREE.Mesh(cylinderGeometry, basePairMaterial);
            basePair.position.copy(strand1Points[i]).lerp(strand2Points[i], 0.5);
            
            // Orient the cylinder between the two points
            const direction = new THREE.Vector3().subVectors(strand2Points[i], strand1Points[i]);
            const quaternion = new THREE.Quaternion().setFromUnitVectors(
                new THREE.Vector3(0, 1, 0), 
                direction.normalize()
            );
            basePair.setRotationFromQuaternion(quaternion);
            
            dnaGroup.add(basePair);
            basePairs.push(basePair);
        }

        // Connect consecutive spheres with lines
        if (i < totalParticles - 1) {
            // Strand 1 connections
            const line1Geometry = new THREE.BufferGeometry().setFromPoints([
                strand1Points[i], strand1Points[i + 1]
            ]);
            const line1 = new THREE.Line(line1Geometry, new THREE.LineBasicMaterial({ 
                color: 0x67e8f9, 
                transparent: true, 
                opacity: 0.6 
            }));
            dnaGroup.add(line1);

            // Strand 2 connections
            const line2Geometry = new THREE.BufferGeometry().setFromPoints([
                strand2Points[i], strand2Points[i + 1]
            ]);
            const line2 = new THREE.Line(line2Geometry, new THREE.LineBasicMaterial({ 
                color: 0x06b6d4, 
                transparent: true, 
                opacity: 0.6 
            }));
            dnaGroup.add(line2);
        }
    }

    scene.add(dnaGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x67e8f9, 1);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x06b6d4, 0.8);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0xf0f9ff, 0.8, 20);
    pointLight.position.set(0, 0, 8);
    scene.add(pointLight);

    // Camera position
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);

    // Animation loop
    let animationId;
    const animate = () => {
        animationId = requestAnimationFrame(animate);
        
        // Rotate the DNA helix
        dnaGroup.rotation.y += 0.005;
        
        // Gentle bobbing motion
        dnaGroup.position.y = Math.sin(Date.now() * 0.001) * 0.2;
        
        // Animate individual base pairs
        basePairs.forEach((basePair, index) => {
            const phase = (Date.now() * 0.002) + (index * 0.3);
            basePair.scale.x = 1 + Math.sin(phase) * 0.1;
            basePair.material.opacity = 0.7 + Math.sin(phase) * 0.2;
        });
        
        // Animate strand spheres with pulsing effect
        strand1Spheres.forEach((sphere, index) => {
            const phase = (Date.now() * 0.003) + (index * 0.1);
            sphere.scale.setScalar(1 + Math.sin(phase) * 0.15);
        });
        
        strand2Spheres.forEach((sphere, index) => {
            const phase = (Date.now() * 0.003) + (index * 0.1) + Math.PI;
            sphere.scale.setScalar(1 + Math.sin(phase) * 0.15);
        });
        
        renderer.render(scene, camera);
    };
    
    animate();

    // Handle window resize
    const handleResize = () => {
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onMouseMove = (event) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        targetRotationX = mouseY * 0.3;
        targetRotationY = mouseX * 0.3;
    };

    container.addEventListener('mousemove', onMouseMove);

    // Smooth mouse interaction
    const updateMouseInteraction = () => {
        dnaGroup.rotation.x += (targetRotationX - dnaGroup.rotation.x) * 0.05;
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
        
        requestAnimationFrame(updateMouseInteraction);
    };
    
    updateMouseInteraction();

    // Cleanup function
    const cleanup = () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        window.removeEventListener('resize', handleResize);
        container.removeEventListener('mousemove', onMouseMove);
        
        // Dispose of geometries and materials
        scene.traverse((object) => {
            if (object.geometry) {
                object.geometry.dispose();
            }
            if (object.material) {
                if (object.material.map) object.material.map.dispose();
                object.material.dispose();
            }
        });
        
        renderer.dispose();
    };

    // Store cleanup function for potential future use
    container._dnaHelixCleanup = cleanup;
    
    // Intersection Observer for performance optimization
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!animationId) {
                    animate();
                }
            } else {
                if (animationId) {
                    cancelAnimationFrame(animationId);
                    animationId = null;
                }
            }
        });
    });
    
    observer.observe(container);
}

// Console welcome message for developers
console.log(
    '%c🧬 PhyloDive - AI-Powered Marine Biodiversity Discovery 🌊',
    'color: #06b6d4; font-size: 16px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);'
);
console.log(
    '%cExploring the depths of marine life through advanced AI and genomics!',
    'color: #0891b2; font-size: 12px;'
);
console.log(
    '%cInterested in contributing? Contact us at contact@phylodive.org',
    'color: #059669; font-size: 10px;'
);
