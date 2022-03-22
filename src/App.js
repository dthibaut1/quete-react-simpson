import './App.css';
import React from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

const firstSimpson = {
  quote:
    'I live in a single room above a bowling alley...and below another bowling alley.',
  character: 'Frank Grimes',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887',
characterDirection: 'Left',
};


function App() {
  const [simpson, setSimpson] = React.useState(firstSimpson);

  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data[0]);
      });
  };

  // console.log(simpson)
  
    return (
    <div className="App">
      <h1>Random Simpsons' Quote</h1>
      <QuoteCard simpson={simpson} />
      <button type="button" onClick={getSimpson}>Get Simpson</button>
    </div>
  );
}

export default App;
