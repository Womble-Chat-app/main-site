import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Womble chat | A chat app</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Womble chat!</a>
        </h1>

        <p className={styles.description}>
          Just another chat application (coming soon)
        </p>

        <div className={styles.grid}>
          <a href="/help" className={styles.card}>
            <h2>Help &rarr;</h2>
            <p>Go here for help</p>
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
