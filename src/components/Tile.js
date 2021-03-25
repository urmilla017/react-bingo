import React from 'react';
import './BoardStyle.css';

const Tile = ({ id, children, onTileClick, isClicked }) => {
    const tileSelected = isClicked ? 'clickedTile' : '';
    const id12 = id === 12 ? 'disableClickEvent' : '';
    return (
        <div 
            onClick={onTileClick} 
            className={`tileStyle ${tileSelected} ${id12}`}
        >
            {children}
        </div>
    );
};

export default Tile;
