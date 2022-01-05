import React from "react";

export default function Controller({
    setCardsOnBoard, 
    cardsOnBoard,
    selectedCards, 
    setHoleCards, 
    setSelectedCards, 
    setFlopCards, 
    flopCards
}: any) {
    return <div className="controller">
        <button
        onClick={() => {
            setHoleCards([])
            setSelectedCards([])
            setFlopCards([])
            setCardsOnBoard([])
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
        <button onClick={() => {
            if (flopCards.length == 3 && selectedCards.length == 1) {
                console.log(selectedCards)
                setFlopCards([...flopCards, ...selectedCards])
                setSelectedCards([])
            }
        }}
        >Turn Card</button>
        <button onClick={() => {
            if (flopCards.length == 4 && selectedCards.length == 1) {
                console.log(selectedCards)
                setFlopCards([...flopCards, ...selectedCards])
                setSelectedCards([])
            }
        }}
        
        >River Card</button>
    </div>
    
}