import React from 'react'
import Banner from '../../layout/Banner'
import './Criteria.css'
import banner from '../../../assets/criteria-banner.jpg'
import Button from '../../layout/Button'

export default function Criteria(props) {
    return (
        <div className="aml-criteria">
            <Banner image={banner} title="Investment Criteria"/>
            <div id="aml-investment-criteria">
                <h1 style={{marginTop: 75}}>Investment Criteria</h1>
                <p>Assurance Mezzanine provides flexible growth capital to lower-middle-market companies. We partner with  existing owners, management teams, private equity groups, and independent sponsors.</p>
                <ul>
                    <li>Private and public companies generally headquartered within the United States</li>
                    <li>$1 to $10 million EBITDA</li>
                    <li>Experienced and committed management teams</li>
                    <li>Effective financial controls  with a history of profitability</li>
                    <li>Industry agnostic, although we will not invest in real estate or oil and gas exploration<br/>
                        (oil and gas service companies are welcome)
                    </li>
                </ul>
                <p style={{fontWeight: "normal"}}>We do not invest in early or developmental stage businesses, turn-around or distressed situations</p>
                <div id="aml-criteria-divider" />
                <h1 style={{marginTop: 50}}>Transactions</h1>
                <ul>
                    <li>Growth Capital</li>
                    <li>Acquisition financing</li>
                    <li>Management buyouts</li>
                    <li>Transactions to provide shareholder liquidity</li>
                    <li>Corporate divestitures</li>
                    <li>Non-sponsored transactions</li>
                    <li>Sponsored led transactions</li>
                </ul>
                <div id="aml-criteria-divider" />
                <h1 style={{marginTop: 50}}>Financing Structure</h1>
                <ul style={{marginBottom: 100}}>
                    <li>$3 to $20 million of customized growth capital per transaction with the ability to syndicate larger financing</li>
                    <li>Mezzanine debt or preferred equity investments</li>
                    <li>Generally interest only for a period and then flexible amortization</li>
                    <li>3 to 5 year expected holding period</li>
                </ul>
            </div>
        </div>
    ) 
}