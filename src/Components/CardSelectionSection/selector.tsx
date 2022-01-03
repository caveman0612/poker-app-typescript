import React from "react";
import Row from "./Row";


const suites: string[] = ["D", "C", "H", "S"]


export default function Selector({setSelectedCards, selectedCards}: any) {
    return <div className="selector">
        {suites.map((suit) => {
            return <Row 
            suit={suit} 
            setSelectedCards={setSelectedCards} 
            selectedCards={selectedCards}
            key={suit}
            />
        })}
    </div>
    

}