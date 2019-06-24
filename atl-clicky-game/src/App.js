import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Jumbotron from "./components/Jumbotron/jumbotron.js";
import PlayerCard from "./components/PlayerCard/PlayerCard.js";
import Footer from "./components/Footer/Footer.js";
import player from "./players.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    player,
    clickedPlayers: [],
    score: 0
  };

//when you click on a player get the current player and remove them from the array
  imageClick = e => {
    const currentPlayer = e.target.alt;
    const pickedPlayer =
      this.state.clickedPlayers.indexOf(currentPlayer) > -1;

//if you click on a player that has already been clicked, reset the game and shuffle players
    if (pickedPlayer) {
      this.setState({
        player: this.state.player.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPlayers: [],
        score: 0
      });
        alert("You already clicked thhis player! You lose. Try again!");

//if you click on an available player, your score is increased and players are shuffled
    } else {
      this.setState(
        {
          player: this.state.player.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPlayers: this.state.clickedPlayers.concat(
            currentPlayer
          ),
          score: this.state.score + 1
        },
//When user correctly clicks all 12 players their score is increased and the players are shuffled     
        () => {
          if (this.state.score === 12) {
            alert("Congrats! You Win! You are a super fan!");
            this.setState({
              player: this.state.player.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPlayers: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.player.map(player => (
            <PlayerCard
              imageClick={this.imageClick}
              id={player.id}
              key={player.id}
              image={player.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;