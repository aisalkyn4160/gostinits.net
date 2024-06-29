const header = document.querySelector(".header");
const burger = document.querySelector(".burger");


burger.addEventListener("click", () => {
    header.classList.toggle("mobile-header");
    if (header.classList.contains("mobile-header")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})



// ----------------------------------popup--------------------------------
// const popup = document.querySelector('.popup')
// const popupShowBtns = document.querySelectorAll('.show-popup')
// const closeFormBtn = document.querySelector('.close-form')

// popupShowBtns.forEach(item => {
//     item.addEventListener('click', () => {
//         popup.classList.add('show-popup')
//         document.body.classList.add('no-scroll')
//     })
// })

// closeFormBtn.addEventListener('click', () => {
//     popup.classList.remove('show-popup')
//     document.body.classList.remove('no-scroll')
// })

// document.addEventListener('click', (event) => {
//     if (event.target === popup) {
//         popup.classList.remove('show-popup')
//         document.body.classList.remove('no-scroll')
//     }
// });

// ------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('section');
 
    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;
 
        blocks.forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;
 
            if (blockPosition < windowHeight - 100) {
                block.style.opacity = "1";
                block.style.transform = "translateY(0)";
            }
        });
    }
 
    checkBlocksVisibility();
 
    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
    });
});