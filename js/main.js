function ShowBanner() {
    const banner = document.querySelector('.popup_banner');
    banner.classList.remove('hide');
}

function HideBanner() {
    const banner = document.querySelector('.popup_banner');
    banner.classList.add('hide');
}

// document.addEventListener('DOMContentLoaded', () => {
//     let firstScroll = true;

//     const topBanner = document.querySelector('.top_banner');
//     window.addEventListener('scroll', function () {
//         const scrollHeight = window.scrollY;
//         if (scrollHeight >= topBanner.offsetTop + topBanner.offsetHeight) {
//             if (firstScroll) {
//                 if (!localStorage.getItem('popup_banner_showed')) {
//                     ShowBanner();
//                     this.localStorage.setItem('popup_banner_showed', true);
//                 }
//                 firstScroll = false
//             }
//         }
//     });
// });