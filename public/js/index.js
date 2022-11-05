const sliderEl = document.querySelector(".swiper-wrapper")
const albums = [
    {title:"Blurryface",poster:"../src/img/blurryface.png"},
    {title:"Trench",poster:"../src/img/trench.jpg"},
    {title:"Twenty One Pilots",poster:"../src/img/twentyonepilots.png"},
    {title:"Scaled & Icy",poster:"../src/img/scaled&icy.png"},
    {title:"Vessel",poster:"../src/img/vessel.png"},
    {title:"Regional at Best",poster:"../src/img/regionalatbest.jpg"},
]
const printSlider = () => {
    for(let index in albums){
        const slideContainer = document.createElement("div")

        slideContainer.className="swiper-slide"
        slideContainer.style.backgroundColor="green"
        slideContainer.style.border="1px solid var(--yellow)"
        slideContainer.style.borderRadius="30px"
        slideContainer.style.background=`url(${albums[index].poster}) no-repeat 50%`
        slideContainer.style.backgroundSize="cover"
        
        sliderEl.appendChild(slideContainer)

        

    }




        
}

printSlider()

const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 2000,
      },
    slidesPerView: 1.2,
        spaceBetween: 30,
        
        centeredSlides: true,
    direction: 'horizontal',
    loop: true,
    noSwiping: true,
    allowTouchMove:false,
    breakpoints: {
      // when window width is <= 499px
      499: {
          slidesPerView: 1,
          spaceBetweenSlides: 50
      },
      // when window width is <= 999px
      999: {
          slidesPerView: 2,
          spaceBetweenSlides: 50
      }
  }
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  
  var timer;

function mouseStopped(){            
  sliderEl.style.opacity="0.02"
}

window.addEventListener("mousemove",function(){
  sliderEl.style.opacity="1"

    clearTimeout(timer);
    timer=setTimeout(mouseStopped,5000);
});

window.addEventListener("scroll",function(){
  sliderEl.style.opacity="1"

    clearTimeout(timer);
    timer=setTimeout(mouseStopped,5000);
});