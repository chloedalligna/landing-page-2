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
                <li><a href="">Home</a></li>
                <li><a href="">Produtos</a></li>
                <li><a href="">Avaliações</a></li>
                <li><a href="">Newsletter</a></li>
                <li><a href="">Contatos</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header