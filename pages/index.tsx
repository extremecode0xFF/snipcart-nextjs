import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { IProduct } from '../components/Product'
import ProductList from '../components/ProductList'
import { child, DataSnapshot, get, ref } from 'firebase/database'
import { firebaseDatabase } from '../firebase/config'

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
    const response: DataSnapshot = await get(
      child(ref(firebaseDatabase), `products`)
    )
    if (response.exists()) {
      const payload: IProduct[] = response.val()
      products = payload
    }
  } catch {
    console.log('ERROR: Cannot get data from the server')
  }
  return {
    props: {
      products,
    },
  }
}

export default Home
