import React, { useState, useEffect } from 'react'
import './VentureView.css'

export default function VentureView(props) {
    // state
    const [showView, toggleView] = useState(false);
    const [showTransition, toggleTransition] = useState(false);

    /**
     * Handles the transition timing so that the element has time to dissapear from the DOM
     */
    const manageTransition = () => {
        showView ? toggleTransition(false) : setTimeout(() => toggleTransition(true), 200); 
        showView ? setTimeout(() => toggleView(false), 200) : toggleView(true);
    }

    // keeps track of when to time animations
    useEffect(() => {
        props.showView != showView && manageTransition();
    })

    return (
        <div className="aml-venture-view" style={{
            display: showView ? "flex" : "none",
            opacity: showTransition ? 1 : 0
        }}>
            <div id="aml-venture-view">
                <img src={props.image} />
                <div id="aml-venture-view-content">
                    <h1>{props.project.name}</h1>
                    <h3>{props.project.location}</h3>
                    <h3>Invested in {props.project.date}</h3>
                    <p>{props.project.desc}</p>
                    <a>Website: {props.project.website}</a>
                </div>
                <i className="material-icons" onClick={() => {
                    props.toggleView();
                    document.body.style.overflow = "auto"
                }}>close</i>
            </div>
        </div>
    )
}