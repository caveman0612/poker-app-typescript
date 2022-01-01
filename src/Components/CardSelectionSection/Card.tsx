import React from "react";



export default function Card({suit, card}: any) {
    return <img 
    src={`${process.env.PUBLIC_URL}/images/${suit}/${card}.png`} 
    alt={`${suit}${card}`} 
    className="card"/>
}