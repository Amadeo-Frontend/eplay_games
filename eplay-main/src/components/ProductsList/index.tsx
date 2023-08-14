import Game from '../../models/Game'
import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}
const ProductsList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            category={game.category}
            system={game.system}
            description={game.description}
            infos={game.infos}
            image={game.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
