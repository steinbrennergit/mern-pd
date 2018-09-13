import React from "react";
import "./Card.css";

const flex = {

}

const Card = (props) => {
    return (
        <div className="card">
        <div className="container">
            <img className="detail-img" src={props.img} alt="PokeSprite" style={{float: "left"}}/>
            
            <ul style={{margin: "0", padding: "0"}}>
                <li className="info info-top"> Name: {props.name}</li>
                <li className="info"> Number: {props.dexNum}</li>
                <li className="info"> Type: {props.type1}</li>
                <li className="info"> Total Power: {props.total}</li>
            </ul>
            </div>
        </div>
    )
}

export default Card;

/*
                <ul className="spcInfo">
                    <li>SPDEF: {props.spDef}</li>
                    <li>SPEED: {props.speed}</li>
                </ul>
                <ul className="spcInfo">
                    <li>ATK: {props.atk}</li>
                    <li>SPATK: {props.spAtk}</li>
                </ul>
                <ul className="spcInfo">
                    <li>HP: {props.hp}</li>
                    <li>DEF: {props.def}</li>
                </ul>
                */