import React from 'react'
import './Team.css'
import Banner from '../../layout/Banner'
import banner from '../../../assets/teams-banner.jpg'

import Seth from '../../../assets/team/Seth.png'
import Robert from '../../../assets/team/Robert.png'
import David from '../../../assets/team/David.png'
import Anthony from '../../../assets/team/Anthony.jpg'
import Jeffrey from '../../../assets/team/Jeffrey.png'
import Ryan from '../../../assets/team/Ryan.jpg'
import Forrest from '../../../assets/team/Forrest.jpg'

import Contact from '../Contact'

export default function Team(props) {
    return (
        <div className="aml-team">
            <Banner title="Team" image={banner}/>
            <div id="aml-team">
                <h1 style={{marginTop: 75}}>Approach</h1>
                <p>Our aim is to help companies grow not only by supplying capital, but also by 
                   offering business owners our experience and network contacts obtained while 
                   operating our own businesses. Unlike other lenders, we know what it takes to 
                   operate and grow a business. We understand that many times fundraising can 
                   be a distraction to business operations. For that reason, we work hard to make 
                   the diligence and closing process both fast and fair. A great deal for us is 
                   one where both parties are happy and motivated to help grow the company.
                </p>
                <div id="aml-team-grid">
                    <div>
                        <img src={Seth}/>
                        <h3>Seth Ellis</h3>
                        <p>CEO</p>
                    </div>
                    <div>
                        <img src={Robert}/>
                        <h3>Robert Whittel</h3>
                        <p>CFO & General Counsel</p>
                    </div>
                    <div>
                        <img src={David}/>
                        <h3>David Ellis</h3>
                        <p>Director</p>
                    </div>
                    <div>
                        <img src={Anthony} />
                        <h3>Anthony Yanni</h3>
                        <p>Director</p>
                    </div>
                    <div>
                        <img src={Jeffrey}/>
                        <h3>Jeffrey Phillips</h3>
                        <p>Director</p>
                    </div>
                    <div>
                        <img src={Ryan}/>
                        <h3>Ryan Koppe</h3>
                        <p>VP of Portfolio Management</p>
                    </div>
                    <div>
                        <img src={Forrest}/>
                        <h3>Forrest Wooster</h3>
                        <p>Assosciate</p>
                    </div>
                </div>
            </div>
            <Contact></Contact>
         </div>
    )
}