/* eslint-disable no-var */
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import SnipcartSettings from '../components/SnipcartSettings'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <SnipcartSettings />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
