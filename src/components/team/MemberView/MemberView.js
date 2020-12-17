import React, { useState, useEffect } from 'react'
import './MemberView.css' 

export default function MemberView(props) {
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
        <div className="aml-member-view" style={{
            display: showView ? "flex" : "none",
            opacity: showTransition ? 1 : 0
        }}>
            <div id="aml-member-view">
                <img src={props.image} />
                <div>
                    <h1>{props.person.name}</h1>
                    <h3>{props.person.position}</h3>
                    {
                        props.person.desc?.map(desc => <p>{desc}</p>) 
                    }
                    <a>Email: {props.person.email}</a>
                </div>
                <i className="material-icons" onClick={() => {
                    props.toggleView();
                    document.body.style.overflow = "auto"
                }}>close</i>
            </div>
        </div>
    )
}