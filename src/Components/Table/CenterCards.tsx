import React from "react";
import Card from "../CardSelectionSection/Card";

function CenterCards ({flopCards}: any) {
    return <div className="centerCards">
        {flopCards.map(([suit, card]:string[]) => {
            return <Card suit={suit} card={card} key={`H${suit}${card}`} />
        })}
    </div>
}
export default CenterCards;