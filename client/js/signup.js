const submitButton = document.querySelector(".submit-btn");
document.addEventListener("DOMContentLoaded", () => {
    App.init();
  });
submitButton.addEventListener('click', () => {
    const nombre = document.getElementById("nombre").value;
    const pass = document.getElementById("pass").value;
    console.log(nombre+","+pass)
    console.log(App)
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          App.createUser(nombre,pass);
        }, 20000);
      });



    const response = fetch("/signup", {
    method: 'POST',
    
    headers: {
    'Content-Type': 'application/json'
    },
    body: {
    "nombre": nombre,
    "pass" : pass
    },
    
    }).then(res => {
        console.log("Request complete! response:", res);
      });
})