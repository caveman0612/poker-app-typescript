import React from 'react';
import HoleCards from "./HoleCards";

const Player = ({holeCards}: any) => {
    return <div className="player">
        <HoleCards 
        holeCards={holeCards}
        />
    </div>
}

export default Player;
