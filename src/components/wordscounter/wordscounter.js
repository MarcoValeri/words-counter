import React, { useState } from 'react';

// import style file
import './wordscounter.scss';

const WordsCounter = () => {
    
    const [ characters, setCharacters ] = useState("");
    const [ words, setWords ] = useState([]);

    // Events
    const handlerInput = e => {
        setCharacters(e.target.value);
        setWords(e.target.value.split(" "));
    }

    /*
    * Create a function that gets as
    * @parameter an array and 
    * @return number: the lengh of this array, withoud counting the "space element"
    */
   const wordsConter = array => {

        let words = 0;

        array.forEach((word, index) => {

            if (word !== "") {
                words++;
            }

            if (word === "\n") {
                words--;
            }

            // if (word.includes("\n")) {
            //     words++;
            // }
            
        });

        return words;

   };

    console.log(words);

    return (
        <div id="wordscounter-container">
            <section className="wordscounter-form">
                <form>
                    <textarea value={characters} onChange={handlerInput} rows="4" cols="100" placeholder="Type or paste your text here"></textarea>
                </form>
            </section>  
            <section className="wordscounter-result">
                <p className="wordscounter-result-characters">Characters<br /><span className="wordscounter-result-value">{characters.length}</span></p>
                <p className="wordscounter-result-words">Words<br /><span className="wordscounter-result-value">{wordsConter(words)}</span></p>
            </section>
        </div>
    )
}

export default WordsCounter;