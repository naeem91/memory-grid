import React from "react";

import { GameState } from '../constants.js'
import SideBar from './Sidebar.jsx'
import Grid from './Grid.jsx'
import StatusModal from './StatusModal.jsx';


class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gameState: GameState.LOADING, 
            wrongGuess: 0,
            cellsLeft: this.props.guessSize,
            time: this.props.timeAllowed,
            modalOpen: false
        };
        this.guesses = {correct: [], incorrect: []};
        this.gameController = this.props.gameController;
    }
    recordGuess(guess){
        if(guess.correct === true){
            this.guesses.correct.push(guess);
            this.setState({'cellsLeft': this.state.cellsLeft - 1});
            if(this.guesses.correct.length >= this.props.guessSize){
                setTimeout(()=>{
                    this.setState({gameState: GameState.WON});
                    this.nextLevel();
                }, 300);
            }
        }else{
            this.guesses.incorrect.push(guess);
            this.setState({wrongGuess: this.state.wrongGuess + 1});
            if(this.guesses.incorrect.length >= this.props.incorrectAllowed){
                setTimeout(()=>{
                    this.setState({gameState: GameState.ENDED});
                }, 300);
            }
        }
    }
    nextLevel(){
        this.gameController.increaseLevel();
    }
    restartGame(){
        this.gameController.restart();
    }
    componentDidMount(){
        this.setState({gameState: GameState., modalOpen: true});
        setTimeout(() => {
            this.setState({gameState: GameState.MEMORIZE, modalOpen: true});
            setTimeout(() => {
                this.setState({gameState: GameState.RECALL, modalOpen: false});
                setTimeout(() => {
                    let tick = setInterval(() => {
                        if(this.state.gameState == GameState.ENDED || this.state.gameState == GameState.WON){
                            clearInterval(tick);
                            this.setState({modalOpen: true});
                            return;
                        }
                        this.setState({time: this.state.time - 1});
                        if(this.state.time <= 0){
                            clearInterval(tick);
                            this.setState({gameState: GameState.ENDED, modalOpen: true});
                        }
                    }, 1000);
                }, 1000);
            }, this.props.highlighTime * 1000);
        }, 1000);
    }
    render(){
        let restartButton = '';
        let statusText = '';
        if(this.state.gameState == GameState.ENDED){
            restartButton = (
                <a class="waves-effect waves-light btn-small" onClick={this.restartGame.bind(this)}>
                <i class="material-icons left">autorenew</i>Retry</a>);
        }
        if(this.state.gameState == GameState.READY){
            statusText = GameState.READY.toUpperCase();
        }
        
        return(
            <div className="game row">
                <StatusModal
                    modalOpen={this.state.modalOpen}
                    title={statusText}
                    description={restartButton}
                />
                <SideBar 
                    guessSize={this.props.guessSize}
                    incorrectAllowed={this.props.incorrectAllowed}
                    level={this.props.level}
                    restartGame={this.restartGame.bind(this)}
                    {...this.state}
                />
                <Grid
                    size={this.props.gridSize}
                    highLightSize={this.props.guessSize}
                    recordGuess={this.recordGuess.bind(this)}
                    {...this.state}
                />
            </div>
        )
    }
}

export default Game;
