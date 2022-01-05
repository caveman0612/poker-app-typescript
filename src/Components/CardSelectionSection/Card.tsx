import React from "react";

function Card({suit, card, setSelectedCards, selectedCards, setCardsOnBoard, cardsOnBoard}: any) {

    function checkIfSelected(suit: string, card: string):string {
        if (!cardsOnBoard) return ""
        if (cardsOnBoard.includes(`${suit}${card}`)){
            return " highlight"
        } else return ""
    }

    return <img 
    src={`${process.env.PUBLIC_URL}/images/${suit}/${card}.png`} 
    alt={`${suit}${card}`} 
    className={`card${checkIfSelected(suit, card)}`}
    onClick={()=> {
        if (selectedCards.includes(`${suit}${card}`)) {
            setSelectedCards([...selectedCards.filter((value: string) => value !== `${suit}${card}`)]);
            setCardsOnBoard([...cardsOnBoard.filter((value: string) => value !== `${suit}${card}`)]);
        }
        else {
            setSelectedCards([...selectedCards, `${suit}${card}`])
            setCardsOnBoard([...cardsOnBoard, `${suit}${card}`])
        }
    }}
    />
}

export default Card;