import React from "react";

import Row from "./Row.jsx";
import Cell from "./Cell.jsx";


class Grid extends React.Component {
    constructor(props){
        super(props);
        this.cells = [];
        this.activeCells = [];
        this.grid = this.constructGrid(this.props.size);
        this.randomSelect(this.props.size, this.props.highLightSize);
    }
    constructGrid(size){
        let grid = [];
        for(let i=0; i < size; i++){
            let row = [];
            for(let j=0; j<size; j++){
                let id = String(i) + String(j);
                row.push(id);
                this.cells.push(id);
            }
            grid.push(row);
        }

        return grid;
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    randomSelect(size, highLightSize){
        let randomSelected = [];
        for(let i=0; i<highLightSize; i++){
            randomSelected.push(this.cells[this.getRandomInt(0, size**2)]);
        }

        this.activeCells = randomSelected;
    }
    render (){
        return (
            <div className="grid"> 
                {
                    this.grid.map((row, ri) => 
                    (
                        <Row key={ri} id={ri}> 
                            {
                                row.map(cellId => <Cell key={cellId} id={cellId} selectedCells={this.activeCells} gameState={this.props.gameState}
                                recordGuess={this.props.recordGuess}  />)
                            } 
                        </Row> 
                    ))
                }
            </div>
        );
    }
}

export default Grid;
