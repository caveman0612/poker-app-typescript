import React from "react";

import Player from "./Player";

export default function Table({holeCards}: any) {
    return <div className="table">
        <Player holeCards={holeCards}/>
        
    </div>
}