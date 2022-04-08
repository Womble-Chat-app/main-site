import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Womble chat | A chat app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Womble chat!</a>
        </h1>

        <p className={styles.description}>
          Just another chat application (coming soon)
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <Link href="/help" passHref><h2>Help &rarr;</h2></Link>
            <p>Go here for help</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <Link href="https://github.com/Womble-Chat-app" target="_blank" rel="noopener noreferrer">Our GitHub</Link>
        </div>
      </footer>
    </div>
  )
}
