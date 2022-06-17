import styles from '../styles/Home.module.css'
import {GraphQLClient, gql} from 'graphql-request'

function Status() {
  const ENDPOINT = `https://api-ap-south-1.graphcms.com/v2/cl4doen4r64qw01xu8aht6kqs/master`
  const graphcms = new GraphQLClient(ENDPOINT)
  var today = (new Date()).getDate()

  const QUERY = gql`query {
    dailyRecords(where: {date: "2011-01-13"}) {
      n
      p
      k
      humidity
      ph
      rainfall
    }
  }`

  graphcms.request(QUERY)
  .then((data) => {
    console.log(data.humidity)
    return (
      <div className={styles.card}>
        <h2>Status &rarr;</h2>
        <p>N: {data.n}</p>
        <p>P: {data.p}</p>
        <p>K: {data.k}</p>
        <p>Humidity: {data.humidity}</p>
        <p>pH: {data.ph}</p>
        <p>Rainfall: {data.rainfall}</p>
      </div>
    );
  })











  return (
    <dov className={styles.card}>
      <h2>Status &rarr;</h2>
      <p>N: 93</p>
      <p>P: 56</p>
      <p>K: 36</p>
      <p>Humidity: 82.06</p>
      <p>pH: 6.98</p>
      <p>Rainfall: 185.28</p>
    </dov>
  );
}

export default Status;
