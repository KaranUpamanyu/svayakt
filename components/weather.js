import styles from '../styles/Home.module.css'
import Image from 'next/image'
const https = require("https");

function Weather() {
  const appid = "9a93d45262919088181c7d3631049c02";
  var locn = 'bangalore';
  var units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+locn+"&appid="+appid+"&units="+units;

  function getData() {
    return new Promise((resolve, reject) => {
      https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
          try {
            parsedData = JSON.parse(data);
            resolve(parsedData)
          } catch (e) {
            reject(e.message);
          }
        });
      }).on('error', (e) => {
        reject(`Got error: ${e.message}`);
      });
    })
  }


  getData()
  .then(response => {
    temperature = response.main.temp;
    desc = response.weather[0].description;
    icon = response.weather[0].icon;
    console.log(`temp: ${temperature} and desc: ${desc}`);
    iconurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
    return (
      <div className={styles.card}>
        <h2>{`Today's Weather`} &rarr;</h2>
        <p>Temperature: {temperature}°C</p>
        <p>Condition: {desc}</p>
        <Image layout="fill" loader={() => iconurl} src={iconurl} alt="Weather Icon" />
      </div>
    );
  })
  .catch(error => {
    return (
        <div className={styles.card}>
          <h2>{`Today's Weather`} &rarr;</h2>
          <p>{error.message}</p>
        </div>
    );
  });






  // https.get(url,function(response){
  //   console.log(response.statusCode);

  //   response.on("data",function(data){
  //     data = JSON.parse(data);
  //     // console.log(JSON.stringify(data.main));
  //     temperature = data.main.temp;
  //     desc = data.weather[0].description;
  //     icon = data.weather[0].icon;
  //     iconurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
  //   });
  // });


  var iconurl = "http://openweathermap.org/img/wn/02d@2x.png";

  return (
    <div className={styles.card}>
      <h2>{`Today's Weather`} &rarr;</h2>
      <p>Temperature: 24.3°C</p>
      <p>Condition: few clouds</p>
      <img src={iconurl} alt='few clouds'/>
    </div>
  );




  // axios.get(url)
  // .then((data) => {
  //   // console.log(JSON.stringify(data));
  //   return (
  //     <a
  //       href="https://github.com/vercel/next.js/tree/canary/examples"
  //       className={styles.card}
  //     >
  //       <h2>It be &rarr;</h2>
  //       <p>like that sometimes.</p>
  //       <p>{JSON.stringify(data.main)}</p>
  //     </a>
  //   )
  // })
  // .catch((error) => {
  //   console.log(error.message);
  //   return (
  //     <a
  //       href="https://github.com/vercel/next.js/tree/canary/examples"
  //       className={styles.card}
  //     >
  //       <h2>It be &rarr;</h2>
  //       <p>like that sometimes.</p>
  //       <p>{error.message}</p>
  //     </a>
  //   )
  // })

  // async function getData () {
  //   return await axios.get(url);
  // }


  // getData().then(data => {
  //   return  (
  //     <a
  //       href="https://github.com/vercel/next.js/tree/canary/examples"
  //       className={styles.card}
  //     >
  //       <h2>It be &rarr;</h2>
  //       <p>like that sometimes.</p>
  //       <p>{JSON.stringify(data)}</p>
  //     </a>
  //   )
  // })






  // try {
    // https.get(url,function(response){
    //   // console.log(response.statusCode);

    //   response.on("data",function(data){
    //     data = JSON.parse(data);
    //     var temperature = data.main.temp;
    //     var desc = data.weather[0].description;
    //     var icon = data.weather[0].icon;
    //     var iconurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

        // return (
        //   <a href="#" className={styles.card}>
        //     <h2>Today's Weather &rarr;</h2>
        //     <p>Temperature: {temperature}°C</p>
        //     <p>Condition: {desc}</p>
        //     <Image layout="fill" loader={() => iconurl} src={iconurl} alt="Weather Icon" />
        //   </a>
        // );
    //   });
    // });

    // fetch(url)
    // .then(data => {
    //   // data = JSON.parse(data);
    //   console.log(data.toString());
    //   var temperature = data.main.temp;
    //   var desc = data.weather[0].description;
    //   var icon = data.weather[0].icon;
    //   var iconurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

    //   return (
    //     <a href="#" className={styles.card}>
    //       <h2>Today's Weather &rarr;</h2>
    //       <p>Temperature: {temperature}°C</p>
    //       <p>Condition: {desc}</p>
    //       <Image layout="fill" loader={() => iconurl} src={iconurl} alt="Weather Icon" />
    //     </a>
    //   );
    // })


    // request
    // .get(url)
    // .then(data => {
    //   // data = JSON.parse(data);
    //   console.log(JSON.stringify(data.main.temp));
    //   var temperature = data.main.temp;
    //   var desc = data.weather[0].description;
    //   var icon = data.weather[0].icon;
    //   var iconurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

    //   return (
    //     <a href="#" className={styles.card}>
    //       <h2>Today's Weather &rarr;</h2>
    //       <p>Temperature: {temperature}°C</p>
    //       <p>Condition: {desc}</p>
    //       <Image layout="fill" loader={() => iconurl} src={iconurl} alt="Weather Icon" />
    //     </a>
    //   );
    // })
    // .catch(err => {
    //   return (
    //     <a href="#" className={styles.card}>
    //       <h2>Weather &rarr;</h2>
    //       <p>Sorry buddy but this isn't your day because</p>
    //       <p>{err.message}</p>
    //     </a>
    //   );
    // });
  // }
  // catch(err) {
  //   return (
  //     <a href="#" className={styles.card}>
  //       <h2>Weather &rarr;</h2>
  //       <p>Sorry buddy but this isn't your day because</p>
  //       <p>{err.message}</p>
  //     </a>
  //   );
  // }
}

export default Weather;
