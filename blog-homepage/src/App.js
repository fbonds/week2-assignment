import React from 'react';
import './App.css';
import 'typeface-roboto';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';
import ForYou from './ForYou';
import MissedIt from './MissedIt';

function App() {
  return (
    <div className="App">
      For You
      <div className="fycards">
        {yourArticles.map((foryouObj) => {
          return <ForYou {...foryouObj}/>
        })}
      </div>
      <div className="mcards">
        {missedArticles.map((missedObj) => {
          return <ForYou {...missedObj}/>
        })}
      </div>

    </div>
  );
}

export default App;
