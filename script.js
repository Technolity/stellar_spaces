// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navButtons.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navButtons.classList.remove('active');
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('nav').style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            document.querySelector('nav').style.backdropFilter = 'blur(10px)';
        } else {
            document.querySelector('nav').style.backgroundColor = 'var(--white)';
            document.querySelector('nav').style.backdropFilter = 'none';
        }
    });
    
    // Animate stats counting
    const animateStats = () => {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            
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
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});
// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.querySelector('body');
    
    // Create mobile menu if it doesn't exist
    if (!mobileMenu) {
        const navLinks = document.querySelector('.nav-links').innerHTML;
        const navButtons = document.querySelector('.nav-buttons').innerHTML;
        
        const mobileMenuHTML = `
            <div class="mobile-menu">
                <div class="mobile-nav-links">
                    ${navLinks}
                </div>
                <div class="mobile-nav-buttons">
                    ${navButtons}
                </div>
            </div>
        `;
        
        document.querySelector('nav').insertAdjacentHTML('afterend', mobileMenuHTML);
    }
    
    const createdMobileMenu = document.querySelector('.mobile-menu');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        createdMobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Change hamburger icon
        if (hamburger.classList.contains('active')) {
            hamburger.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Close mobile menu when clicking on links
    document.addEventListener('click', function(e) {
        if (e.target.closest('.mobile-nav-links a')) {
            createdMobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            body.classList.remove('menu-open');
        }
    });
    
    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
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
    
    // Prevent body scroll when mobile menu is open
    document.addEventListener('scroll', function() {
        if (body.classList.contains('menu-open')) {
            window.scrollTo(0, 0);
        }
    });
});
