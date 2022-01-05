import React from "react";

function Villain({position, players, setPlayers}: any) {
    return <div className="villain">
        <button className={position}>Add New Player</button>
    </div>
}

export default Villain;