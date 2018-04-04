import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { cities: [] };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.cities.map((city, index) => {
            return (
              <li key={index}>
                <b>{city.name}</b>:{city.population}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  async componentDidMount() {
    const response = await fetch("/cities");
    const cities = await response.json();
    this.setState({ cities: cities });
  }
}

export default App;
