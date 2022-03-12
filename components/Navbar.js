import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/"><a className={styles.logo}><h1>pricelist</h1></a></Link>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>
          <Link href="/"><a><i className="fa fa-home" aria-hidden="true"></i></a></Link>
        </li>
        <li className={styles.navbar__item}>
          <Link href="/search"><a><i className="fa fa-search" aria-hidden="true"></i></a></Link>
        </li>
        <li className={styles.navbar__item}>
          <Link href="/favorites"><a><i className="fa fa-heart" aria-hidden="true"></i></a></Link>
        </li>
        <li className={styles.navbar__item}>
          <Link href="/saved"><a><i className="fa fa-bookmark" aria-hidden="true"></i></a></Link>
        </li>
        <li className={styles.navbar__item}>
          <Link href="/profile"><a><i className="fa fa-user" aria-hidden="true"></i></a></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
