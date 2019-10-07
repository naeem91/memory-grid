import React from "react";
import {GameState} from '../constants.js'
import logo from '../../img/logo.png'

class SideBar extends React.Component {
    render() {
        let levelIcon = '';
        switch(this.props.level) {
            case 1:
                levelIcon = 'looks_one';
                break;
            case 2:
                levelIcon = 'looks_two';
                break;
            default:
                levelIcon = `looks_${this.props.level}`;
        }

        let timeIcon = '';
        switch (this.props.time){
            case 0:
                timeIcon = 'timer';
                break;
            case 10:
                timeIcon = 'filter_9_plus';
                break;
            default:
                timeIcon = `filter_${this.props.time}`;
        }

        let triesIcon = '';
        let triesLeft = this.props.incorrectAllowed - this.props.wrongGuess;
        switch(triesLeft) {
            case 0:
                triesIcon = 'block';
                break;
            case 1:
                triesIcon = 'looks_one';
                break;
            case 2:
                triesIcon = 'looks_two';
                break;
            default:
                triesIcon = `looks_${triesLeft}`;
        }

        let cellsIcon = `filter_${this.props.cellsLeft}`;
        if(this.props.cellsLeft == 0) {
            cellsIcon = 'check';
        }

        return (
            <div className="sidebar col s2">
               <ul className="collection">
                   <li class="collection-item">
                       <img src={logo} alt="Memory Grid" class="circle" style={{width: '70px'}} />
                   </li>
                    <li class="collection-item">
                       Level
                       <span class="secondary-content">
                           <i class="material-icons">{levelIcon}</i>
                       </span>
                   </li>
                   <li class="collection-item">
                       Time
                       <span class="secondary-content">
                        <i class="material-icons">{timeIcon}</i>
                       </span>
                   </li>
                   <li class="collection-item">
                       Cells
                       <span class="secondary-content">
                        <i class="material-icons">{cellsIcon}</i>
                       </span>
                   </li>
                   <li class="collection-item">
                       Tries
                       <span class="secondary-content">
                        <i class="material-icons">{triesIcon}</i>
                       </span>
                   </li>
               </ul>
            </div>
        )
    }
}

export default SideBar;