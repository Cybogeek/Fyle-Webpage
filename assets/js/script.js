
    document.addEventListener('DOMContentLoaded', (event) => {
        const carousel = document.querySelector('.carousel');
        const carouselInner = document.querySelector('.carousel .carousel-inner');
        const carouselItems = document.querySelectorAll('.carousel .carousel-item');
        const carouselIndicators = document.querySelectorAll('.carousel-indicators button');

        // Check if the window width is greater than or equal to 576px
        if (window.matchMedia("(min-width:576px)").matches) {
            // Clone the first few items and append them to the end
            const clonedItems = Array.from(carouselItems).slice(0, 4).map(item => item.cloneNode(true));
            clonedItems.forEach(item => carouselInner.appendChild(item));

            // Set the scroll position to the start of the cloned items
            carouselInner.scrollTo({
                left: 0,
                behavior: 'smooth'
            });

            // Function to animate scrolling
            function animateScroll() {
                // Scroll to the next item
                carouselInner.scrollBy({
                    left: carouselItems[0].offsetWidth,
                    behavior: 'smooth'
                });

                // Check if reached the end of carousel
                if (carouselInner.scrollLeft + carouselInner.clientWidth >= carouselInner.scrollWidth) {
                    // If reached the end, reset to the start
                    carouselInner.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                }

                // Update carousel indicators
                updateIndicators();
            }

            // Function to update carousel indicators
            function updateIndicators() {
                const centralItemIndex = Math.round(carouselInner.scrollLeft / carouselItems[0].offsetWidth);
                carouselIndicators.forEach((indicator, index) => {
                    if (index === centralItemIndex) {
                        indicator.classList.add('active');
                    } else {
                        indicator.classList.remove('active');
                    }
                });
            }

            // Start infinite scrolling
            setInterval(animateScroll, 3000);

            // Initial update of carousel indicators
            updateIndicators();
        } else {
            // If window width is less than 576px, add 'slide' class to enable default behavior
            carousel.classList.add('slide');
        }
    });
