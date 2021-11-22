window.addEventListener("load", resizeFunction);
window.addEventListener("resize", resizeFunction);

const miniBoxRight = document.querySelectorAll('.right');
const miniBoxLeft = document.querySelectorAll('.left');
const infoParags = document.querySelectorAll('.info');
const miniBox = document.querySelectorAll('.mini-box');
const showImg = document.querySelectorAll('.show-img')
const minBoxes = document.querySelectorAll('.min-box');



function resizeFunction() {
    if (window.innerWidth < 1100) {
        miniBox.forEach(minBox => {
            minBox.removeAttribute('data-aos')
            minBox.setAttribute('data-aos', 'fade-up')
            minBox.classList.add('mini-box-device')

        });

        showImg.forEach(showimg => {
            showimg.style.display = "none"
        })

    } else if (window.innerWidth > 1100) {
        miniBoxRight.forEach(minBoxR => {
            minBoxR.classList.remove('mini-box-device')
            minBoxR.setAttribute('data-aos', 'fade-right')

        });
        miniBoxLeft.forEach(minBoxL => {
            minBoxL.classList.remove('mini-box-device')
            minBoxL.setAttribute('data-aos', 'fade-left')

        });

        showImg.forEach(showimg => {
            showimg.style.display = "block"
        })
    }

}