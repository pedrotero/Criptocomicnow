const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Comics</li>
                    <li><a href="#" class="footer-link">Detective Comics</a></li>
                    <li><a href="#" class="footer-link">Marvel</a></li>
                    <li><a href="#" class="footer-link">Dark Horse</a></li>
                    <li><a href="#" class="footer-link">IDW</a></li>
                    <li><a href="#" class="footer-link">Image Comics</a></li>
                    <li><a href="#" class="footer-link">Valiant</a></li>
                    <li><a href="#" class="footer-link">Antartic Press</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Manga</li>
                    <li><a href="#" class="footer-link">Shueisha</a></li>
                    <li><a href="#" class="footer-link">Hakusensha</a></li>
                    <li><a href="#" class="footer-link">Kodansha</a></li>
                    <li><a href="#" class="footer-link">Yen Press</a></li>
                    <li><a href="#" class="footer-link">Shogakukan</a></li>
                    <li><a href="#" class="footer-link">VIZ</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Novelas gráficas</li>
                    <li><a href="#" class="footer-link">Dark Horse</a></li>
                    <li><a href="#" class="footer-link">Avatar Press</a></li>
                    <li><a href="#" class="footer-link">Blackthorne</a></li>
                    <li><a href="#" class="footer-link">AC Comics</a></li>
                    <li><a href="#" class="footer-link">Boom! Studios</a></li>
                    <li><a href="#" class="footer-link">FantaGraphics</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">Terminos & Servicios</a>
                <a href="#" class="social-link">Privacidad</a>
            </div>
            <div>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
        </div>
        <p class="footer-credit">Comics-Now! Mejor pagina de venta de historietas certificada internacionalmente.</p>

    `;
}

createFooter();