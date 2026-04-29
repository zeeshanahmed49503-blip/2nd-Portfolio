// Check if the screen is Tablet or PC (Width >= 768px)
if (window.innerWidth >= 768) {

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

    // spotlight effect on about section text;
    let about_text = document.querySelector(".ab-text")
    let spolight_timer; // Declaring it here to avoid scope issues

    about_text.addEventListener("mouseenter", () => {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        clearTimeout(spolight_timer)
    })
    about_text.addEventListener("mouseleave", () => {
        spolight_timer = setTimeout(() => {
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
        }, 1000)
    })

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

    const section = document.querySelector('.skills-section');
    const github = document.querySelector('.gh');
    const blob = document.getElementById('blob');
    github.style.filter = "invert(1)"

    section.addEventListener('mousemove', (e) => {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        blob.style.left = x + 'px';
        blob.style.top = y + 'px';
    });

    section.addEventListener('mouseleave', (e) => {
        document.body.style.backgroundColor = "white"
        github.style.filter = "invert(0)"
        document.body.style.color = "black"
        
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        blob.style.left = x + 'px';
        blob.style.top = y + 'px';
    });
}