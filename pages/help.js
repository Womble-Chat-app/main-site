import Head from 'next/head'
import Image from 'next/image'
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
          <a href="./" className={styles.card}>
            <h2>&rarr; Return Home &larr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Womble-Chat-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our GitHub{' '}
          <span className={styles.ghlogo}>
            <Image src="/GitHub-Mark.png" alt="Womble Chat logo" width={32} height={32} />
          </span>
        </a>
      </footer>
    </div>
  )
}