window.onload = function () {
    document.querySelector('.load').classList.add('_un_active');
}
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
// Навигация
const menuLinks = document.querySelectorAll('.navigator_system[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            
            // if (iconMenu.classList.contains('_active')) {
            //     document.body.classList.remove('_lock');
            //     iconMenu.classList.remove('_active');
            //     menuBody.classList.remove('_active');
            // }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}
//слайдер jq
const owl = $('.owl-carousel.shop_2');
owl.owlCarousel({
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    margin: 54,
    loop: true,
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

const animItems = document.querySelectorAll('.dark__body_block_column');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_look');

            } else {
                animItem.classList.remove('_look');
            }

        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}
