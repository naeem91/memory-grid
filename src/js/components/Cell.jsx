import React from "react";

import {GameState} from '../constants.js'


class Cell extends React.Component {
    constructor(props){
        super(props);
        this.state = {guess: ''};
    }
    handleClick(evt){
        if(this.props.gameState == GameState.RECALL){
            if(this.state.guess)
                return;
            
            if(this.isActive()){
                this.setState({guess: 'correct'});
            }else{
                this.setState({guess: 'incorrect'});
            }

            this.props.recordGuess({cell: this.props.id, correct: this.isActive()});                        
        }
    }
    isActive(){
        return this.props.selectedCells.indexOf(this.props.id) >= 0;
    }
    render(){
        let classes = "cell col s2 card-panel";

        if(this.props.gameState == GameState.MEMORIZE && this.isActive()){
            classes += " active";
        }

        if(this.props.gameState == GameState.RECALL){
            classes += ` ${this.state.guess}`;
            if(!this.state.guess) {
                classes += ' hoverable';
            }
        }

        if(this.props.gameState == GameState.ENDED && this.isActive()){
            classes += " original";
        }

        return (
            <div id={`cell-${this.props.id}`} className={classes} onClick={this.handleClick.bind(this)}></div>
        )
    }
}

export default Cell;