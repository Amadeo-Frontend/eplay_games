import { Image, Price, Title } from './styles'
import { useEffect, useState } from 'react'
import { Game } from '../../Pages/Home'
import Tag from '../Tag'
import Button from '../Button'
import { priceFormart } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((response) => response.json())
      .then((data) => setGame(data))
  }, [])
  if (!game) {
    return <h3>Carregando...</h3>
  }
  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Price>
            De <span>{priceFormart(game.prices.old)}</span> <br />
            por apenas {priceFormart(game.prices.current)}
          </Price>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta!"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}
export default Banner
