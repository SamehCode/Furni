// header logic

// declare main vars
let toggleBtn = document.querySelector('header .toggle')
let navLinks = document.querySelector('header nav')


toggleBtn.onclick = function () {
    navLinks.classList.toggle('col')
    if(navLinks.classList.contains('col') && document.body.style.width <= 767) {
        // document.querySelector('header').style.height = '400px'
        document.querySelector('header .container').style.height = '400px'
    } else {
        document.querySelector('header .container').style.height = 'auto'
    }
}

// testimonials slider logic

// declare the main vars
let allSlides = Array.from(document.querySelectorAll('.testi .slide'));
let allBullets = Array.from(document.querySelectorAll('.testi .bullets li'));
let prevArrow = document.querySelector('.testi .arrow.left');
let nextArrow = document.querySelector('.testi .arrow.right');
let currentSlide = 1;


prevArrow.onclick = prevSlide;

nextArrow.onclick = nextSlide;

function checker () {
    
    if(currentSlide < 1) {
        currentSlide = allSlides.length
    } else if (currentSlide > allSlides.length) {
        currentSlide = 1
    }
    allSlides.forEach(slide => {
        slide.classList.remove('active')
    })

    allSlides[currentSlide - 1].classList.add('active')

    allBullets.forEach(bullet => bullet.classList.remove('active'))
    
    allBullets[currentSlide - 1].classList.add('active')
    allBullets.forEach(bullet => {
        bullet.onclick = function () {
            allBullets.forEach(bullet => bullet.classList.remove('active'))
            this.classList.add('active')
            allSlides.forEach(slide => {
                slide.classList.remove('active')
            })
            allSlides[parseInt(bullet.dataset.num) - 1].classList.add('active')
            
            clearInterval(slidesInterval)
        }
    })
    
}



let slidesInterval = setInterval(() => {
    currentSlide++
    checker()
}, 5000)

function prevSlide () {
    currentSlide--
    clearInterval(slidesInterval)
    checker()
}

function nextSlide () {
    currentSlide++
    clearInterval(slidesInterval)
    checker()
}