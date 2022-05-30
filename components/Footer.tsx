import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Next.js app with a <a href="https://snipcart.com">Snipcart</a> - powered
        store
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
    </footer>
  )
}
