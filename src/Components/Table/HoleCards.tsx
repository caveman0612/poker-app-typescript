import React from 'react';
import Card from '../CardSelectionSection/Card';

export default function HoleCards({holeCards}: any) {
    return holeCards.map(([suit, card]: string[]) => {
        return <Card suit={suit} card={card} key={`H${suit}${card}`} />
    })

}