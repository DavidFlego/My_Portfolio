
const scrollToTop = () => {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
}

window.onload = (function(){
    scrollToTop()
})


const btnOnTop = document.getElementById('onTop');

window.onscroll = function() {
    let pageOffset = document.documentElement.scrollTop || document.body.scrollTop;
    if(pageOffset >= 700) {
        btnOnTop.classList.add('fade-in');
    } else {
        btnOnTop.classList.remove('fade-in');
    }
};

btnOnTop.addEventListener('click', function(){
    scrollToTop()
})