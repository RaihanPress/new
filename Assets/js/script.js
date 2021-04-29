const d = document
$ = el => d.querySelector(el)
window.addEventListener('scroll', () => {
    $('.nav').classList.toggle('sticky', window.scrollY > 100)
    $('.ijlas').classList.toggle('normal', window.scrollY > 400)
    if(window.scrollY < 600){
        $(".ijlas .back").style.backgroundPosition = `0 -${window.scrollY / 2}px`
    }
});




window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
    },500)
});


