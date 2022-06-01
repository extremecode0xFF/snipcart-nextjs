import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { IProduct } from '../components/Product'
import ProductList from '../components/ProductList'
import { getProducts } from '../firebase/request'

const Home: NextPage<{ products: IProduct[] }> = ({ products }) => {
  return (
    <>
      <Head>
        <title>My awesome store</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <main className="main">
        <ProductList products={products} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let products: IProduct[] = []
  try {
    const payload: IProduct[] = await getProducts()
    products = payload
  } catch(error) {
    if (error instanceof Error) {
      console.log(error.message)
    } else {
      console.log(error)
    }
  }
  return {
    props: {
      products,
    },
  }
}

export default Home
