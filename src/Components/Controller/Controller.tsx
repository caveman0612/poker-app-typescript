import React from "react";

export default function Controller({selectedCards, setHoleCards, setSelectedCards, setAddedClass}: any) {
    return <div className="controller">
        <button onClick={() => {
            if (selectedCards.length == 2) {
                setHoleCards([...selectedCards])
                setSelectedCards([])
            } else alert("There has to be two cards in your hand")
            
        }}>Hole Cards</button>
    </div>
    
}