import React from 'react';
import "./RPS.css";
import rockImg from "../Assets/rock.png";
import paperImg from "../Assets/paper.png";
import scissorsImg from "../Assets/scissors.png";
import versusImg from "../Assets/pngwing.com.png";
import clcikSound from "../Assets/click.mp3";



function RPS() {
    const [userScore, setUserScore] = React.useState(0);
    const [aiScore, setAiScore] = React.useState(0);
    const [userChoice, setUserChoice] = React.useState(null);
    const [aiChoice, setAiChoice] = React.useState(null);
    const [won, setWon] = React.useState("");
    // var result = "TIE";
    function handleGame(userChoice) {
        let audio = new Audio(clcikSound);
        audio.play();
        var choices = ['rock', 'paper', 'scissors'];
        var aiRandomChoice = Math.floor(Math.random() * 3);
        var aiChoice = choices[aiRandomChoice];
        if (userChoice === aiChoice) {
            console.log("tie");
            setWon("TIE");
        }
        else if (
            (userChoice === 'rock' && aiChoice === 'scissors') ||
            (userChoice === 'paper' && aiChoice === 'rock') ||
            (userChoice === 'scissors' && aiChoice === 'paper')
        ) {
            console.log("user won");
            setWon("You WON!");
            setUserScore(userScore + 1);
        }
        else {
            console.log("ai won");
            setAiScore(aiScore + 1);
            setWon("You LOST!");
        }
        setUserChoice(userChoice);
        setAiChoice(aiChoice);
    }

    function getImageForChoice(choice) {
        switch (choice) {
            case 'rock':
                return rockImg;
            case 'paper':
                return paperImg;
            case 'scissors':
                return scissorsImg;
            default:
                return null;
        }
    }

    return (
        <>
            <div className='heading-div'>
                <p className='heading rock'>ROCK </p>
                <p className='heading paper'>- PAPER</p>
                <p className='heading scissors'>- SCISSORS</p>
            </div>

            <div className='score-card'>
                <div className='user-score'>{userScore}</div>
                <div className='ai-score'>{aiScore}</div>
            </div>

            <div className='choices'>
                <div className='choice'>
                    <button className='circle-button' onClick={() => handleGame('rock')}>
                        <img src={rockImg} alt="Rock" />
                    </button>
                </div>
                <div className='choice'>
                    <button className='circle-button' onClick={() => handleGame('paper')}>
                        <img src={paperImg} alt="Paper" />
                    </button>
                </div>
                <div className='choice'>
                    <button className='circle-button' onClick={() => handleGame('scissors')}>
                        <img src={scissorsImg} alt="Scissors" />
                    </button>
                </div>
            </div>

            <p className='caption'>Make Your Choice</p>

            {userChoice && <>
                <div className='result'>
                    <div className='user-choice'>
                        {userChoice && <img src={getImageForChoice(userChoice)} alt={userChoice} className='circle-button' />}
                    </div>
                    <img src={versusImg}></img>
                    <div className='ai-choice'>
                        {aiChoice && <img src={getImageForChoice(aiChoice)} alt={aiChoice} className='circle-button' />}
                    </div>
                </div>
                <p className='caption'>{won}</p>
            </>
            }

        </>
    )
}
export default RPS;