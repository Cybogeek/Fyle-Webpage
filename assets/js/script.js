// document.addEventListener('DOMContentLoaded', (event) => {
//     const carousel = document.querySelector('.carousel');
//     const carouselItems = document.querySelectorAll('.carousel .carousel-item');
//     const carouselInner = document.querySelector('.carousel .carousel-inner');

//     // Calculate total width of all items
//     let totalWidth = 0;
//     carouselItems.forEach(item => {
//         totalWidth += item.offsetWidth;
//     });

//     // Set the width of carousel inner to accommodate all items
//     carouselInner.style.width = totalWidth + 'px';

//     // Clone carousel items to create continuous effect
//     carouselItems.forEach((item, index) => {
//         const clone = item.cloneNode(true);
//         carouselInner.appendChild(clone);
//     });

//     // Calculate the width of a single slide
//     const singleSlideWidth = totalWidth / (carouselItems.length * 2);

//     // Set the initial position to the middle of the cloned items
//     carouselInner.style.transform = `translateX(-${singleSlideWidth}px)`;

//     // Define animation function
//     function animateCarousel() {
//         // Calculate new position
//         const currentPosition = parseFloat(carouselInner.style.transform.slice(11));
//         const newPosition = currentPosition - singleSlideWidth;

//         // Apply transition
//         carouselInner.style.transition = 'transform 1s ease-in-out';
//         carouselInner.style.transform = `translateX(${newPosition}px)`;

//         // Reset position when transition ends
//         setTimeout(() => {
//             if (newPosition <= -totalWidth + singleSlideWidth) {
//                 carouselInner.style.transition = 'none';
//                 carouselInner.style.transform = `translateX(-${singleSlideWidth}px)`;
//             }
//         }, 1000);
//     }

//     // Start animation
//     setInterval(animateCarousel, 3000);
// });