import { HeaderBar, Links, LinkCart, LinkItem } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="">Promoções</a>
          </LinkItem>
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
