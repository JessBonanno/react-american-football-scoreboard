//TODO: STEP 1 - Import the useState hook.
import { useState, useEffect, cloneElement } from "react";
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  // const homeTD = () => {
  //   setHomeScore(homeScore + 7);
  // };
  // const homeFG = () => {
  //   setHomeScore(homeScore + 3);
  // };
  // const awayTD = () => {
  //   setAwayScore(awayScore + 7);
  // };
  // const awayFG = () => {
  //   setAwayScore(awayScore + 3);
  // };
  
  // - [X] Write a "handler" function in the component that takes in a team name and an amount. This function will then be passed to each button's click handler. It will increment the correct team's score by the passed in amount
  const scoreHandler = (team, score) => {
    (team === 'home') ? setHomeScore(homeScore + score) : setAwayScore(awayScore + score)
}


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={ () => {scoreHandler('home', 7)}}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={ () => {scoreHandler('home', 3)}}>
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={ () => {scoreHandler('away', 7)}}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={ () => {scoreHandler('away', 3)}}>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
