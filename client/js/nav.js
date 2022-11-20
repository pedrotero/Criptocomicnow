const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Buscar historieta!">
                    <button class="search-btn">Buscar!</button>
                </div>
                <a href="#">
                    <img src="img/user.png" id="user-img" alt="">
                    <div class="login-logout-popup hide">
                        <p class="account-info">No tienes cuenta? Registrate!</p>
                        <button class="btn" id="user-btn">Registrar cuenta!</button>
                    </div>
                </a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Inicio</li>
            <li class="link-item"><a href="#" class="link">Comics</li>
            <li class="link-item"><a href="#" class="link">Manga</li>
            <li class="link-item"><a href="#" class="link">Novelas Gráficas</li>
            <li class="link-item"><a href="#" class="link">Subastas</li>
        </ul>
    `;
}

createNav();

const userImageButton = document.querySelector('#user-img');
const userPop = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPop.classList.toggle('hide');
    actionBtn.addEventListener('click', ()=>{
        location.href = '/signup';
    })
})