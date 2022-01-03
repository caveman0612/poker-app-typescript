import React from "react";
import CenterCards from "./CenterCards";
import Player from "./Player";
import Villain from "./Villain";

export default function Table({holeCards, flopCards}: any) {
    return <div className="table">
        <div className="topOfTable">
        <Villain />
        <Villain />
        <Villain />
        </div>
        <CenterCards 
        flopCards={flopCards}
        />
        <div className="bottomOfTable">
        <Villain />

        <Player 
        holeCards={holeCards}
        />
        <Villain />

        </div>
        
    </div>
}