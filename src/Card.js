import React, { Component } from 'react';

const Card = ({planets}) => {
    const planetCard = planets.map((user, i) => {
      return <div key={i} name={planets[i].name} popilation={planets[i].population}></div>
    }) 
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        {planetCard}
      </div>
    );
  }

export default Card;