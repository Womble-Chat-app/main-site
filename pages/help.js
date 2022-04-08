import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function HelpPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Womble chat | Help</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Support page coming soon
        </h1>

        <p className={styles.description}>
          Will probably be a separate page.
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <Link href="./" passHref><h2>&rarr; Return Home &larr;</h2></Link>
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