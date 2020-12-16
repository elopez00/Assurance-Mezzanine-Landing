import React from 'react'
import './Portfolio.css'
import Banner from '../../layout/Banner'
import banner from '../../../assets/orlando-port.jpg'

// current
import buildersChoice from '../../../assets/investments/builders-choice.jpg'
import tmd from '../../../assets/investments/tmd.jpg'
import sands from '../../../assets/investments/s-and-s.png'
import oldmill from '../../../assets/investments/oldmill.png'
import critHealth from '../../../assets/investments/crit-health.png'
import healthpro from '../../../assets/investments/health-pro.png'
import entia from '../../../assets/investments/entia.png'
import turtle from '../../../assets/investments/turtle.png'
import ltech from '../../../assets/investments/l-tech.png'
import millennium from '../../../assets/investments/millennium.jpg'
import webster from '../../../assets/investments/webster.png'
import tebco from '../../../assets/investments/tebco.png'
import pawz from '../../../assets/investments/pawz.png'

// past
import foxtank from '../../../assets/investments/foxtank.png'
import nyc from '../../../assets/investments/nyc.png'
import simplifi from '../../../assets/investments/simplifi.png'
import andretti from '../../../assets/investments/andretti.png'
import xri from '../../../assets/investments/xri.jpg'
import bae from '../../../assets/investments/bae.jpg'
import aih from '../../../assets/investments/aih.jpg'
import twinlab from '../../../assets/investments/twinlab.jpg'
import alexander from '../../../assets/investments/alexander.jpg'
import level4 from '../../../assets/investments/level4.jpg'
import green from '../../../assets/investments/green.jpg'
import organics from '../../../assets/investments/organics.jpg'
import aviation from '../../../assets/investments/aviation.jpg'
import method from '../../../assets/investments/method.jpg'
import margaritaville from '../../../assets/investments/margaritaville.jpg'
import orion from '../../../assets/investments/orion.jpg'
import pub from '../../../assets/investments/pub.jpg'
import kbp from '../../../assets/investments/kbp.jpg'
import ghw from '../../../assets/investments/ghw.jpg'
import financial from '../../../assets/investments/financial.jpg'

export default function Portfolio(props) {
    return (
        <div className="aml-portfolio">
            <Banner image={banner} title="Portfolio" />
            <div id="aml-portfolio-current">
                <h2 style={{paddingTop: 25}}>Current Investments</h2>
                <div id="aml-portfolio-investments" style={{marginBottom: 100}}>
                    <div><img src={buildersChoice}/></div>
                    <div><img src={tmd} style={{width: "60%"}}/></div>
                    <div><img src={sands} style={{width: "60%"}}/></div>
                    <div><img src={oldmill} /></div>
                    <div><img src={critHealth} /></div>
                    <div><img src={healthpro} /></div>
                    <div><img src={entia}/></div>
                    <div><img src={turtle}/></div>
                    <div><img src={ltech} /></div>
                    <div><img src={millennium} /></div>
                    <div><img src={webster} /></div>
                    <div><img src={tebco} style={{width: "60%"}}/></div>
                    <div><img src={pawz} style={{width: "100%"}}/></div>
                </div>
                <h2>Past Investments</h2>
                <p>companies/investments managed by members of our team in prior funds</p>
                <div id="aml-portfolio-investments" style={{marginBottom: 100}}>
                    <div><img src={foxtank} /></div>
                    <div><img src={nyc} /></div>
                    <div><img src={simplifi} /></div>
                    <div><img src={andretti} /></div>
                    <div><img src={xri} /></div>
                    <div><img src={bae} /></div>
                    <div><img src={aih} /></div>
                    <div><img src={twinlab} /></div>
                    <div><img src={alexander} /></div>
                    <div><img src={level4} /></div>
                    <div><img src={green} /></div>
                    <div><img src={organics} /></div>
                    <div><img src={aviation} /></div>
                    <div><img src={method} /></div>
                    <div><img src={margaritaville} /></div>
                    <div><img src={orion} /></div>
                    <div><img src={pub} /></div>
                    <div><img src={kbp} /></div>
                    <div><img src={ghw} /></div>
                    <div><img src={financial} /></div>
                </div>
            </div>
        </div>
    )
}