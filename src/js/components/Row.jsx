import React from "react";

class Row extends React.Component {
    render(){
        return (
            <div className="row" id={`row-${this.props.id}`}>
               {this.props.children}
            </div>
        )
    }
}

export default Row;