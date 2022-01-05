import React from "react";
import CenterCards from "./CenterCards";
import Player from "./Player";
import Villain from "./Villain";

export default function Table({holeCards, flopCards, players, setPlayers}: any) {
    return <div className="table">
        <div className="topOfTable">
        <Villain 
        position={"leftPosition upper"}
        players={players}
        setPlayers={setPlayers}
        />
        <Villain 
        position={"middlePosition"}
        players={players}
        setPlayers={setPlayers}
        />
        <Villain 
        position={"rightPosition upper"}
        players={players}
        setPlayers={setPlayers}
        />
        </div>
        <CenterCards 
        flopCards={flopCards}
        />
        <div className="bottomOfTable">
        <Villain 
        position={"leftPosition lower"}
        players={players}
        setPlayers={setPlayers}
        />

        <Player 
        holeCards={holeCards}
        />
        <Villain 
        position={"rightPosition lower"}
        players={players}
        setPlayers={setPlayers}
        />

        </div>
        
    </div>
}