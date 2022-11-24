window.addEventListener('load',function(){
  document.querySelector('body').classList.add("loaded")  
});


/* ---- vanta.js config ---- */
 VANTA.NET({
  el: document.getElementById("vanta-bg"), 
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.00,
  color: 0xDEF2F1,
  backgroundColor: 0x17252A,
  points: window.innerWidth > 568 ? 20 : 25,
  maxDistance: window.innerWidth > 568 ? 18 : 22,
  spacing: window.innerWidth > 568 ? 15.50 : 30.50
  });

  const swiper = new Swiper('.swiper-container', {
    speed: 600,
        parallax: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
      },
    mousewheelControl: true
});


//animaciones
swiper.on('transitionEnd', function() {

  if (swiper.realIndex === 1){
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function anim(){
      for(var i=5; i < 11; i++){
        var an = document.getElementById('an-' + i)
        an.style.display = 'flex'
        an.classList.add('animate__zoomIn')
        await sleep(450)
      }
    }
    anim()
  }
});


