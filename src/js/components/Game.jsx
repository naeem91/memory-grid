import React from "react";

import GameState from '../constants.js'
import SideBar from './Sidebar.jsx'
import Grid from './Grid.jsx'


class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gameState: GameState.LOADING, 
            wrongGuess: 0,
            cellsLeft: this.props.guessSize,
            time: this.props.timeAllowed
        };
        this.guesses = {correct: [], incorrect: []};
    }
    recordGuess(guess){
        if(guess.correct === true){
            this.guesses.correct.push(guess);
            this.setState({'cellsLeft': this.state.cellsLeft - 1})
            if(this.guesses.correct.length >= this.props.guessSize){
                this.setState({gameState: GameState.WON});
            }
        }else{
            this.guesses.incorrect.push(guess);
            this.setState({wrongGuess: this.state.wrongGuess + 1});
            if(this.guesses.incorrect.length >= this.props.incorrectAllowed){
                this.setState({gameState: GameState.ENDED});
            }
        }
    }
    restartGame(){
        window.location.reload();
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({gameState: GameState.READY});
            setTimeout(() => {
                this.setState({gameState: GameState.MEMORIZE});
                setTimeout(() => {
                    this.setState({gameState: GameState.RECALL});
                    let tick = setInterval(() => {
                        if(this.state.gameState == GameState.ENDED || this.state.gameState == GameState.WON){
                            clearInterval(tick);
                            return;
                        }
                        this.setState({time: this.state.time - 1})
                        if(this.state.time <= 0){
                            clearInterval(tick);
                            this.setState({gameState: GameState.ENDED});
                        }
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }
    render(){
        return(
            <div className="game">
                <SideBar guessSize={this.props.guessSize} incorrectAllowed={this.props.incorrectAllowed} restartGame={this.restartGame.bind(this)} {...this.state} />
                <Grid size={this.props.gridSize} highLightSize={this.props.guessSize} recordGuess={this.recordGuess.bind(this)} {...this.state} /> 
                <div className="clear" />
            </div>
        )
    }
}

export default Game;
