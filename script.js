// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    
    if (menuToggle && navbarMenu) {
        menuToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
            // Toggle between menu and close icons
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navbarMenu && navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form inputs
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just simulate a successful submission
            
            // Create a success message
            const successMessage = document.createElement('div');
            successMessage.classList.add('form-success');
            successMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
            successMessage.style.color = 'var(--success-color)';
            successMessage.style.marginTop = '20px';
            successMessage.style.padding = '10px';
            successMessage.style.borderRadius = '5px';
            successMessage.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
            
            // Add the success message to the form
            contactForm.appendChild(successMessage);
            
            // Reset the form
            contactForm.reset();
            
            // Remove the success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
    
    // Add animation to skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Function to handle skill bar animation
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const targetWidth = bar.style.width;
            
            // Reset width to 0
            bar.style.width = '0';
            
            // Animate to target width
            setTimeout(() => {
                bar.style.transition = 'width 1s ease-in-out';
                bar.style.width = targetWidth;
            }, 200);
        });
    }
    
    // Animate skill bars when they come into view
    const skillsSection = document.getElementById('skills');
    
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(skillsSection);
    }
});