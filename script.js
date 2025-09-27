// PhyloDive Website Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initNavigation();
    initScrollAnimations();
    initSmoothScrolling();
    initPipelineAnimations();
    initTechStackInteractions();
    initContactForm();
    initLoadingAnimations();
    initDNAHelix();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Update active nav link based on scroll position
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
        updateNavbarBackground();
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

function updateNavbarBackground() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 20, 40, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 20, 40, 0.95)';
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.problem-card, .feature-card, .tech-category, .stage, .architecture-layer');
    
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// Pipeline step animations
function initPipelineAnimations() {
    const pipelineSteps = document.querySelectorAll('.pipeline-step');
    
    // Add sequential animation delay
    pipelineSteps.forEach((step, index) => {
        step.style.animationDelay = `${index * 0.2}s`;
    });

    // Interactive hover effects for pipeline steps
    pipelineSteps.forEach(step => {
        const stepDetails = step.querySelector('.step-details');
        
        step.addEventListener('mouseenter', () => {
            if (stepDetails) {
                stepDetails.style.maxHeight = stepDetails.scrollHeight + 'px';
                stepDetails.style.opacity = '1';
            }
        });
        
        step.addEventListener('mouseleave', () => {
            if (stepDetails) {
                stepDetails.style.maxHeight = '0';
                stepDetails.style.opacity = '0.7';
            }
        });
    });
}

// Tech stack interactions
function initTechStackInteractions() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        // Add ripple effect on click
        item.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            const rect = item.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            item.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });

        // Tech item tooltip functionality
        const techName = item.querySelector('span').textContent;
        item.setAttribute('title', `Learn more about ${techName}`);
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            contactForm.reset();
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '8px',
        color: 'white',
        fontSize: '14px',
        fontWeight: '500',
        zIndex: '9999',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px'
    });
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #059669, #10b981)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #dc2626, #ef4444)';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Loading animations
function initLoadingAnimations() {
    // Add entrance animations to main sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
        section.classList.add('fade-in-up');
    });
}

// Particle effect for hero section
function createParticleEffect() {
    const heroBackground = document.querySelector('.hero-background');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        Object.assign(particle.style, {
            position: 'absolute',
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            background: 'rgba(103, 232, 249, 0.6)',
            borderRadius: '50%',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: Math.random() * 2 + 's'
        });
        
        heroBackground.appendChild(particle);
    }
}

// Add particle float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
        25% { transform: translateY(-10px) translateX(5px); opacity: 1; }
        50% { transform: translateY(-20px) translateX(-5px); opacity: 0.7; }
        75% { transform: translateY(-10px) translateX(3px); opacity: 1; }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(6, 182, 212, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .notification {
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
    }
    
    .tech-item {
        position: relative;
        overflow: hidden;
    }
    
    .pipeline-step .step-details {
        overflow: hidden;
        transition: max-height 0.3s ease, opacity 0.3s ease;
        max-height: 0;
        opacity: 0.7;
    }
    
    .pipeline-step:hover .step-details {
        max-height: 200px;
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Initialize particle effect after DOM load
setTimeout(createParticleEffect, 1000);

// Scroll to top functionality
window.addEventListener('scroll', () => {
    const scrollButton = document.getElementById('scrollToTop');
    if (!scrollButton) {
        createScrollToTopButton();
    } else {
        if (window.scrollY > 500) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

function createScrollToTopButton() {
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scrollToTop';
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    
    Object.assign(scrollButton.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: 'none',
        background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
        color: 'white',
        fontSize: '18px',
        cursor: 'pointer',
        display: 'none',
        zIndex: '1000',
        boxShadow: '0 4px 12px rgba(8, 145, 178, 0.3)',
        transition: 'all 0.3s ease'
    });
    
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'scale(1.1)';
        scrollButton.style.boxShadow = '0 6px 20px rgba(8, 145, 178, 0.4)';
    });
    
    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'scale(1)';
        scrollButton.style.boxShadow = '0 4px 12px rgba(8, 145, 178, 0.3)';
    });
    
    document.body.appendChild(scrollButton);
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
    updateNavbarBackground();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Preloader functionality
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Three.js DNA Helix Implementation
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
