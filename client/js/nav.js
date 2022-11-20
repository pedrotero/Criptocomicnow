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
                <a href="#"><img src="img/user.png" alt=""></a>
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