const GameState = {
    LOADING: 'loading',
    READY: 'ready',
    MEMORIZE: 'memorize',
    RECALL: 'recall',
    ENDED: 'ended',
    WON: 'won'
};

const GameLevels = [
    {
        gridSize: 5,
        guessSize: 6,
        incorrectAllowed: 3,
        timeAllowed: 10,
        highlightTime: 1
    },
    {
        gridSize: 5,
        guessSize: 8,
        incorrectAllowed: 3,
        timeAllowed: 10,
        highlightTime: 1
    },
    {
        gridSize: 6,
        guessSize: 6,
        incorrectAllowed: 3,
        timeAllowed: 10,
        highlightTime: 1
    },
    {
        gridSize: 6,
        guessSize: 6,
        incorrectAllowed: 3,
        timeAllowed: 10,
        highlightTime: 0.5
    },
    {
        gridSize: 6,
        guessSize: 8,
        incorrectAllowed: 3,
        timeAllowed: 10,
        highlightTime: 0.5
    },
    {
        gridSize: 6,
        guessSize: 10,
        incorrectAllowed: 3,
        timeAllowed: 10,
        highlightTime: 0.3
    }
];

export {GameState, GameLevels};