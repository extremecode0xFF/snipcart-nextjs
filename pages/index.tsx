import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { IProduct } from '../components/Product'
import ProductList from '../components/ProductList'
import halfMoonPicture from '../public/halfmoon.jpg'
import crownTailPicture from '../public/crowntail.jpeg'
import dragonScalePicture from '../public/dragonscale.jpg'
import veiltailPicture from '../public/veiltail.jpg'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My awesome store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
      </Head>
      <main className="main">
        <ProductList products={products} />
      </main>
    </>
  )
}

export const products: IProduct[] = [
  {
    id: 'halfmoon',
    name: 'Halfmoon Betta',
    price: 25.0,
    image: halfMoonPicture,
    description:
      'The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.',
    url: 'https://fishcastle.netlify.app/api/products/halfmoon',
  },
  {
    id: 'dragonscale',
    name: 'Dragon Scale Betta',
    price: 35,
    image: dragonScalePicture,
    description:
      'The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.',
    url: 'https://fishcastle.netlify.app/api/products/dragonscale',
  },
  {
    id: 'crowntail',
    name: 'Crowntail Betta',
    price: 7.5,
    image: crownTailPicture,
    description:
      'The crowntail is pretty common, but interesting none the less. It\'s recognized by the shape of its tail that has an appearance of a comb.',
    url: 'https://fishcastle.netlify.app/api/products/crowntail',
  },
  {
    id: 'veiltail',
    name: 'Veiltail Betta',
    price: 5.0,
    image: veiltailPicture,
    description:
      'By far the most common betta fish. You can recognize it by its long tail aiming downwards.',
    url: 'https://fishcastle.netlify.app/api/products/veiltail',
  },
]

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      products,
    },
  }
}

export default Home
