const GameState = {
    LOADING: 'loading',
    READY: 'ready',
    MEMORIZE: 'memorize',
    RECALL: 'recall',
    ENDED: 'ended',
    WON: 'won'
}

const GameLevels = [
    {
        gridSize: 5,
        guessSize: 6,
        incorrectAllowed: 3,
        timeAllowed: 10
    }, 
    {
        gridSize: 5,
        guessSize: 8,
        incorrectAllowed: 3,
        timeAllowed: 10
    },
    {
        gridSize: 6,
        guessSize: 6,
        incorrectAllowed: 3,
        timeAllowed: 10
    }
]

export {GameState, GameLevels};