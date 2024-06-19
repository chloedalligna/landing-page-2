import './style.css'

function Header() {
  return (
    <header>
        <div>
            <img src="src\assets\logo-lilas.png" alt="" id='img1' />
            <img src="src\assets\Luxo-de-Mulher-17-06-2024 (1).png" alt="" id='img2' />
        </div>

        <nav>
            <ul>
                <li><a href="header">Home</a></li>
                <li><a href="#section-products">Produtos</a></li>
                <li><a href="#section-about">Sobre</a></li>
                <li><a href="#section-form">Newsletter</a></li>
                <li><a href="#section-location">Localização</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header