import React from 'react';
import "./style.css";

function Homepage()
{
    return (

            <div className='homepages'>
               <div className="homepage">
                <h1>Welcome to the guessing game!</h1>

                <div className='homepage-container'>
                    <div class="box">
                    <form>
                    <input type="text" placeholder='Enter your number' required />
                    <button type="guess">Guess</button>
                    </form>
                    </div>
                    
                </div>
               </div>
            </div>

    );
}

export default Homepage;