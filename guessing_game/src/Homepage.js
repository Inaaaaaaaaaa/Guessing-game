import React, {useState} from 'react';
import "./style.css";

function Homepage()
{
    const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 101));
    const[guess, setGuess] = useState('');
    const [message, setMessage] = useState('');

    const Guess = () => 
    {
        const numberGuess = parseInt(guess);
        if(numberGuess < secretNumber)
        {
            setMessage('Too low');
        }
        else if (numberGuess > secretNumber)
        {
            setMessage('Too high');
        }
        else if(numberGuess === secretNumber)
        {
            setMessage('Congratulations!');
        }
        else
        {
            setMessage('Invalid input');
        }
    };

    const handleInputChange = (e) =>
    {
        setGuess(e.target.value);
    };

    /*
    const handelReset = () => 
    {
        setSecretNumber(Math.floor(Math.random() * 101));
        setMessage('');
        setGuess('');
    };
    */

    return (
            <div className='homepages'>
               <div className="homepage">
                <h1>Welcome to the guessing game!</h1>

                <div className='homepage-container'>
                    <div class="box">
                    <form onSubmit={(e) => {e.preventDefault(); Guess(); }}>
                        <input type="number" placeholder='Enter your number' value={guess} onChange={handleInputChange} required min="0" max="100"/>
  
                    <button type="submit" className="guess">Guess</button>
                    </form>

                    {message && <p>{message}</p>}

                    <div className='buttons'>
                        <div class="submit">Reset game</div>
                        <div class="submit">Give up</div>
                    </div>
                    </div>
                    
                </div>
               </div>
            </div>

    );
}

export default Homepage;