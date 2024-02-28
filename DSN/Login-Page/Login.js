// console.log("Hello world");

const splash = document.querySelector('.splashScreen');
const splashHeading = document.querySelector('#splashHEading');
const letters = document.querySelectorAll('.letters');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{

            letters.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.add('fadeup');
                }, (idx + 1)*190);
            });

        setTimeout(()=>{
            letters.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('fadeup');
                    span.classList.add('fadedown');
                }, (idx + 1)* 100);
            });
        }, 1280);


        setTimeout(()=>{
            letters.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('fadedown');
                    span.classList.add('endFade');
                }, (idx + 1)* 200);
            });
        }, 3500);
        

        setTimeout(()=>{
            splash.style.left = "-100vw";
        }, 5700);
    });
});