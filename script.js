// PhyloDive - Professional & Elegant Interactive Script

document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initNavigation();
    initScrollAnimations();
    initSmoothScrolling();
    initScrollToTopButton();
    initContactForm();
    initDNAHelix();
    initMarineCreatures();
});

/**
 * Professional Custom Cursor - Ultra Performance
 * High-performance white ball cursor with smooth animations
 */
function initProfessionalCursor() {
    // Only initialize on desktop devices with mouse
    if (window.innerWidth <= 768 || 'ontouchstart' in window) return;
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    let isMoving = false;
    let animationId = null;
    
    // High-performance mouse tracking
    const updateMousePosition = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (!isMoving) {
            isMoving = true;
            animationId = requestAnimationFrame(updateCursor);
        }
    };
    
    // Smooth cursor animation with RAF
    const updateCursor = () => {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        isMoving = false;
    };
    
    // Event listeners
    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    
    // Interactive elements hover effects with better selector
    const setupHoverEffects = () => {
        const interactiveElements = document.querySelectorAll(
            'a, button, .btn, .nav-link, .stat-card, .feature-card, .problem-card, .pipeline-step, input, textarea, [role="button"], [tabindex]'
        );
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            }, { passive: true });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            }, { passive: true });
        });
    };
    
    // Initial setup
    setupHoverEffects();
    
    // Re-setup when new elements are added (for lazy-loaded content)
    const observer = new MutationObserver(() => {
        setupHoverEffects();
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Click effect
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
}

/**
 * Legacy Premium Custom Cursor (DISABLED)
 * Creates a sophisticated cursor with smooth following animation
 */
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const follower = document.createElement('div');
    follower.className = 'custom-cursor-follower';
    
    document.body.appendChild(cursor);
    document.body.appendChild(follower);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function updateCursor() {
        // Smooth cursor movement
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        followerX += (mouseX - followerX) * 0.05;
        followerY += (mouseY - followerY) * 0.05;
        
        cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
        follower.style.transform = `translate(${followerX - 4}px, ${followerY - 4}px)`;
        
        requestAnimationFrame(updateCursor);
    }
    updateCursor();
    
    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link, .card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform += ' scale(1.5)';
            cursor.style.background = 'var(--gradient-secondary)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
            cursor.style.background = 'var(--gradient-accent)';
        });
    });
}

/**
 * Fast Preloader - Optimized for Performance
 * Quickly hides preloader to improve INP
 */
function initFastPreloader() {
    const preloader = document.getElementById('preloader');
    
    // Remove preloader immediately for better performance
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.classList.add('loaded');
            preloader.remove();
        }, 100); // Very fast removal
    }
}

/**
 * Original Preloader Logic (DISABLED FOR PERFORMANCE)
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
                document.body.classList.add('loaded');
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
            document.body.classList.add('loaded');
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

    // Fast preloader for better performance
    cycleTitles(); // Show the first title immediately
    const titleInterval = setInterval(cycleTitles, 500); // Cycle every 0.5 seconds for faster loading

    // As a fallback, ensure preloader is hidden after window load and some delay
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (!preloader.classList.contains('hidden')) {
                clearInterval(titleInterval);
                preloader.classList.add('hidden');
                document.body.classList.add('loaded');
                preloader.addEventListener('transitionend', () => preloader.remove());
            }
        }, titles.length * 2000); // Wait for all titles to have had a chance to show
    });
}


/**
 * Ultra-Light Navigation - Maximum Performance
 * Minimal navigation with aggressive scroll optimization
 */
function initUltraLightNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Simple mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Ultra-optimized scroll handler
    let scrolling = false;
    let scrollTimer;
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        // Add scrolling class to disable animations
        if (!scrolling) {
            document.body.classList.add('scrolling');
            scrolling = true;
            
            // Optimize cursor during scroll
            const cursor = document.querySelector('.custom-cursor');
            if (cursor) {
                cursor.style.transition = 'none';
            }
        }
        
        // Only update navbar if scroll position changed significantly
        if (Math.abs(currentScrollY - lastScrollY) > 10) {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (currentScrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
            lastScrollY = currentScrollY;
        }
        
        // Remove scrolling class after scroll ends
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            document.body.classList.remove('scrolling');
            scrolling = false;
            
            // Re-enable cursor transitions
            const cursor = document.querySelector('.custom-cursor');
            if (cursor) {
                cursor.style.transition = 'transform 0.1s ease, scale 0.2s ease';
            }
        }, 100);
    };
    
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Original Navigation Functionality (DISABLED FOR PERFORMANCE)
 * Handles mobile menu, active link highlighting, and navbar styling on scroll.
 */
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navContainer = document.querySelector('.nav-container');

    // Toggle mobile menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
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
 * Optimized DNA Helix Animation
 * Performance-optimized 3D DNA helix using Three.js with smooth animations
 */
function initOptimizedDNAHelix() {
    const container = document.querySelector('.dna-helix');
    if (!container) return;
    
    // Performance check - only initialize on visible containers
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initDNAHelixContent(container);
                observer.unobserve(container);
            }
        });
    });
    observer.observe(container);
}

function initDNAHelixContent(container) {

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

    // Optimized animation loop with smoother, slower animations
    let animationId;
    let lastTime = 0;
    const targetFPS = 30; // Reduced FPS for better performance
    const fpsInterval = 1000 / targetFPS;
    
    const animate = (currentTime) => {
        animationId = requestAnimationFrame(animate);
        
        // Throttle animation to 30fps for better performance
        if (currentTime - lastTime < fpsInterval) return;
        lastTime = currentTime;
        
        // Slower, smoother rotation - reduced from 0.005 to 0.002
        dnaGroup.rotation.y += 0.002;
        
        // Slower, gentler bobbing motion - reduced frequency
        dnaGroup.position.y = Math.sin(currentTime * 0.0005) * 0.15;
        
        // Optimize animations - only update every other frame
        if (Math.floor(currentTime / fpsInterval) % 2 === 0) {
            // Animate individual base pairs with slower pulsing
            basePairs.forEach((basePair, index) => {
                const phase = (currentTime * 0.001) + (index * 0.2); // Slower phase
                basePair.scale.x = 1 + Math.sin(phase) * 0.08; // Reduced amplitude
                basePair.material.opacity = 0.6 + Math.sin(phase) * 0.15; // Smoother opacity
            });
            
            // Animate strand spheres with gentler pulsing effect
            strand1Spheres.forEach((sphere, index) => {
                const phase = (currentTime * 0.0015) + (index * 0.08); // Slower animation
                sphere.scale.setScalar(1 + Math.sin(phase) * 0.1); // Reduced scale variation
            });
            
            // Animate second strand with phase offset
            strand2Spheres.forEach((sphere, index) => {
                const phase = (currentTime * 0.0015) + (index * 0.08) + Math.PI; // Slower with phase offset
                sphere.scale.setScalar(1 + Math.sin(phase) * 0.1); // Consistent scale variation
            });
        }
        
        renderer.render(scene, camera);
    };
    
    animate();
    
    // Mark as loaded after initialization
    container.classList.add('loaded');

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

/**
 * Marine Creatures Animation
 * Creates and animates cute marine creatures in the hero background
 */
function initMarineCreatures() {
    const bubblesBackground = document.getElementById('bubbles-background');
    if (!bubblesBackground) return;

    const marineCreatures = [
        { icon: '🐠', size: '2rem', speed: 15000 },   // Tropical fish
        { icon: '🐟', size: '1.8rem', speed: 18000 }, // Fish
        { icon: '🐙', size: '2.5rem', speed: 25000 }, // Octopus
        { icon: '🦑', size: '2.2rem', speed: 22000 }, // Squid
        { icon: '🐡', size: '1.5rem', speed: 20000 }, // Pufferfish
        { icon: '🦈', size: '3rem', speed: 12000 },   // Shark
        { icon: '🐢', size: '2.8rem', speed: 30000 }, // Turtle
        { icon: '🦞', size: '1.8rem', speed: 16000 }, // Lobster
        { icon: '🦀', size: '1.6rem', speed: 14000 }, // Crab
        { icon: '🐚', size: '1.2rem', speed: 35000 }, // Shell
        { icon: '🪼', size: '2rem', speed: 28000 },   // Jellyfish
    ];

    function createMarineCreature() {
        const creature = marineCreatures[Math.floor(Math.random() * marineCreatures.length)];
        const creatureElement = document.createElement('div');
        
        creatureElement.className = 'marine-creature';
        creatureElement.innerHTML = creature.icon;
        
        // Random starting position (left side, random height)
        const startY = Math.random() * 80 + 10; // 10% to 90% from top
        const endX = window.innerWidth + 100; // End beyond right side
        const startX = -100; // Start beyond left side
        
        // Random vertical movement
        const verticalMovement = (Math.random() - 0.5) * 200; // ±100px vertical drift
        
        creatureElement.style.cssText = `
            position: absolute;
            left: ${startX}px;
            top: ${startY}%;
            font-size: ${creature.size};
            z-index: 0;
            pointer-events: none;
            opacity: 0.7;
            transition: none;
            filter: drop-shadow(0 0 10px rgba(45, 212, 191, 0.3));
        `;
        
        bubblesBackground.appendChild(creatureElement);
        
        // Animate the creature swimming across
        const duration = creature.speed + (Math.random() * 5000); // Add some randomness
        const animation = creatureElement.animate([
            {
                transform: 'translateX(0px) translateY(0px) scaleX(1)',
                opacity: 0.7
            },
            {
                transform: `translateX(${endX}px) translateY(${verticalMovement}px) scaleX(1)`,
                opacity: 0.7
            }
        ], {
            duration: duration,
            easing: 'linear',
            fill: 'forwards'
        });
        
        // Remove creature after animation
        animation.addEventListener('finish', () => {
            if (creatureElement.parentNode) {
                creatureElement.parentNode.removeChild(creatureElement);
            }
        });
        
        // Occasionally flip the creature for variety
        if (Math.random() > 0.5) {
            creatureElement.style.transform = 'scaleX(-1)';
        }
    }
    
    // Create initial creatures
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createMarineCreature(), i * 2000);
    }
    
    // Create new creatures periodically
    setInterval(createMarineCreature, 3000 + Math.random() * 4000);
    
    // Create bubbles continuously
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 30 + 10; // 10-40px
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 6000 + 8000; // 8-14 seconds
        
        bubble.style.cssText = `
            position: absolute;
            left: ${startX}px;
            bottom: -50px;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle at 30% 30%, rgba(45, 212, 191, 0.3), rgba(45, 212, 191, 0.1));
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(45, 212, 191, 0.5);
            pointer-events: none;
            z-index: 0;
        `;
        
        bubblesBackground.appendChild(bubble);
        
        // Animate bubble rising
        const horizontalDrift = (Math.random() - 0.5) * 200; // Random horizontal movement
        const animation = bubble.animate([
            {
                transform: 'translateY(0px) translateX(0px) scale(1)',
                opacity: 1
            },
            {
                transform: `translateY(-${window.innerHeight + 100}px) translateX(${horizontalDrift}px) scale(1.5)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'ease-out',
            fill: 'forwards'
        });
        
        animation.addEventListener('finish', () => {
            if (bubble.parentNode) {
                bubble.parentNode.removeChild(bubble);
            }
        });
    }
    
    // Create bubbles periodically
    setInterval(createBubble, 500 + Math.random() * 1000);
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

/**
 * High-Performance Scrolling System
 * Ultra-optimized scrolling with minimal overhead
 */
function initHighPerformanceScrolling() {
    // Minimal scroll animations - only for essential elements
    const essentialElements = document.querySelectorAll('.section-header');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3, // Higher threshold for fewer triggers
        rootMargin: '0px 0px -100px 0px'
    });

    // Minimal initial state
    essentialElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.3s ease';
        observer.observe(el);
    });
}

/**
 * Lazy Loading System
 * Loads content sections as they become visible
 */
function initLazyLoading() {
    const sections = document.querySelectorAll('section:not(#home)');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Only add loaded class, skip heavy animations during scroll
                entry.target.classList.add('loaded');
                
                // Delay heavy initializations to avoid scroll blocking
                const sectionId = entry.target.id;
                setTimeout(() => {
                    switch(sectionId) {
                        case 'importance':
                            if (!document.body.classList.contains('scrolling')) {
                                initStatsAnimation(entry.target);
                            }
                            break;
                    }
                }, 200); // Delay to avoid blocking scroll
                
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.4, // Higher threshold to trigger less frequently
        rootMargin: '0px 0px -200px 0px' // Larger margin to reduce triggers
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

/**
 * Optimized Stats Animation - Minimal resource usage
 */
function initStatsAnimation(section) {
    const statNumbers = section.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isPercentage = finalValue.includes('%');
        const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
        
        let currentValue = 0;
        const increment = numericValue / 20; // Reduced to 20 steps for better performance
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
                currentValue = numericValue;
                clearInterval(counter);
            }
            
            stat.textContent = isPercentage ? 
                Math.floor(currentValue) + '%' : 
                Math.floor(currentValue) + (finalValue.includes('M') ? 'M' : '');
        }, 50); // Slower interval to reduce CPU usage
    });
}

/**
 * Pipeline Animation - Staggered entrance
 */
function initPipelineAnimation(section) {
    const steps = section.querySelectorAll('.pipeline-step');
    const arrows = section.querySelectorAll('.pipeline-arrow');
    
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.style.opacity = '1';
            step.style.transform = 'translateY(0) scale(1)';
        }, index * 200);
    });
    
    arrows.forEach((arrow, index) => {
        setTimeout(() => {
            arrow.style.opacity = '1';
            arrow.style.transform = 'translateX(0)';
        }, (index * 200) + 100);
    });
}

/**
 * Feature Cards - Hover optimizations
 */
function initFeatureCards(section) {
    const cards = section.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/**
 * Cursor Performance Monitor
 * Monitors cursor performance and optimizes based on frame rate
 */
function monitorCursorPerformance() {
    if (!document.querySelector('.custom-cursor')) return;
    
    let frameCount = 0;
    let lastTime = performance.now();
    
    const checkPerformance = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) { // Check every second
            const fps = frameCount;
            frameCount = 0;
            lastTime = currentTime;
            
            // Optimize cursor based on performance
            const cursor = document.querySelector('.custom-cursor');
            if (cursor && fps < 30) {
                // Reduce cursor quality on low-end devices
                cursor.style.boxShadow = 'none';
                cursor.style.backdropFilter = 'none';
                console.log('%cCursor optimized for low-end device', 'color: orange');
            }
        }
        
        requestAnimationFrame(checkPerformance);
    };
    
    requestAnimationFrame(checkPerformance);
}

/**
 * Performance Monitoring - INP Tracker
 * Monitors Interaction to Next Paint for performance optimization
 */
function monitorINP() {
    // Simple INP monitoring
    let interactionStart = 0;
    
    ['click', 'keydown', 'pointerdown'].forEach(eventType => {
        document.addEventListener(eventType, () => {
            interactionStart = performance.now();
        });
    });
    
    // Monitor paint events
    const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
            if (entry.entryType === 'paint' && interactionStart > 0) {
                const inp = entry.startTime - interactionStart;
                if (inp > 0) {
                    console.log(`%cINP: ${inp.toFixed(2)}ms`, inp > 200 ? 'color: red' : inp > 100 ? 'color: orange' : 'color: green');
                }
            }
        });
    });
    
    try {
        observer.observe({ entryTypes: ['paint', 'navigation'] });
        console.log('%cINP monitoring enabled - optimized for performance', 'color: #10b981');
    } catch (e) {
        console.log('Performance monitoring not supported in this browser');
    }
}
