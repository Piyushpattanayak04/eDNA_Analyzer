// PhyloDive - Professional & Elegant Interactive Script

document.addEventListener('DOMContentLoaded', () => {
    // Performance-first loading - disable heavy animations
    const isMobile = window.innerWidth <= 1024 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Initialize essential functionality with optimized features
    initFastPreloader();
    initLightweightNavigation();
    initResponsiveHandling();
    
    // Initialize optimized visual features
    initOptimizedDNAHelix();
    initOptimizedScrollAnimations();
    initLazyLoading();
    
    console.log('Optimized mode: Selective animations enabled for better UX with good performance');
    
    // Monitor performance
    monitorINP();
});

/**
 * Premium Custom Cursor
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
 * Lightweight Navigation - Optimized for Performance
 * Essential navigation without heavy animations
 */
function initLightweightNavigation() {
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

    // Simple navbar scroll effect (throttled for performance)
    let scrollTimer;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        }, 16); // ~60fps throttling
    });
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
 * Marine Creatures Animation - DISABLED FOR PERFORMANCE
 * All fish and organism animations removed to improve INP
 */
function initMarineCreatures() {
    // Function disabled for performance optimization
    return;
}

/**
 * Scroll-triggered Interactive Effects
 * Creates bubbles and creatures on scroll with sound effects
 */
function initScrollEffects() {
    let lastScrollY = 0;
    let scrollThrottle = false;
    const bubblesBackground = document.getElementById('bubbles-background');
    
    // Create audio context for sound effects
    let audioContext;
    
    // Initialize audio context on first user interaction
    function initAudio() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
    }
    
    // Create bubble pop sound
    function createBubbleSound() {
        if (!audioContext) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    // Create creature swim sound
    function createSwimSound() {
        if (!audioContext) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime + 0.05);
        oscillator.frequency.setValueAtTime(250, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.08, audioContext.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
    }
    
    // Create scroll-triggered bubble burst
    function createScrollBubbles(x, y) {
        if (!bubblesBackground) return;
        
        const burstCount = Math.floor(Math.random() * 3) + 2; // 2-4 bubbles
        
        for (let i = 0; i < burstCount; i++) {
            setTimeout(() => {
                const bubble = document.createElement('div');
                bubble.className = 'scroll-bubble';
                
                const size = Math.random() * 20 + 10; // 10-30px
                const offsetX = (Math.random() - 0.5) * 100; // Random spread
                const offsetY = (Math.random() - 0.5) * 100;
                
                bubble.style.cssText = `
                    position: absolute;
                    left: ${x + offsetX}px;
                    top: ${y + offsetY}px;
                    width: ${size}px;
                    height: ${size}px;
                    background: radial-gradient(circle at 30% 30%, 
                        rgba(45, 212, 191, 0.6), 
                        rgba(45, 212, 191, 0.2));
                    border-radius: 50%;
                    box-shadow: 0 0 15px rgba(45, 212, 191, 0.8);
                    pointer-events: none;
                    z-index: 1;
                    animation: bubbleBurst 0.8s ease-out forwards;
                `;
                
                bubblesBackground.appendChild(bubble);
                
                // Play bubble sound
                createBubbleSound();
                
                // Remove bubble after animation
                setTimeout(() => {
                    if (bubble.parentNode) {
                        bubble.parentNode.removeChild(bubble);
                    }
                }, 800);
            }, i * 100); // Stagger bubble creation
        }
    }
    
    // Create scroll-triggered creature (rising from bottom like natural marine behavior)
    function createScrollCreature() {
        if (!bubblesBackground) return;
        
        const creatures = ['🐠', '🐟', '🐙', '🦑', '🐡', '🦈', '🐢', '🪼'];
        const creature = creatures[Math.floor(Math.random() * creatures.length)];
        
        const creatureElement = document.createElement('div');
        creatureElement.className = 'scroll-creature';
        creatureElement.innerHTML = creature;
        
        const startX = Math.random() * (window.innerWidth - 100);
        const startY = window.innerHeight + 100; // Start below viewport (ocean floor)
        const endY = -100; // End above viewport (ocean surface)
        
        creatureElement.style.cssText = `
            position: absolute;
            left: ${startX}px;
            top: ${startY}px;
            font-size: 2.5rem;
            z-index: 1;
            pointer-events: none;
            filter: drop-shadow(0 0 15px rgba(45, 212, 191, 0.6));
            animation: creatureRise 3s ease-out forwards;
        `;
        
        bubblesBackground.appendChild(creatureElement);
        
        // Play swim sound
        createSwimSound();
        
        // Animate creature rising (like coming up from ocean depths)
        const animation = creatureElement.animate([
            {
                transform: 'translateY(0px) rotate(0deg) scale(0.8)',
                opacity: 0.3
            },
            {
                transform: 'translateY(-50px) rotate(15deg) scale(1)',
                opacity: 1
            },
            {
                transform: `translateY(${endY - startY}px) rotate(-15deg) scale(1.2)`,
                opacity: 0
            }
        ], {
            duration: 3000,
            easing: 'ease-out',
            fill: 'forwards'
        });
        
        animation.addEventListener('finish', () => {
            if (creatureElement.parentNode) {
                creatureElement.parentNode.removeChild(creatureElement);
            }
        });
    }
    
    // Scroll event handler
    function handleScroll() {
        if (scrollThrottle) return;
        
        scrollThrottle = true;
        requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            const scrollDelta = Math.abs(currentScrollY - lastScrollY);
            
            // Initialize audio on first scroll
            initAudio();
            
            // Trigger effects based on scroll intensity
            if (scrollDelta > 10) { // Minimum scroll threshold
                
                // Create bubbles at random positions
                if (Math.random() > 0.7) { // 30% chance
                    const x = Math.random() * window.innerWidth;
                    const y = Math.random() * window.innerHeight;
                    createScrollBubbles(x, y);
                }
                
                // Create falling creatures
                if (Math.random() > 0.85) { // 15% chance
                    createScrollCreature();
                }
            }
            
            lastScrollY = currentScrollY;
            scrollThrottle = false;
        });
    }
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add click event for additional interactivity
    document.addEventListener('click', (e) => {
        initAudio();
        
        // Create bubbles at click position
        if (Math.random() > 0.6) { // 40% chance on click
            createScrollBubbles(e.clientX, e.clientY);
        }
    });
}

/**
 * Floating Particles Background Effect
 * Creates animated particles throughout the page for modern aesthetic
 */
function initFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'floating-particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
    `;
    document.body.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createFloatingParticle(particleContainer);
        }, i * 200);
    }
    
    // Particle creation disabled for performance
    // setInterval(() => {
    //     createFloatingParticle(particleContainer);
    // }, 3000);
}

function createFloatingParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 6 + 2; // 2-8px
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 50;
    const endY = -50;
    const drift = (Math.random() - 0.5) * 200; // Horizontal drift
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(45, 212, 191, 0.6), rgba(45, 212, 191, 0.1));
        border-radius: 50%;
        left: ${startX}px;
        top: ${startY}px;
        opacity: 0;
        filter: blur(0.5px);
    `;
    
    container.appendChild(particle);
    
    // Animate particle
    const duration = Math.random() * 10000 + 15000; // 15-25 seconds
    particle.animate([
        {
            transform: 'translateY(0px) translateX(0px) scale(0)',
            opacity: 0
        },
        {
            transform: `translateY(-100px) translateX(${drift * 0.3}px) scale(1)`,
            opacity: Math.random() * 0.8 + 0.2,
            offset: 0.1
        },
        {
            transform: `translateY(${endY - startY}px) translateX(${drift}px) scale(0.5)`,
            opacity: 0
        }
    ], {
        duration: duration,
        easing: 'linear'
    }).addEventListener('finish', () => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    });
}

/**
 * Enhanced Glassmorphism Effects
 * Adds interactive glassmorphism effects to various elements
 */
function initGlassmorphismEffects() {
    // Add glass effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.backdropFilter = 'blur(15px)';
            button.style.webkitBackdropFilter = 'blur(15px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.backdropFilter = 'blur(10px)';
            button.style.webkitBackdropFilter = 'blur(10px)';
        });
    });
    
    // Add glass ripple effect to cards
    const cards = document.querySelectorAll('.stat-card, .problem-card, .feature-card, .solution-stage');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                width: 0;
                height: 0;
                background: radial-gradient(circle, rgba(37, 99, 235, 0.3), transparent);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 1;
            `;
            
            card.style.position = 'relative';
            card.appendChild(ripple);
            
            ripple.animate([
                { width: '0px', height: '0px', opacity: 1 },
                { width: '400px', height: '400px', opacity: 0 }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).addEventListener('finish', () => {
                ripple.remove();
            });
        });
    });
}

/**
 * Premium Animations System
 * Advanced animations with stagger effects and smooth transitions
 */
function initPremiumAnimations() {
    // Staggered fade-in animation for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    entry.target.style.opacity = '1';
                }, index * 100);
                staggerObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Apply to all animatable elements
    const animatableElements = document.querySelectorAll('.stat-card, .problem-card, .feature-card, .pipeline-step');
    animatableElements.forEach(el => {
        el.style.transform = 'translateY(50px) scale(0.9)';
        el.style.opacity = '0';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        staggerObserver.observe(el);
    });
    
    // Text animation for headers
    const headers = document.querySelectorAll('h1, h2, h3');
    headers.forEach(header => {
        const text = header.textContent;
        header.innerHTML = '';
        
        [...text].forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.display = 'inline-block';
            span.style.transition = `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.03}s`;
            header.appendChild(span);
        });
        
        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const spans = entry.target.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    });
                    headerObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        headerObserver.observe(header);
    });
}

/**
 * Parallax Effects
 * Creates depth and smooth scrolling parallax
 */
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-background, .dna-helix, #bubbles-background');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    });
    
    // Section reveal animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(100px)';
        section.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => sectionObserver.observe(section));
}

/**
 * Magnetic Buttons
 * Buttons that attract cursor with smooth magnetic effect
 */
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.btn, .nav-link');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0) scale(1)';
        });
    });
}

/**
 * Particle System
 * Creates floating particles for visual enhancement
 */
function initParticleSystem() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    hero.appendChild(particlesContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        const types = ['particle', 'particle medium', 'particle large'];
        particle.className = types[Math.floor(Math.random() * types.length)];
        
        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation delay and duration
        const delay = Math.random() * 5;
        const duration = 8 + Math.random() * 4;
        particle.style.animationDelay = delay + 's';
        particle.style.animationDuration = duration + 's';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, (delay + duration) * 1000);
    }
    
    // Create initial particles
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createParticle(), i * 200);
    }
    
    // Particle creation disabled for performance
    // setInterval(createParticle, 800);
}

/**
 * Morphing Text Effect
 * Creates dynamic text morphing animations
 */
function initMorphingText() {
    const titles = document.querySelectorAll('.hero-text h1');
    
    titles.forEach(title => {
        const text = title.textContent;
        title.style.background = 'linear-gradient(45deg, var(--primary-blue), var(--secondary-purple), var(--accent-cyan))';
        title.style.backgroundSize = '200% 200%';
        title.style.webkitBackgroundClip = 'text';
        title.style.webkitTextFillColor = 'transparent';
        title.style.animation = 'textGradientShift 3s ease-in-out infinite';
    });
}

/**
 * Responsive Handling
 * Manages responsive behavior and mobile optimizations
 */
function initResponsiveHandling() {
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            handleResponsiveResize();
        }, 250);
    });
    
    // Handle orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(handleResponsiveResize, 300);
    });
    
    // Initial setup
    handleResponsiveResize();
    
    // Mobile navigation improvements
    if (window.innerWidth <= 768) {
        setupMobileNavigation();
    }
    
    // Optimize animations based on device capabilities
    optimizeAnimationsForDevice();
}

function handleResponsiveResize() {
    const isMobile = window.innerWidth <= 1024;
    const isSmallMobile = window.innerWidth <= 480;
    
    // Adjust DNA helix size
    const dnaHelix = document.querySelector('.dna-helix');
    if (dnaHelix) {
        if (isSmallMobile) {
            dnaHelix.style.width = '240px';
            dnaHelix.style.height = '300px';
        } else if (isMobile) {
            dnaHelix.style.width = '280px';
            dnaHelix.style.height = '350px';
        } else {
            dnaHelix.style.width = '400px';
            dnaHelix.style.height = '500px';
        }
    }
    
    // Adjust text sizes for very small screens
    if (isSmallMobile) {
        document.documentElement.style.setProperty('--font-size-mobile', '14px');
    } else {
        document.documentElement.style.setProperty('--font-size-mobile', '16px');
    }
}

function setupMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Prevent scrolling when menu is open
    const toggleBodyScroll = (disable) => {
        if (disable) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.contains('active');
            toggleBodyScroll(!isActive);
        });
    }
}

function optimizeAnimationsForDevice() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth <= 1024;
    const isLowEndDevice = navigator.hardwareConcurrency <= 4;
    
    if (prefersReducedMotion || (isMobile && isLowEndDevice)) {
        // Disable heavy animations
        const style = document.createElement('style');
        style.textContent = `
            .particles-container,
            .floating-particles,
            .custom-cursor,
            .custom-cursor-follower {
                display: none !important;
            }
            
            * {
                animation-duration: 0.3s !important;
                transition-duration: 0.3s !important;
            }
        `;
        document.head.appendChild(style);
    }
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
 * Optimized Scroll Animations
 * Lightweight scroll animations with intersection observer
 */
function initOptimizedScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.section-header, .stat-card, .problem-card, .feature-card, .pipeline-step'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Set initial state and observe
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
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
                // Add loaded class for any section-specific animations
                entry.target.classList.add('loaded');
                
                // Initialize section-specific features when they become visible
                const sectionId = entry.target.id;
                switch(sectionId) {
                    case 'importance':
                        initStatsAnimation(entry.target);
                        break;
                    case 'pipeline':
                        initPipelineAnimation(entry.target);
                        break;
                    case 'features':
                        initFeatureCards(entry.target);
                        break;
                }
                
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

/**
 * Stats Animation - Only when visible
 */
function initStatsAnimation(section) {
    const statNumbers = section.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isPercentage = finalValue.includes('%');
        const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
        
        let currentValue = 0;
        const increment = numericValue / 50; // 50 steps for animation
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
                currentValue = numericValue;
                clearInterval(counter);
            }
            
            stat.textContent = isPercentage ? 
                Math.floor(currentValue) + '%' : 
                Math.floor(currentValue) + (finalValue.includes('M') ? 'M' : '');
        }, 30);
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
