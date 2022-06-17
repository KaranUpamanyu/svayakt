import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Weather from '../components/weather'
import Status from '../components/status'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SvayaKT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href={`/`}><span className={styles.brandname}>SvayaKT!</span></Link>
        </h1>

        <p className={styles.description}>
          Your e-Agricultural Ecosystem{' '}
        </p>

        <div className={styles.grid}>
          <div href="/" className={styles.warningcard}>
            <h2>⚠️Warning &rarr;</h2>
            <p>Soil moisture under recommended levels</p>
          </div>

          <Weather/>

          <Status/>

          <Link href={`/markets/tomato`}>
            <div className={styles.card}>
              <h2>🍅Tomato market &rarr;</h2>
              <p><b>Today:</b> ₹21</p>
              <p><b>Tomorrow:</b> ₹23.5</p>
              <p><b>Next week:</b> ₹24.7</p>
            </div>
          </Link>

          <Link href={`/markets/potato`}>
            <div className={styles.card}>
              <h2>🥔Potato market &rarr;</h2>
              <p><b>Today:</b> ₹27</p>
              <p><b>Tomorrow:</b> ₹28.1</p>
              <p><b>Next week:</b> ₹30.2</p>
            </div>
          </Link>

          <Link href={`/markets/brinjal`}>
            <div className={styles.card}>
              <h2>🍆Brinjal market &rarr;</h2>
              <p><b>Today:</b> ₹24.23</p>
              <p><b>Tomorrow:</b> ₹23.46</p>
              <p><b>Next week:</b> ₹21.78</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
          <span className={styles.brandname}>
            <b>SvayaKT</b>
          </span>
          &nbsp; by 1BY18IS 004/024/057
      </footer>
    </div>
  )
}
