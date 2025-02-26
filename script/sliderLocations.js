document.addEventListener("DOMContentLoaded", function () {
    const sliderTrack = document.querySelector(".sliderTrack");
    const informationsLocations = document.querySelectorAll(".informationsLocations");
    let index = 0;
    let itemsPerSlide = 5; 

    function updateItemsPerSlide() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
            itemsPerSlide = 1; 
        } else if (screenWidth <= 1024) {
            itemsPerSlide = 3; 
        } else {
            itemsPerSlide = 5;
        }
    }

    function updateSlider() {
        updateItemsPerSlide();
        const slideWidth = sliderTrack.clientWidth / itemsPerSlide;
        sliderTrack.style.transform = "translateX(" + (-index * slideWidth) + "px)";
    }
    function moveSlider() {
        index++;

        if (index >= Math.ceil(informationsLocations.length / itemsPerSlide)) {
            index = 0;
            sliderTrack.style.transition = 'none'; 
            updateSlider();
            setTimeout(() => {
                sliderTrack.style.transition = 'transform 0.5s ease-in-out'; 
            });
        } else {
            updateSlider();
        }
    }

    window.addEventListener("resize", updateSlider); 

    setInterval(moveSlider, 3000); 
    updateSlider();
});
