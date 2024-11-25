// Encapsulate the entire script in an IIFE to avoid global scope pollution
(function () {
    // Hamburger menu and navigation menu elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    // Function to show the menu
    function showMenu() {
        navMenu.style.display = 'block'; // Show the menu
    }

    // Function to hide the menu
    function hideMenu() {
        navMenu.style.display = 'none'; // Hide the menu
    }

    // Event listeners for hover functionality
    hamburger.addEventListener('mouseenter', showMenu);
    navMenu.addEventListener('mouseenter', showMenu);

    hamburger.addEventListener('mouseleave', hideMenu);
    navMenu.addEventListener('mouseleave', hideMenu);

    // Sliding animation for the navigation menu (on click)
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('is-active');
    });

    // Close the menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('is-active');
        }
    });

    // Sliding animation for the header section
    const slides = document.querySelectorAll('.slide-box');
    let activeIndex = 0;

    // Function to change slides
    function changeSlide() {
        // Remove the active-slide class from the current slide
        slides[activeIndex].classList.remove('active-slide');

        // Move to the next slide
        activeIndex = (activeIndex + 1) % slides.length;

        // Add the active-slide class to the new slide
        slides[activeIndex].classList.add('active-slide');
    }

    // Set an interval for automatic slide changes every 4 seconds
    setInterval(changeSlide, 4000);

    // Trigger the first slide to show immediately
    slides[activeIndex].classList.add('active-slide');

    // Adjust the zoom effect of an image as the user scrolls
    function adjustImageZoom() {
        const section = document.getElementById('scrollSection');
        const image = document.querySelector('.animated-image');

        if (!section || !image) return; // Ensure both section and image exist

        const rect = section.getBoundingClientRect(); // Get section position
        const sectionHeight = section.offsetHeight; // Section height
        const sectionTop = rect.top; // Section top position

        // Calculate scroll fraction
        let scrollFraction = (window.innerHeight - sectionTop) / (window.innerHeight + sectionHeight);
        scrollFraction = Math.min(Math.max(scrollFraction, 0), 1); // Clamp between 0 and 1

        // Scale the image dynamically
        const scaleValue = 0.2 + (scrollFraction * 1.5); // Scale factor
        image.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;
    }

    // Attach scroll event listener
    window.addEventListener('scroll', adjustImageZoom);

    // Adjust zoom effect initially for visibility
    adjustImageZoom();
})();


/* STATS SECTION */






/*                                    # ABOUT US                                       */
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.learn-more-btn');
  
    button.addEventListener('click', () => {
      alert('Thank you for your interest! Stay tuned for more updates.');
    });
  });
  