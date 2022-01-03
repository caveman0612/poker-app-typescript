import React from "react";

export default function Controller({selectedCards, setHoleCards, setSelectedCards, setFlopCards}: any) {
    return <div className="controller">
        <button
        onClick={() => {
            setHoleCards([])
            setSelectedCards([])
            setFlopCards([])
        }}
        >Reset Cards</button>
        <button onClick={() => {
            if (selectedCards.length == 2) {
                setHoleCards([...selectedCards])
                setSelectedCards([])
            } else alert("There has to be two cards in your hand")
        }}>Hole Cards</button>

        <button onClick={() => {
            if (selectedCards.length == 3) {
                setFlopCards([...selectedCards]);
                setSelectedCards([])
            } else alert("There has to be threee cards in the flop")
        }}
        >Flop Cards</button>
    </div>
    
}