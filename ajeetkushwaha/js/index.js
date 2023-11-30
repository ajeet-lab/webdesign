
 
let typed = new Typed('#hero-left-head-span2', {
    strings: ['Java Developer.', 'Full Stack Developer.','Web Designer.'],
    typeSpeed: 20,
    backSpeed: 20,
    smartBackspace: true, // this is a default
    loop: true,
    startDelay:1000,
    backDelay:1000
  });


let footerYear = document.getElementById("footer_Year");
  console.log(footerYear)
  let date = new Date().getFullYear();
  console.log("date", date)
  footerYear.innerHTML = date;
  