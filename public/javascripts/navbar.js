window.addEventListener("load", resizeFunction);
window.addEventListener("resize", resizeFunction);


const navBrand = document.querySelector('.brand');
const brandWhenCollapse = document.getElementById('brand-when-collapse');


function resizeFunction() {
    if (window.innerWidth < 1100) {
        navBrand.classList.add('no-display');
        brandWhenCollapse.innerHTML = '<a href="/products">BRAND</a>';

    } else if (window.innerWidth > 1100) {
        brandWhenCollapse.innerHTML = ""
        navBrand.classList.remove('no-display');

    }

}


let navbar = document.getElementById('navbar');
window.onscroll = function() {
    if (document.body.scrollTop >= 550 || document.documentElement.scrollTop >= 550) {
        navbar.classList.add('scrolled-nav');
    } else {
        navbar.classList.remove('scrolled-nav')
    }
}