import React from 'react';
import "./HjumaCard.css";

export default function HjumaCard(props) {
    return (
        <div className={props.type}>
            <div id="titleCenterDiv">
                <h2 id="cardTitle">{props.title}</h2>
                <h2 id="cardCenter">{props.center}</h2>
            </div>
            <h5 id="cardFooter">{props.footer}</h5>
            <div id="verticalLine"></div>
        </div>
    )
}
