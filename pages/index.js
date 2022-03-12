import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className={styles.categories__title}>categories</h1>
      <section className={styles.categories}>
        <ul className={styles.categories__list}>
          <li className={styles.category}>
            <Link href=""><a>Mobiles</a></Link>
          </li>
          <li className={styles.category}>
            <Link href=""><a>Refrigerators</a></Link>
          </li>
          <li className={styles.category}>
            <Link href=""><a>Appliances</a></Link>
          </li>
          <li className={styles.category}>
            <Link href=""><a>Televisions</a></Link>
          </li>
          <li className={styles.category}>
            <Link href=""><a>Washing machines</a></Link>
          </li>
        </ul>
      </section>
    </>
  )
}
