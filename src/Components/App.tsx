import React from "react";
import Selector from "./CardSelectionSection/selector";
import Table from "./Table/Table"
import Controller from "./Controller/Controller";


function App() {

    const [selectedCards, setSelectedCards] = React.useState([]);
    const [holeCards, setHoleCards] = React.useState(["CK", 'DK']);
    const [flopCards, setFlopCards] = React.useState(["CK", "DK", "HA"])
    const [cardsOnBoard, setCardsOnBoard] = React.useState([]);

    const [players, setPlayers] = React.useState(Array(5))

    return <div className="body">
        <div className="top_section">
            <Selector 
            setSelectedCards={setSelectedCards} 
            selectedCards={selectedCards}
            cardsOnBoard={cardsOnBoard}
            setCardsOnBoard={setCardsOnBoard}
            />
            <Controller 
            selectedCards={selectedCards} 
            setHoleCards={setHoleCards}
            setSelectedCards={setSelectedCards}
            setFlopCards={setFlopCards}
            flopCards={flopCards}
            cardsOnBoard={cardsOnBoard}
            setCardsOnBoard={setCardsOnBoard}
            />
        </div>
        <Table 
        holeCards={holeCards}
        flopCards={flopCards}
        players={players}
        setPlayers={setPlayers}
        />
    </div>
}

export default App