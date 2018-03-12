import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: []
    }
  }
  componentDidMount(){
    fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(data => this.setState({ planets: data.results }))
  }

  render() {
    const { planets } = this.state;
    console.log(this.state.planets);
    return (
      <div>
        {
          planets.map(planet => 
            <div className="tc bg-blue dib br3 pa3 ma2 grow bw2 shadow-5">
              <h2>planet name: {planet.name}</h2>
              <h3>climate: {planet.climate}</h3>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
