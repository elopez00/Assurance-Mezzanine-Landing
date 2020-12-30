import React, { useState } from 'react'
import './Portfolio.css'
import Banner from '../../layout/Banner'
import banner from '../../../assets/orlando-port.jpg'
import VentureView from '../VentureView'
import ventures from '../../../assets/investments/ventures.json'

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
    const [showView, toggleView] = useState(false);
    const [name, setName] = useState("builders");
    const [image, setImage] = useState(buildersChoice);

    return (
        <div className="aml-portfolio">
            <VentureView image={image} project={ventures[name]} showView={showView} toggleView={() => toggleView(!showView)}/>
            <Banner image={banner} title="Portfolio" />
            <div id="aml-portfolio-current">
                <h2 style={{paddingTop: 25}}>Current Investments</h2>
                <div id="aml-portfolio-investments" style={{marginBottom: 100}}>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("builders");
                        setImage(buildersChoice);
                    }}><img src={buildersChoice}/></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("oldmill");
                        setImage(oldmill);
                    }}><img src={oldmill} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("critHealth");
                        setImage(critHealth);
                    }}><img src={critHealth} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("entia");
                        setImage(entia);
                    }}><img src={entia}/></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("turtle");
                        setImage(turtle);
                    }}><img src={turtle}/></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("ltech");
                        setImage(ltech);
                    }}><img src={ltech} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("millennium");
                        setImage(millennium);
                    }}><img src={millennium} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("webster");
                        setImage(webster);
                    }}><img src={webster} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("tebco");
                        setImage(tebco);
                    }}><img src={tebco} style={{width: "60%"}}/></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("pawz");
                        setImage(pawz);
                    }}><img src={pawz} style={{width: "100%"}}/></div>
                </div>
                <h2>Past Investments</h2>
                <p>companies/investments managed by members of our team in prior funds</p>
                <div id="aml-portfolio-investments" style={{marginBottom: 100}}>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("foxtank");
                        setImage(foxtank);
                    }}><img src={foxtank} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("nyc");
                        setImage(nyc);
                    }}><img src={nyc} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("simplifi");
                        setImage(simplifi);
                    }}><img src={simplifi} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("andretti");
                        setImage(andretti);
                    }}><img src={andretti} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("xri");
                        setImage(xri);
                    }}><img src={xri} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("bae");
                        setImage(bae);
                    }}><img src={bae} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("aih");
                        setImage(aih);
                    }}><img src={aih} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("twinlab");
                        setImage(twinlab);
                    }}><img src={twinlab} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("alexander");
                        setImage(alexander);
                    }}><img src={alexander} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("level4");
                        setImage(level4);
                    }}><img src={level4} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("green");
                        setImage(green);
                    }}><img src={green} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("organics");
                        setImage(organics);
                    }}><img src={organics} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("aviation");
                        setImage(aviation);
                    }}><img src={aviation} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("method");
                        setImage(method);
                    }}><img src={method} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("margaritaville");
                        setImage(margaritaville);
                    }}><img src={margaritaville} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("orion");
                        setImage(orion);
                    }}><img src={orion} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("pub");
                        setImage(pub);
                    }}><img src={pub} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("kbp");
                        setImage(kbp);
                    }}><img src={kbp} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("ghw");
                        setImage(ghw);
                    }}><img src={ghw} /></div>
                    <div onClick={() => {
                        toggleView(true);
                        document.body.style.overflow = "hidden";
                        setName("financial");
                        setImage(financial);
                    }}><img src={financial} /></div>
                </div>
            </div>
        </div>
    )
}