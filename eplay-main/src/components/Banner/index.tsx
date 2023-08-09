import { Image, Price, Title } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 &amp; PS5</Title>
      <Price>
        De <span>R$ 250,00</span> <br />
        por apenas R$ 99,90
      </Price>
    </div>
  </Image>
)
export default Banner
