import React, { useState, useEffect } from 'react'
import './Menu.css'

import{ Link } from 'react-router-dom'

export default function Menu(props) {
    // state
    const [showView, toggleView] = useState(false);
    const [showTransition, toggleTransition] = useState(false);

    /**
     * This will manage the timing for the transition and display in DOM
     */
    const manageTransition = () => {
        showView ? setTimeout(() => toggleView(false), 200) : toggleView(true);
        showView ? toggleTransition(false) : setTimeout(() => toggleTransition(true), 200);
    }

    // constantly compares props
    useEffect(() => {
        props.showView != showView && manageTransition();
    })

    const close = () => {
        props.toggleView();
        document.body.style.overflow = "auto"
    }

    return (
        <div className="aml-menu" style={{
            display: showView ? "grid" : "none",
            opacity: showTransition ? 1 : 0
        }}>
            <div id="aml-menu" style={{height: showTransition ? "250px" : "0px"}}>
                <span style={{marginTop: 35}} onClick={close}>
                    <Link to="/portfolio" style={{ textDecoration: "none", color: "inherit"}}>
                        Portfolio
                    </Link>
                </span>
                <span onClick={close}>
                    <Link to="/investment-criteria" style={{ textDecoration: "none", color: "inherit"}}>
                        Investment Criteria
                    </Link>
                </span>
                <span onClick={close}>
                    <Link to="/team" style={{ textDecoration: "none", color: "inherit"}}>
                        Team
                    </Link>
                </span>
                <span onClick={close}>
                    <Link to="/news" style={{ textDecoration: "none", color: "inherit"}}>
                        News
                    </Link>
                </span>
                <span onClick={() => {
                    setTimeout(() => document.getElementById("aml-contact-screen").scrollIntoView(), 100)
                    close();
                }}>
                    <Link to="/team" style={{ textDecoration: "none", color: "inherit"}}>
                        Contact
                    </Link>
                </span>
            </div>
            <i className="material-icons" onClick={() => {
                props.toggleView();
                document.body.style.overflow = "auto";
            }}>close</i>
        </div>
    )
}