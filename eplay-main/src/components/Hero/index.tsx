import { Game } from '../../Pages/Home'
import { priceFormart } from '../ProductsList'
import { Banner, Infos } from './styles'
import Button from '../Button'
import Tag from '../Tag'

type Props = {
  game: Game
}
const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          <span>De {priceFormart(game.prices.old)}</span>
          Por apenas {priceFormart(game.prices.current)}
        </p>
        <Button
          to="/"
          type="button"
          title="Clique aqui para adicionar ao carrinho"
          variant="primary"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
