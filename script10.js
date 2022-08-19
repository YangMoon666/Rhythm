// Меню
const iconMenu = document.querySelector('.header__burger');
const iconBlock = document.querySelector('.header__body_block');
const menuBody = document.querySelector('.navbar');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        iconBlock.classList.toggle('_active');
    });
}
//слайдер jq
const owl = $('.owl-carousel.shop_2');
owl.owlCarousel({
    margin: 54,
    items: 1,
    responsive: {
        480: {
            items: 2
        },
        767: {
            items: 3
        }
    },
});

// $('.thumb').click(function(){
//     $('.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);  
// })


//слайдер jq
const owl2 = $('.owl-carousel.slider_2');
owl2.owlCarousel({
    items: 1,
    // dots: true,
    // dotsContainer: '.slider_2_dots',
    // pagination : true
});
// $('.owl-dot').click(function () {
//     owl.trigger('to.owl.carousel', [$(this).index(), 300]);
//   });