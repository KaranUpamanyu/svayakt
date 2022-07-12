import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Line } from 'react-chartjs-2'
import Link from 'next/link'


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {

  const state = {
    labels: ['Today (12th July)', 'Wednesday (13th July)', 'Thursday (14th July)', 'Friday (15th July)', 'Saturday (16th July)', 'Sunday (17th July)', 'Monday- Next Week (18th July)'],
    // labels: ['Today (12th July)', 'Wednesday (13th July)', 'Thursday (14th July)', 'Friday (15th July)', 'Saturday (16th July)', 'Sunday (16th July)', 'Monday- Next Week (15th July)'],
    datasets: [
      {
        label: 'Cost (1000₹/ton)',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [21, 23.5, 22.4, 25, 21.2, 23, 24.7]
      }
    ]
  }

  const state2 = {
    labels: ['Today (12th July)', 'Wednesday (13th July)', 'Thursday (14th July)', 'Friday (15th July)', 'Saturday (16th July)', 'Sunday (17th July)', 'Monday- Next Week (18th July)'],
    // labels: ['Today', 'Sunday (19th June)', 'Monday (20th June)', 'Tuesday (21th June)', 'Wednesday (22th June)', 'Thursday (23th June)', 'Friday (23th June)'],
    datasets: [
      {
        label: 'Arrival (metric tons)',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgb(192, 75, 118)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [53, 15, 35, 28, 51, 45, 18]
      }
    ]
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SvayaKT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        🍅Tomato Market: <Link href="/"><span className={styles.brandname}>SvayaKT!</span></Link>
        </h1>

        <br/><br/>

      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average costs this week',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          width="800px"
          height="200px"
        />
      </div>

      <br/><br/>

      <div>
        <Line
          data={state2}
          options={{
            title:{
              display:true,
              text:'Incoming weights this week',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          width="800px"
          height="200px"
        />
      </div>

      <br/><br/>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Costs &rarr;</h2>
          <p><b>Today:</b> ₹21</p>
          <p><b>Tomorrow:</b> ₹23.5</p>
          <p><b>Next week:</b> ₹24.7</p>
        </div>

        <div className={styles.card}>
          <h2>Arrival &rarr;</h2>
          <p><b>Today:</b> 53 tons</p>
          <p><b>Tomorrow:</b> 15 tons</p>
          <p><b>Next week:</b> 18 tons</p>
        </div>
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
