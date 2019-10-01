import React from "react";
import GameState from '../constants.js'

class SideBar extends React.Component {
    handleRestart(){
        if(this.props.gameState == GameState.ENDED){
            this.props.restartGame();
        }
    }
    render() {
        let status = `${this.props.gameState.toUpperCase()}...`;
        let restartClass = 'restart hidden';
        if(this.props.gameState == GameState.ENDED){
            restartClass = 'restart';
        }

        return (
            <div className="sidebar">
               <div>{`Status: ${status}`}</div>
               <div>{`Cells Left: ${this.props.cellsLeft}`}</div>
               <div>{`Wrong Guess: ${this.props.wrongGuess}/${this.props.incorrectAllowed}`}</div>
               <div>{`Time: ${this.props.time}`}</div>
               <div className={restartClass}><button onClick={this.handleRestart.bind(this)}>Restart</button></div>
            </div>
        )
    }
}

export default SideBar;