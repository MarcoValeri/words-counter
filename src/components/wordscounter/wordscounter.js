import React, { useState } from 'react';

// import style file
import './wordscounter.scss';

const WordsCounter = () => {
    
    const [ characters, setCharacters ] = useState("");
    const [ words, setWords ] = useState("");

    // Events
    const handlerInput = e => {
        setCharacters(e.target.value);
        setWords(e.target.value.split(" "));
    }

    return (
        <div id="wordscounter-container">
            <section className="wordscounter-form">
                <form>
                    <textarea value={characters} onChange={handlerInput} rows="4" cols="100" placeholder="Type or paste your text here"></textarea>
                </form>
            </section>  
            <section className="wordscounter-result">
                <p className="wordscounter-result-characters">Characters<br /><span className="wordscounter-result-value">{characters.length}</span></p>
                <p className="wordscounter-result-words">Words<br /><span className="wordscounter-result-words">{words.length}</span></p>
            </section>
        </div>
    )
}

export default WordsCounter;