import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            guesses:[1,2,3],
            count:0,
            feedback: "Guess Now!"
        };
    
    }
    render() {


    return (
        <div className="game_container">
            <Header />
            <GuessSection feedback="Make your guess!" />
            <GuessCount count={3} />
            <GuessList guesses={[10, 15, 25]} />
        </div>
    );
}
}

