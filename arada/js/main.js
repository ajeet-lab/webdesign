$(document).on('click', '#navbar .nav-item', function(){
    $(this).addClass('active').siblings().removeClass('active')
})




$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoWidth: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });


  
// Change navbar background color on Scroll
  window.addEventListener("scroll", function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("bg-black", window.scrollY > 0);
  })