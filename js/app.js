const signUpButton = document.getElementById('signup');
const signInButton = document.getElementById('signinlink');
const form1 = document.getElementById('logforms');
const form2 = document.getElementById('sigforms');

const cr = document.getElementById('cr');
const si = document.getElementById('si');

signInButton.addEventListener('click', () => {
    form1.classList.add("rightactivebak");
    form2.classList.add("leftactivebak");
    form1.classList.remove("rightactive");
    form2.classList.remove("leftactive");
    
    cr.classList.remove("closed");
    cr.classList.add("opened");
    si.classList.remove("opened");
    si.classList.add("closed");
    
});

signUpButton.addEventListener('click', () => {
    form1.classList.add("rightactive");
    form2.classList.add("leftactive");


    form1.classList.remove("rightactivebak");
    form2.classList.remove("leftactivebak");

    cr.classList.remove("opened");
    cr.classList.add("closed");
    si.classList.remove("closed");
    si.classList.add("opened");
});

var owl = $('.owl-carousel');
owl.owlCarousel({



  autoplay: true,
  loop: true,
  margin: 10,
  width: 100,
  touchDrag: true,

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

var input = document.querySelector("#phone");
window.intlTelInput(input, {
  utilsScript: "js/utils.js",
});