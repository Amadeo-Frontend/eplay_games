import ProductsList from '../../components/ProductsList'
import re4 from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import fifa from '../../assets/images/fifa.png'
import jedi from '../../assets/images/jedi.png'
import street from '../../assets/images/street.png'
import Game from '../../models/Game'

const promo: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['10%', 'R$ 250,00'],
    image: re4
  },
  {
    id: 2,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['10%', 'R$ 250,00'],
    image: re4
  },
  {
    id: 3,
    title: 'FIFA 23',
    category: 'Esporte',
    system: 'PS5',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    infos: ['5%', 'R$ 290,00'],
    image: fifa
  },
  {
    id: 4,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['10%', 'R$ 250,00'],
    image: re4
  }
]

const comingSoon: Game[] = [
  {
    id: 5,
    title: 'Diablo',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['10/04'],
    image: diablo
  },
  {
    id: 6,
    title: 'Street Fighter 6',
    category: 'Luta',
    system: 'Series X/S',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    infos: ['05/04'],
    image: street
  },
  {
    id: 7,
    title: 'Star Wars Jedi Survivor',
    category: 'Ação',
    system: 'PS5 Series X/S',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['06/04'],
    image: jedi
  },
  {
    id: 8,
    title: 'The Legend of Zelda - TOK',
    category: 'RPG',
    system: 'Windows',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    infos: ['08/06'],
    image: zelda
  }
]
const Categories = () => (
  <>
    <ProductsList games={promo} title="RPG" background="gray" />
    <ProductsList games={comingSoon} title="Ação" background="black" />
    <ProductsList games={promo} title="Luta" background="gray" />
    <ProductsList games={comingSoon} title="Esportes" background="black" />
  </>
)

export default Categories
