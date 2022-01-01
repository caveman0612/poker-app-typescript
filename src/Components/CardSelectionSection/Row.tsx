import React from "react";
import Card from "./Card"

const cards: string[] = ["A", "2", '3', '4', '5', '6', '7', '8', '9', "T", "J", 'Q', 'K']

export default function Row({suit}: any) {
    return <div className="row">
        {cards.map((card: string) => {
            return <Card suit={suit} card={card}/>
        })}
    </div>
}