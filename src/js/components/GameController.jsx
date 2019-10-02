import React from "react";

import {GameLevels} from '../constants.js'
import Game from './Game.jsx'

class GameController extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            level: 0, 
            gameId: `game-${new Date().getTime()}`
        }
    }
    get controller(){
        return {
            restart: () => {
                this.setState({gameId: `game-${new Date().getTime()}`});
            },
            increaseLevel: () => {
                if(this.state.level < GameLevels.length){
                    this.setState({'level': this.state.level + 1, gameId: `game-${new Date().getTime()}`});
                }else{
                    alert('max level acheived');
                }
            }
        }
    }
    render(){
        return (
            <div className="game-controller">
                <Game 
                    key={this.state.gameId} 
                    gameController={this.controller} 
                    gridSize={GameLevels[this.state.level].gridSize} 
                    guessSize={GameLevels[this.state.level].guessSize} 
                    incorrectAllowed={GameLevels[this.state.level].incorrectAllowed} 
                    timeAllowed={GameLevels[this.state.level].timeAllowed} 
                    level={this.state.level + 1}
                />
            </div>
        )
    }
}

export default GameController;
