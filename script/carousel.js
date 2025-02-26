let index = 0;
        const track = document.querySelector('.carouselTrack');
        const totalItems = document.querySelectorAll('.types').length;
    
        document.getElementById('prev').addEventListener('click', () => moveCarousel(-1));
        document.getElementById('next').addEventListener('click', () => moveCarousel(1));
    
        function moveCarousel(direction) {
            index += direction;
    
            if (index < 0) {
                index = totalItems - 1;
            } else if (index >= totalItems) {
                index = 0;
            }
    
            track.style.transform = `translateX(${-index * 100}%)`;
        }