import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import logo from '../public/logo.svg'
import cart from '../public/shopping_cart.svg'
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
        fixed ? [styles.header, styles.header_stick].join(' ') : styles.header
      }
    >
      <div className={styles.header__logo}>
        <Image src={logo} alt="" width="38" height="38" />
        <h1 className={styles.header__title}>FishCastle</h1>
      </div>
      <a
        className="header__summary snipcart-checkout snipcart-summary"
        href="#"
        style={{ textDecoration: 'none' }}
      >
        <Image src={cart} alt="shopping_cart" width="31" height="27" />
        <span className="header__price snipcart-total-price"></span>
      </a>
    </header>
  )
}
