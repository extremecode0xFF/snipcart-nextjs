import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p>
          Next.js app with a&nbsp;<a href="https://snipcart.com">Snipcart</a>
          &nbsp;- powered store
        </p>
        <div>
          <a
            href="https://github.com/extremecode0xFF/snipcart-nextjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}
