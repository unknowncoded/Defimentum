import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import hero from '../public/images/hero.png'
import ToggleButton from '../components/ToggleButton';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
            <div className={styles.logo}> 
            <span className={styles.green}>Defi</span>mentum</div>
              <ToggleButton/>
        </nav>
        <main className={styles.main}>
          <div className='hero'>
            <h1 className={styles.title}>
            We give momentum to <span>De-Fi Products</span>
            </h1>
            <p className={styles.description}>
            Defimentum is a value-add-focused angel investment outfit on a mission to architect the future of Crypto.
            </p>
          </div>
          <div className={styles.image_cont}>
            <span className={styles.circle}></span>
            <Image priority className={styles.image} src={hero} layout='responsive'  alt="Vercel Logo"/>
          </div>

          

        </main>
        
      </header>
      <footer className={styles.footer}>
        <div>
          <div>
            <h2>Are you a crypto founder? </h2>
            <a href="mailto:idea@brailie.dev">Let’s hear your ideas</a>
          </div>  
          <div className={styles.mail}>
            <span>
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope}/>
            </span>
            <a href="mailto:info@defimentum.com">info@defimentum.com</a>
          </div>
        </div>
        <div className={styles.copy}>
          <h4>Defimentum</h4>
          <small>&copy; 2022 defimentum. All Right Reserved</small>
            <span>Follow us on <a className={styles.icon} href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></span>
        </div>
        <hr />
      </footer>
    </div>
  )
}

export default Home
