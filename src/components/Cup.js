import React, { useEffect, useState } from 'react';
import './BoardStyle.css';
import Confetti from 'react-dom-confetti';
import Trophy from '../images/trophy.jpeg';

const config = {
  angle: 0,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 8000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const Cup = ({ bingoCount, userWon }) => {
    const [renderLetter, setRenderLetter] = useState('');

    useEffect(() => {
        if(bingoCount > -1) {
            let charAtIndex = 'BINGO'.charAt(bingoCount);
            setRenderLetter(renderLetter.concat(charAtIndex));
        }

        console.log('renderLetter:' + renderLetter);
        
    }, [bingoCount]);

    const overlayDisplayToggle = userWon ? 'overlayScreenDisplay' : '';

    return (
        <div className="cupContainer">
            <div className="bingoBoxDiv">
                {renderLetter}
            </div>
            <div className={`overlayScreen ${overlayDisplayToggle}`}>
                <Confetti active={ userWon } config={ config }/>
                <img className="imageOverlayScreen" src={Trophy} alt="Trophy" />
            </div>
        </div>
    );
};

export default Cup;