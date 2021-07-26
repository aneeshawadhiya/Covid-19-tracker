import React from "react";
import Cards from "./components/Cards/Cards";
import Countrypicker from "./components/CountryPicker/Countrypicker";
import Chart from "./components/Chart/Chart";
import logo from "./media/covid_back.png";
import styles from "./App.module.css";
import { fetchData } from "./api";
import worldmap from "./media/worldmap.svg";
import Typewriter from "typewriter-effect";
import virus from "./media/virus.svg";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetcheddata = await fetchData();
    this.setState({ data: fetcheddata });
  }

  handleCountryChange = async (country) => {
    console.log(country);
    const fetcheddata = await fetchData(country);
    console.log(fetcheddata);
    this.setState({ data: fetcheddata, country: country });
  };

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        {/* <div className={styles.landerpage}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("COVID-19").start();
            }}
          />
        </div> */}

        <div className={styles.lander}>
          <div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("COVID-19")
                  .pauseFor(2000)
                  .start();
              }}
            />
          </div>
        </div>
        <div className={styles.text}>COVID19INDIA
             We stand with everyone fighting on the frontlines</div>
        <img className={styles.worldmap} src={worldmap} alt="" />
        <Cards data={data} />
        <Countrypicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data}/>
        <div style={{fontSize:"10px"}}>
          <h4><a href="https://github.com/aneeshawadhiya"> Developer: Aneesh Awadhiya</a></h4>
        </div>
      </div>
    );
  }
}

export default App;
