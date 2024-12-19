import './style.css';
import AOS from 'aos';
import { ANIMATION_CONFIG } from './js/config/constants.js';
import { animateHero } from './js/animations/heroAnimation.js';
import { loadFeaturedCars } from './js/components/featuredCars.js';
import { initializeContactForm } from './js/components/contactForm.js';
import { initializeNavbar, initializeSmoothScroll } from './js/components/navbar.js';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Initialize AOS
AOS.init(ANIMATION_CONFIG);

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  loadFeaturedCars();
  animateHero();
  initializeContactForm();
  initializeNavbar();
  initializeSmoothScroll();
});

// Smooth loading
window.addEventListener('load', () => {
    document.querySelector('.loader').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 1000);
});

// Parallax effect
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax-bg');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
});

// Reveal images on scroll
const revealImages = () => {
    const images = document.querySelectorAll('.image-reveal');
    images.forEach(image => {
        if (image.getBoundingClientRect().top < window.innerHeight * 0.75) {
            image.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealImages);