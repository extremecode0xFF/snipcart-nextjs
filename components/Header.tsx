import Image from 'next/image'
import logo from '../public/logo.svg'
import cart from '../public/shopping_cart.svg'
import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
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
