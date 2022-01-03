import React from "react";
import Selector from "./CardSelectionSection/selector";
import Table from "./Table/Table"
import Controller from "./Controller/Controller";


function App() {

    const [selectedCards, setSelectedCards] = React.useState([]);
    const [holeCards, setHoleCards] = React.useState([]);

    return <div className="body">
        <div className="top_section">
            <Selector 
            setSelectedCards={setSelectedCards} 
            selectedCards={selectedCards}
            />
            <Controller 
            selectedCards={selectedCards} 
            setHoleCards={setHoleCards}
            setSelectedCards={setSelectedCards}
            />
        </div>
        <Table 
        holeCards={holeCards}
        />
    </div>
}

export default App