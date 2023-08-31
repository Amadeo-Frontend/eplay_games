import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}
const Home = () => {
  const [promotions, setPromotions] = useState<Game[]>([])
  const [comingSoon, setComingSoon] = useState<Game[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((response) => response.json())
      .then((data) => setPromotions(data))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((response) => response.json())
      .then((data) => setComingSoon(data))
  }, [])
  return (
    <>
      <Banner />
      <ProductsList games={promotions} title="Pomoções" background="gray" />
      <ProductsList games={comingSoon} title="Em breve" background="black" />
    </>
  )
}

export default Home
