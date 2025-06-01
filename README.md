Oliur Rahaman Portfolio Website Documentation

Overview

This documentation provides information about the structure and features of the portfolio website created for Oliur Rahaman, an AI developer and digital marketing strategist.

File Structure

The website follows a clean, separated structure:

Plain Text


website/
├── index.html       # Main HTML structure
├── css/
│   └── styles.css   # All styling and responsive design
├── js/
│   └── main.js      # All JavaScript functionality
└── images/          # Directory for all website images


Features

Modern Design

•
Glass-morphism UI with beautiful gradients

•
Animated background with subtle motion

•
Professional typography using Inter and Space Grotesk fonts

•
Smooth animations and transitions

Responsive Layout

•
Mobile-first approach

•
Adapts to all screen sizes (mobile, tablet, desktop)

•
Hamburger menu for mobile devices

•
Responsive grid layouts

Interactive Elements

•
Animated skill bars with percentage indicators

•
Project filtering system by category

•
Testimonial slider with auto-play and manual controls

•
Animated counters for statistics

•
Smooth scrolling navigation

Performance Optimizations

•
Optimized animations for performance

•
Lazy loading of elements

•
Efficient CSS with reusable variables

•
Clean, well-structured JavaScript

Accessibility

•
Semantic HTML structure

•
Proper ARIA labels

•
Keyboard navigation support

•
High contrast text for readability

Customization

Changing Colors

The color scheme can be easily modified by editing the CSS variables at the top of the styles.css file:

CSS


:root {
    --primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --primary-solid: #667eea;
    --secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    /* Additional color variables */
}


Adding Projects

To add new projects, duplicate the project card structure in the HTML and update the content:

HTML


<div class="project-card" data-category="category-name">
    <div class="project-image">
        <img src="images/project-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <a href="#" class="project-link">
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Project description goes here.</p>
        <div class="project-tags">
            <span class="project-tag">Tag 1</span>
            <span class="project-tag">Tag 2</span>
        </div>
    </div>
</div>


Updating Skills

To update skills, modify the skill items in the HTML:

HTML


<div class="skill-item">
    <div class="skill-header">
        <span class="skill-name">Skill Name</span>
        <span class="skill-percentage">90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-width="90"></div>
    </div>
</div>


Browser Compatibility

The website is compatible with all modern browsers:

•
Chrome (latest)

•
Firefox (latest)

•
Safari (latest)

•
Edge (latest)

•
Opera (latest)

Additional Notes

•
Font Awesome is used for icons

•
The contact form is set up for demonstration purposes and would need backend integration for actual functionality

•
Images should be placed in the images directory and referenced accordingly


🔗 **Portfolio:** https://oliur01.github.io/oliur-website/  
📧 **Email:**  oliurrahaman50@gmail.com
🐦 **Twitter:** https://x.com/oliurrahaman501  

⭐ **If you like this project, don't forget to star this repository!**  

---
