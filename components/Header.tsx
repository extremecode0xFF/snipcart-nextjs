import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import logo from '../public/logo.svg'
import cart from '../public/shopping_cart.svg'
import { CART_SUMMARY } from '../snipcart/attributes'
import styles from '../styles/Header.module.scss'

export default function Header() {
  const { ref: headerRef } = useInView()
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      return setFixed(true)
    }
    setFixed(false)
  }

  return (
    <header
      ref={headerRef}
      className={
        fixed ? [styles.header, styles.stick].join(' ') : styles.header
      }
    >
      <div className={styles.logo}>
        <Image src={logo} alt="" width="38" height="38" />
        <h1 className={styles.title}>FishCastle</h1>
      </div>
      <a
        className={`${styles.summary} ${CART_SUMMARY.SNIPCART_CHECKOUT}`}
        href="#"
        style={{ textDecoration: 'none' }}
      >
        <Image src={cart} alt="shopping_cart" width="31" height="27" />
        <span className={`${CART_SUMMARY.SNIPCART_TOTAL_PRICE}`} />
        <span
          className={`${styles.count} ${CART_SUMMARY.SNIPCART_ITEMS_COUNT}`}
        />
      </a>
    </header>
  )
}
