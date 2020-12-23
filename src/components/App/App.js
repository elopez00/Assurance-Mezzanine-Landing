import Header from '../static/Header';
import Footer from '../static/Footer';

import Home from '../home/Home';
import Portfolio from '../portfolio/Portfolio'
import Criteria from '../criteria/Criteria'
import Team from '../team/Team'
import News from '../news/News'
import Article from '../news/Article'

import buildersChoice from '../../assets/investments/builders-choice.jpg'
import tmd from '../../assets/investments/tmd.jpg'
import sands from '../../assets/investments/s-and-s.png'
import oldmill from '../../assets/investments/oldmill.png'
import critHealth from '../../assets/investments/crit-health.png'
import healthpro from '../../assets/investments/health-pro.png'
import entia from '../../assets/investments/entia.png'
import turtle from '../../assets/investments/turtle.png'
import ltech from '../../assets/investments/l-tech.png'
import millennium from '../../assets/investments/millennium.jpg'
import webster from '../../assets/investments/webster.png'
import tebco from '../../assets/investments/tebco.png'
import pawz from '../../assets/investments/pawz.png'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import articles from '../../assets/news.json'
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio/>
      </Route>
      <Route exact path="/investment-criteria">
        <Criteria />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/news" exact>
        <News />
      </Route>
      <Route path="/pawz">
        <Article title="Assurance Mezz Completes Investment in Pawz, Inc." {...articles["pawz"]}
          images={[pawz]}
        />
      </Route>
      <Route path="/apogee">
        <Article title="Assurance Mezz Completes Investment in Apogee Healthcare Holdings, LLC" {...articles["apogee"]}
          images={[critHealth, healthpro]}
          multiple={["http://www.chcmedstaff.com/", "http://www.healthpronetwork.com/"]}
        />
      </Route>
      <Route path="/tebco">
        <Article title="Assurance Mezz Completes Investment in The E3 Company, LLC" {...articles["tebco"]}
          images={[tebco]}
        />
      </Route>
      <Route path="/webster">
        <Article title="Assurance Mezz Completes Investment in Webster Electric Co., Inc. and 
                        Webco Leasing & Supply, LLC" {...articles["webster"]}
          images={[webster]}  
        />
      </Route>
      <Route path="/millennium">
        <Article title="Assurance Mezz Completes Investment in Millennium Grounds and Waters, LLC" {...articles["millennium"]}
          images={[millennium]}
        />
      </Route>
      <Route path="/ltech">
        <Article title="Assurance Mezz Completes Investment in L Tech Network Services, Inc." {...articles["ltech"]}
          images={[ltech]}
        />
      </Route>
      <Route path="/turtle">
        <Article title="Assurance Mezz Completes Investment in Turtle Southeast, LLC" {...articles["turtle"]}
          images={[turtle]}
        />
      </Route>
      <Route path="/entia">
        <Article title="Assurance Mezz Completes Investment in Entia, LLC" {...articles["entia"]}
          images={[entia]}
        />
      </Route>
      <Route path="/oldmill">
        <Article title="Assurance Mezz Completes Investment in Old Mill Brick, LLC" {...articles["oldmill"]}
          images={[oldmill]}
        />
      </Route>
      <Route path="/purpose">
        <Article title="Assurance Mezz Completes Investment in Purpose First Group, LLC" {...articles["purpose"]}
          images={[buildersChoice, tmd, sands]}
          multiple={["https://bldrschoice.com/", "https://tmdcompanies.com/", "https://ssiwoodproducts.com/"]}
        />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
