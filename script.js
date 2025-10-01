// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.querySelector('body');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Change hamburger icon
        const icon = hamburger.querySelector('i');
        if (hamburger.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.mobile-nav-links a, .mobile-nav-buttons a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('menu-open');
            
            // Reset hamburger icon
            const icon = hamburger.querySelector('i');
            icon.className = 'fas fa-bars';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container') && !e.target.closest('.mobile-menu')) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('menu-open');
            
            // Reset hamburger icon
            const icon = hamburger.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('menu-open');
            
            // Reset hamburger icon
            const icon = hamburger.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });

    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // External link handler
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.getAttribute('href').includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Animate stats counting
    const animateStats = () => {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            
            let current = 0;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    stat.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + '+';
                }
            }, 16);
        });
    };
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats-grid')) {
                    animateStats();
                }
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right, .stats-grid').forEach(el => {
        observer.observe(el);
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Adjust mobile menu position on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('menu-open');
            
            // Reset hamburger icon
            const icon = hamburger.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });
});
