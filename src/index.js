import React from "react";
import ReactDOM from 'react-dom';

import Game from './js/components/Game.jsx'

ReactDOM.render(<Game gridSize={5} guessSize={6} incorrectAllowed={3} timeAllowed={10}
/>, document.getElementById('app'));