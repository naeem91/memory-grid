import React from "react";
import _ from "lodash";

import Row from "./Row.jsx";
import Cell from "./Cell.jsx";


class Grid extends React.Component {
    constructor(props){
        super(props);
        this.cells = [];
        this.activeCells = [];
        this.grid = this.constructGrid(this.props.size);
        this.randomSelect(this.props.highLightSize);
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
    randomSelect(highLightSize){
        this.activeCells = _.sampleSize(this.cells, highLightSize);
    }
    render (){
        return (
            <div className="grid col s10">
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
