import React, { useEffect, useState } from 'react';
import './BoardStyle.css';
import Confetti from 'react-dom-confetti';
import Trophy from '../images/trophy.jpeg';

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.35,
  duration: 1000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "200px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const Cup = ({ bingoCount, userWon }) => {
    const [renderLetter, setRenderLetter] = useState('');
    const [eachWin, setEachWin] = useState(false);

    useEffect(() => {
        if(bingoCount > -1) {
            let charAtIndex = 'BINGO'.charAt(bingoCount);
            setRenderLetter(renderLetter => renderLetter.concat(charAtIndex));
            setEachWin(true);
        }

        setTimeout(() => {
            setEachWin(false);
        }, 1000)
    }, [bingoCount]);

    const overlayDisplayToggle = userWon ? 'overlayScreenDisplay' : '';

    return (
        <div className="cupContainer">
            <Confetti className="confettiDiv" active={ eachWin } config={ config }/>
            <div className="bingoBoxDiv">
                Bingo Status: {renderLetter}
            </div>
            <div className={`overlayScreen ${overlayDisplayToggle}`}>
                <img className="imageOverlayScreen" src={Trophy} alt="Trophy" />
            </div>
        </div>
    );
};

export default Cup;