const signUpButton = document.getElementById('signup');
const signInButton = document.getElementById('signin');
const form1 = document.getElementById('logforms');
const form2 = document.getElementById('sigforms');



signUpButton.addEventListener('click', () => {
    form1.classList.add("rightactive");
    form2.classList.add("leftactive");
    form1.classList.remove("rightactivebak");
    form2.classList.remove("leftactivebak");
});

signInButton.addEventListener('click', () => {
    form1.classList.add("rightactivebak");
    form2.classList.add("leftactivebak");
    form1.classList.remove("rightactive");
    form2.classList.remove("leftactive");
    
});