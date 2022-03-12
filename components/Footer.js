import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__copy}>&copy; All rights reserved. App designed &amp; developed by <Link href="#"><a>Abdullah</a></Link></p>
    </div>
  );
}

export default Footer;
