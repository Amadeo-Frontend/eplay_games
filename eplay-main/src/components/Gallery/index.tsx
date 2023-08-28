import Section from '../Section'
import galeria from '../../assets/images/galeria.png'
import { Item, Items } from './styles'
const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={galeria} alt="" />
      </Item>
      <Item>
        <img src={galeria} alt="" />
      </Item>
      <Item>
        <img src={galeria} alt="" />
      </Item>
      <Item>
        <img src={galeria} alt="" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
