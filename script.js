// Portfolio Data - 6 projects for EVERY category (6×6 = 36 total)
const portfolioItemsData = [
    // --- Motion Graphics (6 Projects) ---
    { 
        title: "Dynamic Motion Reel 2024", 
        category: "motion", 
        image: "./images/motion-01.mp4", 
        type: "video", 
        description: "Showcasing advanced motion graphics techniques and visual effects"
    },
    { 
        title: "Product Launch Animation", 
        category: "motion", 
        image: "./images/motion-02.mp4", 
        type: "video", 
        description: "Animated explainer video for tech product launch"
    },
    { 
        title: "Brand Identity Motion", 
        category: "motion", 
        image: "./images/motion-03.mp4", 
        type: "video", 
        description: "Logo animation and brand motion graphics package"
    },
    { 
        title: "Epic Boxing Match Animation", 
        category: "motion", 
        image: "./images/motion-04.mp4", 
        type: "video", 
        description: "Animated content for epic boxing match"
    },
    { 
        title: "Typography in Motion", 
        category: "motion", 
        image: "./images/motion-05.mp4", 
        type: "video", 
        description: "Kinetic typography and text animation showcase"
    },
    { 
        title: "Corporate Presentation", 
        category: "motion", 
        image: "./images/motion-06.mp4", 
        type: "video", 
        description: "Professional motion graphics for corporate presentation"
    },

    // --- Promotional Flyer (6 Projects) ---
    { 
        title: "Retail Promotion Design", 
        category: "promotional-flyer", 
        image: "./images/promo-01.jpg", 
        description: "Eye-catching promotional flyer for retail sale campaign"
    },
    { 
        title: "Service Launch Campaign", 
        category: "promotional-flyer", 
        image: "./images/promo-02.jpg", 
        description: "Professional flyer for new service introduction"
    },
    { 
        title: "PROMOTIONAL-FLYER FOR RESTURANT", 
        category: "promotional-flyer", 
        image: "./images/promo-03.jpg", 
        description: "Motivational flyer design for resturant"
    },
    { 
        title: "PREMIUM POP-UP SHOW", 
        category: "promotional-flyer", 
        image: "./images/promo-04.jpg", 
        description: "Elegant flyer for premium pop-up show"
    },
    { 
        title: "Business Consultation", 
        category: "promotional-flyer", 
        image: "./images/promo-05.jpg", 
        description: "Corporate business master-card for vip"
    },
    { 
        title: "Product Sale Campaign", 
        category: "promotional-flyer", 
        image: "./images/promo-06.jpg", 
        description: "Vibrant promotional design for product sales"
    },
    
    // --- Birthday Flyer (6 Projects) ---
    { 
        title: "Milestone Birthday Celebration", 
        category: "birthday-flyer", 
        image: "./images/bday-01.jpg", 
        description: "Elegant invitation for  birthday celebration"
    },
    { 
        title: "Adults Party Invitation", 
        category: "birthday-flyer", 
        image: "./images/bday-02.jpg", 
        description: "Colorful and fun birthday party flyer design"
    },
    { 
        title: "Golden Anniversary Design", 
        category: "birthday-flyer", 
        image: "./images/bday-03.jpg", 
        description: "Sophisticated 30th birthday invitation design"
    },
    { 
        title: "Neon Birthday Theme", 
        category: "birthday-flyer", 
        image: "./images/bday-04.jpg", 
        description: "elegant invitation for 60th birthday celebration"
    },
    { 
        title: "Modern Digital Invite", 
        category: "birthday-flyer", 
        image: "./images/bday-05.jpg", 
        description: "Clean and modern digital birthday invitation"
    },
    { 
        title: "Luxury Birthday Event", 
        category: "birthday-flyer", 
        image: "./images/bday-06.jpg", 
        description: "Premium design for luxury birthday celebration"
    },

    // --- Event Flyer (6 Projects) ---
    { 
        title: "Club Night Event", 
        category: "event-flyer", 
        image: "./images/event-01.jpg", 
        description: "invitation for tucute entertainment club night event"
    },
    { 
        title: "Amapiano Event", 
        category: "event-flyer", 
        image: "./images/event-02.jpg", 
        description: "invitation for amapiano rule event"
    },
    { 
        title: "POOL LAUNCH EVENT", 
        category: "event-flyer", 
        image: "./images/event-03.jpg", 
        description: "invitation of 6years aniniversary pool launch"
    },
    { 
        title: "FEST EVENT", 
        category: "event-flyer", 
        image: "./images/event-04.jpg", 
        description: "Informative flyer for fest event"
    },
    { 
        title: "UNLEASHED/BIRTHDAY PARTY", 
        category: "event-flyer", 
        image: "./images/event-05.jpg", 
        description: "invitation for unleashed/birthday party"
    },
    { 
        title: "ART EXHIBITION", 
        category: "event-flyer", 
        image: "./images/event-06.jpg", 
        description: "invitation for creative poster for contemporary art exhibition"
    },

    // --- Club Flyer (6 Projects) ---
    { 
        title: "Weekend DJ Night", 
        category: "club-flyer", 
        image: "./images/club-01.jpg", 
        description: "Energetic flyer for Friday night club event"
    },
    { 
        title: "VIP Exclusive Night", 
        category: "club-flyer", 
        image: "./images/club-02.jpg", 
        description: "Premium design for exclusive VIP club night"
    },
    { 
        title: "Summer Pool Party", 
        category: "club-flyer", 
        image: "./images/club-03.jpg", 
        description: "Vibrant design for summer pool party event"
    },
    { 
        title: "Retro Theme Night", 
        category: "club-flyer", 
        image: "./images/club-04.jpg", 
        description: "Nostalgic retro-themed club night design"
    },
    { 
        title: "moblizz empire", 
        category: "club-flyer", 
        image: "./images/club-05.jpg", 
        description: "dj performance party"
    },
    { 
        title: "special guest", 
        category: "club-flyer", 
        image: "./images/club-06.jpg", 
        description: "invitation for fun night"
    },

    // --- Logo Design (6 Projects) ---
    { 
        title: "Tech Startup Identity", 
        category: "logo", 
        image: "./images/logo-01.jpg", 
        description: "Minimalist logo design for technology startup"
    },
    { 
        title: "Creative Agency Branding", 
        category: "logo", 
        image: "./images/logo-02.jpg", 
        description: "Handcrafted logo for creative design agency"
    },
    { 
        title: "Modern Business Logo", 
        category: "logo", 
        image: "./images/logo-03.jpg", 
        description: "Geometric logo design for contemporary business"
    },
    { 
        title: "Fashion Brand Logo", 
        category: "logo", 
        image: "./images/logo-04.jpg", 
        description: "Elegant logo design for fashion brand identity"
    },
    { 
        title: "Restaurant Branding", 
        category: "logo", 
        image: "./images/logo-05.jpg", 
        description: "Appetizing logo design for restaurant business"
    },
    { 
        title: "Healthcare Identity", 
        category: "logo", 
        image: "./images/logo-06.jpg", 
        description: "Trustworthy logo design for healthcare organization"
    }
];

// DOM Elements
const portfolioContainer = document.getElementById('portfolio-items');
const typedTextElement = document.getElementById('typed-text');
const typewriterStrings = [
    "Visual Designer",
    "Motion Graphics Artist",
    "Brand Identity Specialist",
    "Creative Problem Solver",
    "Digital Experience Creator"
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
    initializeNavigation();
    initializeThemeToggle();
    initializeContactForm();
    initializeTypewriter();
    initializeAnimations();
    initializeParticles();
    
    // Fix any potential horizontal scrolling
    fixHorizontalScroll();
});

// Fix horizontal scrolling issue
function fixHorizontalScroll() {
    document.querySelectorAll('*').forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
            element.style.maxWidth = '100%';
        }
    });
    
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
}

// Typewriter effect
function initializeTypewriter() {
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
        const currentString = typewriterStrings[stringIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentString.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedTextElement.textContent = currentString.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentString.length) {
            isDeleting = true;
            typingSpeed = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % typewriterStrings.length;
            typingSpeed = 500;
        }

        setTimeout(typeWriter, typingSpeed);
    }

    setTimeout(typeWriter, 1000);
}

// Portfolio Functions
function initializePortfolio() {
    renderPortfolioItems('all');
    setupFilterButtons();
    setupImageModal();
}

function createPortfolioItem(item) {
    const div = document.createElement('div');
    div.className = 'portfolio-item';
    div.setAttribute('data-category', item.category);
    
    const categoryTag = getCategoryTag(item.category);
    
    let mediaElement;
    if (item.type === 'video') {
        mediaElement = `
            <video autoplay loop muted playsinline>
                <source src="${item.image}" type="video/mp4">
                Your browser does not support video.
            </video>
        `;
    } else {
        mediaElement = `<img src="${item.image}" alt="${item.title}" loading="lazy">`;
    }

    div.innerHTML = `
        <div class="portfolio-media">
            ${mediaElement}
            <div class="portfolio-overlay">
                <button class="view-project-btn" data-image="${item.image}" data-type="${item.type || 'image'}">
                    <i class="fas fa-expand"></i>
                    View Project
                </button>
            </div>
            <span class="portfolio-category-tag">${categoryTag}</span>
        </div>
        <div class="portfolio-item-content">
            <h3>${item.title}</h3>
            <p class="portfolio-description">${item.description}</p>
            <a href="#" class="view-details-btn" data-image="${item.image}" data-type="${item.type || 'image'}">
                View Details <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
    
    return div;
}

function getCategoryTag(category) {
    const tags = {
        'motion': 'Motion Graphics',
        'promotional-flyer': 'Promotional',
        'birthday-flyer': 'Event',
        'event-flyer': 'Event',
        'club-flyer': 'Nightlife',
        'logo': 'Branding'
    };
    return tags[category] || 'Design';
}

function renderPortfolioItems(filter = 'all') {
    portfolioContainer.innerHTML = '';
    
    let itemsToShow = portfolioItemsData;
    if (filter !== 'all') {
        itemsToShow = portfolioItemsData.filter(item => item.category === filter);
    }
    
    portfolioContainer.classList.add('loading');
    
    setTimeout(() => {
        itemsToShow.forEach((item, index) => {
            const element = createPortfolioItem(item);
            portfolioContainer.appendChild(element);
            
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 100);
        });
        
        portfolioContainer.classList.remove('loading');
    }, 300);
}

function setupFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            renderPortfolioItems(filter);
            
            const portfolioSection = document.getElementById('work-section');
            const rect = portfolioSection.getBoundingClientRect();
            if (rect.top < 0 || rect.bottom > window.innerHeight) {
                portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Navigation
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('toggle');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    hamburger.classList.remove('toggle');
                    document.body.style.overflow = '';
                }
                
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 100;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Theme Toggle
function initializeThemeToggle() {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;
    const icon = toggleButton.querySelector('i');
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        icon.className = 'fas fa-sun';
    }
    
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            icon.className = 'fas fa-sun';
        } else {
            localStorage.setItem('theme', 'dark');
            icon.className = 'fas fa-moon';
        }
    });
}

// FIXED CONTACT FORM WITH WORKING POPUP
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (!contactForm) {
        console.error('Contact form not found!');
        return;
    }
    
    console.log('Contact form found, initializing...');
    
    // Hide success message initially
    if (successMessage) {
        successMessage.style.display = 'none';
    }
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        console.log('Form submission started');
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        for (let [key, value] of formData.entries()) {
            formObject[key] = value;
        }
        console.log('Form data:', formObject);
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Send to Formspree
            console.log('Sending to Formspree:', this.action);
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            console.log('Formspree response status:', response.status);
            
            if (response.ok) {
                console.log('Form submission successful');
                
                // Hide form, show success message
                this.style.display = 'none';
                if (successMessage) {
                    successMessage.style.display = 'block';
                    successMessage.style.animation = 'fadeIn 0.5s ease';
                }
                
                // Show popup notification
                showNotification('Message Sent Successfully!', 'I will get back to you within 24 hours.', 'check-circle');
                
                // Reset form
                this.reset();
                
                console.log('Success message shown');
                
            } else {
                console.error('Form submission failed:', response.status);
                showNotification('Submission Error', 'Failed to send message. Please try again or contact me directly.', 'exclamation-circle');
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification('Network Error', 'Please check your connection and try again.', 'exclamation-circle');
            
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Image Modal
function setupImageModal() {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            <div class="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);
    
    const closeBtn = modal.querySelector('.close-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        const video = modalBody.querySelector('video');
        if (video) {
            video.pause();
        }
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    document.addEventListener('click', (e) => {
        const viewBtn = e.target.closest('.view-project-btn, .view-details-btn');
        if (viewBtn) {
            e.preventDefault();
            const imageSrc = viewBtn.dataset.image;
            const type = viewBtn.dataset.type;
            
            modalBody.innerHTML = '';
            
            if (type === 'video') {
                modalBody.innerHTML = `
                    <video controls autoplay style="width:100%; height:auto;">
                        <source src="${imageSrc}" type="video/mp4">
                        Your browser does not support video.
                    </video>
                `;
            } else {
                modalBody.innerHTML = `<img src="${imageSrc}" alt="Project preview" style="width:100%; height:auto;">`;
            }
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
}

// FIXED NOTIFICATION FUNCTION - WORKS PROPERLY NOW
function showNotification(title, message, icon) {
    console.log('Showing notification:', title, message);
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification-popup';
    notification.innerHTML = `
        <button class="close-notification">&times;</button>
        <div class="notification-content">
            <div class="notification-icon">
                <i class="fas fa-${icon}"></i>
            </div>
            <div class="notification-text">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add show class after a tiny delay for animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.close-notification');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.portfolio-item').forEach(item => {
        observer.observe(item);
    });
    
    document.querySelectorAll('.skill-category').forEach(skill => {
        observer.observe(skill);
    });
    
    document.querySelectorAll('.principle').forEach(principle => {
        observer.observe(principle);
    });
}

// Particle Background
function initializeParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    }
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.color = Math.random() > 0.5 ? getComputedStyle(document.documentElement).getPropertyValue('--primary') : getComputedStyle(document.documentElement).getPropertyValue('--secondary');
            this.alpha = Math.random() * 0.3 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    function initParticles() {
        particles = [];
        const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
            
            particles.forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = particle.color;
                    ctx.globalAlpha = 0.1 * (1 - distance / 100);
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.stroke();
                }
            });
        });
        
        animationId = requestAnimationFrame(animateParticles);
    }
    
    resizeCanvas();
    animateParticles();
    
    window.addEventListener('resize', () => {
        resizeCanvas();
    });
}

// Window resize handler
window.addEventListener('resize', () => {
    fixHorizontalScroll();
});

// Performance optimization
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const navLinks = document.querySelectorAll('.nav-link');
        const scrollPosition = window.scrollY + 100;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, 100);
});

// Logo animation enhancement
function initializeLogoAnimations() {
    const logo = document.querySelector('.logo-main');
    if (!logo) return;
    
    logo.classList.add('loaded');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const header = document.querySelector('.main-header');
        
        if (scrollY > 100) {
            logo.style.height = '38px';
            header.style.padding = '0.8rem 0';
        } else {
            logo.style.height = '46px';
            header.style.padding = '1rem 0';
        }
    });
    
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        logo.style.transform = 'scale(0.95)';
        setTimeout(() => {
            logo.style.transform = '';
            window.location.href = '#home-section';
        }, 150);
    });
    
    setTimeout(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% {
                    transform: translateY(0) scale(1);
                }
                50% {
                    transform: translateY(-5px) scale(1.02);
                }
            }
        `;
        document.head.appendChild(style);
        
        logo.style.animation = 'logoEntrance 0.8s ease-out, float 6s ease-in-out infinite 1s';
    }, 500);
}

// Initialize logo animations
document.addEventListener('DOMContentLoaded', initializeLogoAnimations);
// Fix: Stop logo floating animation
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo-main');
    if (logo) {
        // Remove any float animation
        logo.style.animation = 'logoEntrance 0.8s ease-out forwards';
        
        // Prevent JavaScript from adding float animation
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    if (logo.style.animation.includes('float')) {
                        logo.style.animation = 'logoEntrance 0.8s ease-out forwards';
                    }
                }
            });
        });
        
        observer.observe(logo, { attributes: true });
    }
});