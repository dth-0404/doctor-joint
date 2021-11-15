document.addEventListener("DOMContentLoaded", function () {
    var next = document.querySelector(".fa-angle-right");
    var prev = document.querySelector(".fa-angle-left");

    var carousel = document.querySelector('.carousel-2');
    var item = document.querySelectorAll('.item-2');

    let count = 1;

    var widthOfItem = item[0].offsetWidth;
    var widthOfCarousel = carousel.offsetWidth;
    carousel.style.transform = 'translateX(' + (-widthOfItem * count) + 'px)';

    next.addEventListener('click', () => {
        if (count >= item.length - 3) return;
        count++;
        carousel.style.transition = "transform 0.4s ease-in-out";
        carousel.style.transform = 'translateX(' + (-widthOfItem * count) + 'px)';
        console.log(count);
    })

    prev.addEventListener('click', () => {
        if (count <= 0) return;
        count--;
        console.log(count);
        carousel.style.transition = "transform 0.4s ease-in-out";
        carousel.style.transform = 'translateX(' + (-widthOfItem * count) + 'px)';
    })

    carousel.addEventListener('transitionend', () => {
        if (item[count].id === 'lastClone') {
            carousel.style.transition = "none";
            count = item.length - 6;
            carousel.style.transform = 'translateX(' + (-widthOfItem * count) + 'px)';

        }
        if (item[count].id === 'firstClone') {
            console.log(item[count + 2]);
            console.log('yeah');
            carousel.style.transition = "none";
            count = item.length - 6;
            carousel.style.transform = 'translateX(' + (-widthOfItem * count) + 'px)';
        }
    })
}, false);