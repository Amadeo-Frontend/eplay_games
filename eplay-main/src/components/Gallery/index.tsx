import { Action, Item, Items, Modal, ModalContent } from './styles'
import Section from '../Section'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import diablo from '../../assets/images/diablo.png'
import spider from '../../assets/images/banner-homem-aranha.png'
import fifa from '../../assets/images/fifa.png'
import close from '../../assets/images/close.png'
import { useState } from 'react'
import { GalleryItem } from '../../Pages/Home'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: fifa
  },
  {
    type: 'image',
    url: diablo
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/vL44VbiSnpY?si=jKUnyHBVpl_qRzWT'
  }
]

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}
interface ModalState extends GalleryItem {
  isVisible: boolean
}
const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }
  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Media ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para abrir a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'active' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
