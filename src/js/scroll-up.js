function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Show or hide the scroll-up button based on scroll position
        window.addEventListener('scroll', function () {
            const scrollUpButton = document.getElementById('scrollUpButton');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollUpButton.style.display = 'block';
            } else {
                scrollUpButton.style.display = 'none';
            }
        });

        // Attach the scrollToTop function to the button's click event
        document.getElementById('scrollUpButton').addEventListener('click', scrollToTop);