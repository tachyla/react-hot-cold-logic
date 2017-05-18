import React from 'react';


import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            
            <form>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        </section>
    );
}

