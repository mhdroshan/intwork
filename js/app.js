const signUpButton = document.getElementById('signup');
const signInButton = document.getElementById('signin');
const form1 = document.getElementById('logforms');
const form2 = document.getElementById('sigforms');

const cr = document.getElementById('cr');
const si = document.getElementById('si');

signInButton.addEventListener('click', () => {
    form1.classList.add("rightactivebak");
    form2.classList.add("leftactivebak");
    form1.classList.remove("rightactive");
    form2.classList.remove("leftactive");
    
    cr.classList.remove("opno");
    cr.classList.add("opyes");
    si.classList.remove("opyes");
    si.classList.add("opno");
    
});

signUpButton.addEventListener('click', () => {
    form1.classList.add("rightactive");
    form2.classList.add("leftactive");


    form1.classList.remove("rightactivebak");
    form2.classList.remove("leftactivebak");

    cr.classList.remove("opyes");
    cr.classList.add("opno");
    si.classList.remove("opno");
    si.classList.add("opyes");
});

