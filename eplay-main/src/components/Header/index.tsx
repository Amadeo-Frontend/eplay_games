import { HeaderBar, Link, Links, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="" />
      <nav>
        <Links>
          <Link>
            <a href="">Categorias</a>
          </Link>
          <Link>
            <a href="">Novidades</a>
          </Link>
          <Link>
            <a href="">Promoções</a>
          </Link>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0- Produto(s)
      <img src={cart} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
