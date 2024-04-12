const username = document.querySelector('#user');
const password = document.querySelector('#pass');
const but = document.querySelector('#but');
const home = document.querySelector('.homebtn');

home.addEventListener("click",function(){
    window.location.href = "index.html";
})

but.addEventListener("click",function(){
    const val1 = "user1";
    const val2 = "pass";

    const var1 = username.value;
    const var2 = password.value;

    if (val1===var1 && val2===var2) {
        window.location.href = "index2.html";
    }
    else{
        alert("incorrect id and pass");
    }
});