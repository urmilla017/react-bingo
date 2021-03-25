import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import Cup from './Cup';
import './BoardStyle.css';

let diagonalLeftDone = false;
let diagonalRightDone = false;
let bingoMatrixRangeRow = [ 0, 1, 2, 3, 4 ];
let bingoMatrixRangeCol = [ 0, 1, 2, 3, 4 ];
const Board = () => {
    const [dataItems, setDataItems] = useState({
        "0": {
            key: 0,
            label: '(child noises in the background)',
            isSelected: false
        },
        "1": {
            key: 1,
            label: 'Hello, hello?',
            isSelected: false
        },
        "2": {
            key: 2,
            label: 'I need to jump in another call',
            isSelected: false
        },
        "3": {
            key: 3,
            label: 'Can everyone go on mute?',
            isSelected: false
        },
        "4": {
            key: 4,
            label: 'Could you please get closer to the mic?',
            isSelected: false
        },
        "5": {
            key: 5,
            label: '(load painful echo/feedback)',
            isSelected: false
        },
        "6": {
            key: 6,
            label: 'Next slide, please',
            isSelected: false
        },
        "7": {
            key: 7,
            label: 'Can we take this offline?',
            isSelected: false
        },
        "8": {
            key: 8,
            label: 'Is ___ on the call?',
            isSelected: false
        },
        "9": {
            key: 9,
            label: 'Could you share these slides aftwards?',
            isSelected: false
        },
        "10": {
            key: 10,
            label: 'Can somebody grant presenter rights?',
            isSelected: false
        },
        "11": {
            key: 11,
            label: 'Can you email that you everyone?',
            isSelected: false
        },
        "12": {
            key: 12,
            label: 'CONF CALL BINGO',
            isSelected: false
        },
        "13": {
            key: 13,
            label: 'Sorry, I had problems logging in.',
            isSelected: false
        },
        "14": {
            key: 14,
            label: '(animal noises in the background)',
            isSelected: false
        },
        "15": {
            key: 15,
            label: 'Sorry, I didnot find the Conference ID',
            isSelected: false
        },
        "16": {
            key: 16,
            label: 'I was having connection issues',
            isSelected: false
        },
        "17": {
            key: 17,
            label: 'I will have to get back to you',
            isSelected: false
        },
        "18": {
            key: 18,
            label: 'Who just joined?',
            isSelected: false
        },
        "19": {
            key: 19,
            label: 'Something wrong with my calendar',
            isSelected: false
        },
        "20": {
            key: 20,
            label: 'Do you see my screen?',
            isSelected: false
        },
        "21": {
            key: 21,
            label: 'Let us wait for ___!',
            isSelected: false
        },
        "22": {
            key: 22,
            label: 'You will send the minutes?',
            isSelected: false
        },
        "23": {
            key: 23,
            label: 'Sorry, I was on mute',
            isSelected: false
        },
        "24": {
            key: 24,
            label: 'Can you repeat, please?',
            isSelected: false
        }
    });
    const [isChosen, setIsChosen] = useState({ "12": true});
    const [isItBingo, setIsItBingo] = useState(false);
    const [bingoRow, setBingoRow] = useState();
    const [bingoCol, setBingoCol] = useState();
    const [bingoDiaLeft, setBingoDiaLeft] = useState(false);
    const [bingoDiaRight, setBingoDiaRight] = useState(false);
    const [bingoCount, setBingoCount] = useState(-1);
    const [userWon, setUserWon] = useState(false);

    useEffect(() => {
        if(bingoCount === 4) {
            setUserWon(true)
        }
        
    }, [bingoCount]);

    useEffect(() => {
        setBingoRow();
        setBingoCol();

        const removeElementFromMatrix = (element, matrix) => {
            if (element > -1) {
                matrix.splice(element, 1);
            }
        }
        
        const checkForBingo = (isChosen) => {
            const bingoMatrixRangeDia = [ 0, 1, 2, 3, 4 ];

            if(bingoRow !== undefined) {
                setBingoCount(bingoCount + 1);
            } else {
                const bingoRows = bingoMatrixRangeRow.find(row => bingoMatrixRangeRow.every(column => isChosen[row * 5 + column]));
                removeElementFromMatrix(bingoRows, bingoMatrixRangeRow);
                setBingoRow(bingoRows);
            }

            if(bingoCol !== undefined) {
                setBingoCount(bingoCount + 1);
            } else {
                const bingoCols = bingoMatrixRangeCol.find(column => bingoMatrixRangeCol.every(row => isChosen[row * 5 + column]));
                removeElementFromMatrix(bingoCols, bingoMatrixRangeCol);
                setBingoCol(bingoCols);
            }

            if(bingoDiaLeft && !diagonalLeftDone) {
                diagonalLeftDone = true;
                setBingoCount(bingoCount + 1);
            } else {
                
                const bingoDiagLeft = bingoMatrixRangeDia.every(index => isChosen[index * 5 + index]);
                setBingoDiaLeft(bingoDiagLeft);
            }

            if(bingoDiaRight && !diagonalRightDone) {
                diagonalRightDone = true;
                setBingoCount(bingoCount + 1);
            } else {
                const bingoDiagRight = bingoMatrixRangeDia.every(index => isChosen[index * 5 + 4 - index]);
                setBingoDiaRight(bingoDiagRight);
            }

        };

        setIsItBingo(checkForBingo(isChosen));

    }, [isChosen, isItBingo]);

    const onTileClick = (dataItem, id) => { 
        setIsItBingo(false);
        setDataItems(dataItems => ({
            ...dataItems,
            [id]: { ...dataItems[id], isSelected: true }
        }));

        setIsChosen(isChosen => ({
            ...isChosen,
            [id]: !dataItems[id].isSelected
        }));
    };

    const renderedItems = Object.keys(dataItems).map((id) => (
        <Tile
            key={id}
            id={id}
            isClicked={isChosen[id]}
            onTileClick={() => onTileClick(dataItems[id], id)}
        >
            <span className="tileSpan">{id}</span>
            <span>{dataItems[id]['label']}</span>
        </Tile>
    ));

    return (
        <div>
            <h3>Conference Call Bingo Board</h3>
            <div className="tileWrapper">
                {renderedItems}
            </div>
            <div>
                <Cup bingoCount={bingoCount} userWon={userWon} />
            </div>
        </div>
    );
};

export default Board;