import React from 'react';
import './App.css';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';
import Articles from './Articles';

function App() {
  return (
    <div className="App">
      For You
      <br></br>
      <br></br>
      <div className="fycards">
        {yourArticles.map((articleObj, index) => {
          articleObj.key = index;
          return <Articles {...articleObj}/>
        })}
      </div><br></br><br></br><br></br>
      In Case You Missed It
      <br></br>
      <br></br>
      <div className="mcards">
        {missedArticles.map((articleObj, index) => {
          articleObj.key = index;
          return <Articles {...articleObj}/>
        })}
      </div>

    </div>
  );
}

export default App;
