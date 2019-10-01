import React from "react";

class SideBar extends React.Component {
    render() {
        let status = `${this.props.gameState.toUpperCase()}...`;

        return (
            <div className="sidebar">
               <div>{`Status: ${status}`}</div>
               <div>{`Cells Left: ${this.props.cellsLeft}`}</div>
               <div>{`Wrong Guess: ${this.props.wrongGuess}/${this.props.incorrectAllowed}`}</div>
               <div>{`Time: ${this.props.time}`}</div>
            </div>
        )
    }
}

export default SideBar;