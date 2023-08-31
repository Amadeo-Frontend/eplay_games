import { Game } from '../../Pages/Home'
import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}
export const priceFormart = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const ProductsList = ({ background, title, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []
    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(` ${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(priceFormart(game.prices.current))
    }
    if (game.prices.old) {
      tags.push(priceFormart(game.prices.old))
    }
    return tags
  }
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
           <li>
             <Product
              key={game.id}
              title={game.name}
              category={game.details.category}
              system={game.details.system}
              description={game.description}
              infos={getGameTags(game)}
              image={game.media.thumbnail}
            />
           </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
