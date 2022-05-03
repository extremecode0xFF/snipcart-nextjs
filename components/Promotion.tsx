import Image from 'next/image'
import aquarium from '../public/aquarium.svg'
import styles from '../styles/Promotion.module.scss'

const Promotion = () => {
  return (
    <>
      <div className={styles.background_image}>
        <Image src={aquarium} alt={aquarium} />
      </div>
      <div className={styles.promotional_message}>
        <h3>REDISCOVER</h3>
        <h2>Fishkeeping</h2>

        <p>
          An <strong>exclusive collection of bettas</strong> available for
          everyone.
        </p>
      </div>
    </>
  )
}

export default Promotion
