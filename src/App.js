import React, { Component } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CarInfo from "./components/CarInfo";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      VIN: "1FMHK7F82CGA13097",
      results: {}
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="blueLine" />
        <div className="container">
          <SearchBar
            term={this.state.VIN}
            changeVIN={term => this.changeVIN(term)}
          />
          <CarInfo data={this.state.results} />
        </div>
        <Footer />
      </div>
    );
  }

  changeVIN = term => {
    this.setState({ VIN: term });
    this.requestData(term);
  };

  requestData = term => {
    axios
      .get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${term}?format=json`
      )
      .then(res => {
        if (res.data.Results) {
          this.setState({ results: res.data.Results[0] });
          console.log(res.data);
        }
      });
  };
}

export default App;
