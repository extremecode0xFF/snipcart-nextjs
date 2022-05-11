import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.4.0/default/snipcart.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div
            hidden
            id="snipcart"
            data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
