// Check if the screen is Tablet or PC (Width >= 768px)

    let loader_h1 = document.querySelector(".loader h1")
    let preloader = document.querySelector(".preloader")
    let innerloader = document.querySelector(".inner-loader")
    let val = 0;

    window.addEventListener("DOMContentLoaded", () => {
        let count = setInterval(() => {
            val++
            loader_h1.innerHTML = `${val}%`;
            if (val === 100) {
                loader_h1.innerHTML = "completed"
                clearInterval(count)
                setTimeout(() => {
                    innerloader.style.width = "100%"
                    innerloader.style.height = "100%"
                }, 1000)
                setTimeout(() => {
                    preloader.style.opacity = "0"
                }, 2000)
                setTimeout(() => {
                    preloader.style.display = "none"
                }, 3000)
            }
        }, 20)
    })

    if (window.innerWidth >= 768) {
    const paraMap = document.getElementById('para-map');
    const para = document.querySelector('.liquid-para');
    let animationId;
    let currentScale = 0;
    let targetScale = 0;

    para.addEventListener('mouseenter', () => {
        targetScale = 12;
        animatePara();
    });

    para.addEventListener('mouseleave', () => {
        targetScale = 0;
    });

    function animatePara() {
        currentScale += (targetScale - currentScale) * 0.1;
        let wave = currentScale + Math.sin(Date.now() / 200) * 3;
        paraMap.setAttribute('scale', wave);

        if (Math.abs(targetScale - currentScale) > 0.01 || targetScale > 0) {
            animationId = requestAnimationFrame(animatePara);
        } else {
            paraMap.setAttribute('scale', '0');
            cancelAnimationFrame(animationId);
        }
    }

}
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');

    // Scroll lock toggle
    if (navMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden'; // scroll band
    } else {
        document.body.style.overflow = '';        // scroll wapas
    }
});

// Jab koi link click ho → menu band ho jaye
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        document.body.style.overflow = ''; // scroll wapas
    });
});