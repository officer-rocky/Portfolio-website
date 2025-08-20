// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Dynamic navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 15, 0.9)';
    }
});

// Add some interactive hover effects
document.querySelectorAll('.skill-card, .project-card, .contact-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = this.classList.contains('skill-card') ? 
            'translateY(-10px) scale(1.02)' : 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    
    // Uncomment the line below if you want the typing effect
    // typeWriter(heroTitle, originalText, 150);
});

// Parallax effect for background animation
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bgAnimation = document.querySelector('.bg-animation');
    const rate = scrolled * -0.5;
    
    bgAnimation.style.transform = `translateY(${rate}px)`;
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate elements on load
    const heroElements = document.querySelectorAll('.hero h1, .hero .subtitle, .hero .description, .hero .cta-button');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.3}s`;
    });
});

// Mobile menu toggle (if you want to add hamburger menu later)
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('mobile-open');
}

// Add click effect to buttons
document.querySelectorAll('.cta-button, .project-link').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .cta-button, .project-link {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);