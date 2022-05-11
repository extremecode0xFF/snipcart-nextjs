import Script from 'next/script'
import { snipcartSettings, script } from '../snipcart/settings'

const SnipcartSettings = () => {
  return (
    <Script id="snipcartSettings">{`
            window.SnipcartSettings = ${JSON.stringify(
              snipcartSettings({
                publicApiKey: process.env.NEXT_PUBLIC_SNIPCART_API_KEY,
                addProductBehavior: 'none',
                loadStrategy: 'on-user-interaction',
                modalStyle: 'side',
              })
            )};
            ${script}
        `}</Script>
  )
}

export default SnipcartSettings
