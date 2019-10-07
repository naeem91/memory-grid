import React from "react";

import {GameLevels} from '../constants.js'
import Game from './Game.jsx'
import StatusModal from './StatusModal.jsx';


class GameController extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            level: 0, 
            gameId: `game-${new Date().getTime()}`,
            modalOpen: false,
            maxLevel: false
        }
    }
    get controller(){
        return {
            restart: () => {
                this.setState({gameId: `game-${new Date().getTime()}`});
            },
            increaseLevel: () => {
                if(this.state.level < GameLevels.length - 1){
                    this.setState({'level': this.state.level + 1, gameId: `game-${new Date().getTime()}`});
                }else{
                    this.setState({modalOpen: true, maxLevel: true});
                    setTimeout(()=>{
                        this.setState({
                            gameId: `game-${new Date().getTime()}`,
                            level: 0,
                            modalOpen: false,
                            maxLevel: false
                        });
                    }, 5000);
                }
            }
        }
    }
    render(){
        let statusText = '';
        if(this.state.maxLevel){
            statusText = 'Congratulations! You have achieved the max level of the game. ' +
                'Game will reset now...'
        }
        
        return (
            <div className="game-controller container">
                 <StatusModal
                    modalOpen={this.state.modalOpen}
                    title={statusText}
                    descripton=""
                />
                <Game 
                    key={this.state.gameId} 
                    gameController={this.controller} 
                    gridSize={GameLevels[this.state.level].gridSize} 
                    guessSize={GameLevels[this.state.level].guessSize} 
                    incorrectAllowed={GameLevels[this.state.level].incorrectAllowed} 
                    timeAllowed={GameLevels[this.state.level].timeAllowed} 
                    highlighTime={GameLevels[this.state.level].highlightTime} 
                    level={this.state.level + 1}
                />
            </div>
        )
    }
}

export default GameController;
