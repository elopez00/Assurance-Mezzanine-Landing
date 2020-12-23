import React from 'react'
import './News.css'
import Banner from '../../layout/Banner'
import banner from '../../../assets/news-banner.jpg'
import Button from '../../layout/Button'
import Article from '../Article'
import articles from '../../../assets/news.json'
import { Link } from 'react-router-dom'

export default function News(props) {
    return (
        <div className="aml-news">
            <Banner title="News" image={banner}/>
            <div id="aml-news">
                <div id="aml-news-module">
                    <h3>Nov 2019</h3>
                    <h1>Assurance Mezz Completes Investment in Pawz, Inc.</h1>
                    <p>Assurance Mezzanine Fund (“Assurance”) is pleased to announce its 
                       latest investment in Canton, Ohio based Pawz, Inc. (“Pawz”). Assurance 
                       provided mezzanine debt in support of Sancus Capital Group’s acquisition 
                       of 100% of the assets of Pawz...</p>
                    <Link to="pawz" style={{ textDecoration: "none", color: "inherit"}}>
                        <Button variant="border-blue">
                                Read more
                        </Button>
                    </Link>
                    <div id="aml-news-divider" />
                </div>
                <div id="aml-news-module">
                    <h3>Oct 2019</h3>
                    <h1>Assurance Mezz Completes Investment in The E3 Company, LLC.</h1>
                    <p>Assurance Mezzanine Fund (“Assurance”) is pleased to announce its latest
                      investment in The E3 Company, LLC (“E3” or the “Company”). Assurance provided 
                      mezzanine financing to support BlueWater Equity Partners, LLC, in its 
                      acquisition of a controlling interest... </p>
                    <Link to="tebco" style={{ textDecoration: "none", color: "inherit"}}>
                        <Button variant="border-blue">
                                Read more
                        </Button>
                    </Link>
                    <div id="aml-news-divider" />
                </div>
                <div id="aml-news-module">
                    <h3>June 2019</h3>
                    <h1>Assurance Mezz Completes Investment in Webster Electric Co., Inc. and 
                        Webco Leasing & Supply, LLC</h1>
                    <p>Assurance Mezzanine Fund (“Assurance”) is pleased to announce its latest investment 
                       in Collinsville, MS-based Webster Electric Co., Inc., and Webco Leasing & Supply,
                       LLC (“Webster”).  Assurance partnered with Robert Manner’s private equity 
                       group...</p>
                    <Link to="webster" style={{ textDecoration: "none", color: "inherit"}}>
                        <Button variant="border-blue">
                                Read more
                        </Button>
                    </Link>
                    <div id="aml-news-divider" />
                </div>
                <div id="aml-news-module">
                    <h3>June 2019</h3>
                    <h1>Assurance Mezz Completes Investment in Millennium Grounds and Waters, LLC</h1>
                    <p>Assurance Mezzanine Fund (“Assurance”) is pleased to announce its latest investment 
                        in Winter Garden, FL-Based Millennium Grounds and Waters, LLC (“MGW”). Assurance 
                        provided debt financing for the acquisition of MGW...</p>
                    <Link to="millennium" style={{ textDecoration: "none", color: "inherit"}}>
                        <Button variant="border-blue">
                                Read more
                        </Button>
                    </Link>
                    <div id="aml-news-divider" />
                </div>
                <div id="aml-news-module">
                    <h3>May 2019</h3>
                    <h1>Assurance Mezz Completes Investment in L Tech Network Services, Inc.</h1>
                    <p>Assurance Mezzanine Fund (“Assurance”) Is pleased to announce its latest investment
                       in Santa Fe Springs, CA-based L Tech Network Services, Inc. (“L Tech”).  Assurance 
                       partnered with the sponsor (JK Holdings, LLC) in order to provide mezzanine financing 
                       for the acquisition of L Tech...</p>
                    <Link to="ltech" style={{ textDecoration: "none", color: "inherit"}}>
                        <Button variant="border-blue">
                                Read more
                        </Button>
                    </Link>
                    <div id="aml-news-divider" />
                </div>
                <div id="aml-news-module">
                    <h3>June 2018</h3>
                    <h1>Assurance Mezz Completes Investment in Turtle Southeast, LLC</h1>
                    <p>Assurance Mezzanine Fund (“Assurance”) is pleased to announce its latest investment 
                       in Largo, FL-based Turtle Southeast, LLC (“Turtle”). Assurance partnered with Canopy 
                       Capital Partners, which led a majority recapitalization of Turtle in mid-June 2018...</p>
                    <Link to="turtle" style={{ textDecoration: "none", color: "inherit"}}>
                        <Button variant="border-blue">
                                Read more
                        </Button>
                    </Link>
                    <div id="aml-news-divider" />
                </div>
                <div id="aml-news-module">
                    <h3>June 2018</h3>
                    <h1>Assurance Mezz Completes Investment in Entia, LLC</h1>
                    <p>Assurance Mezzanine Fund (“Assurance”) is pleased to announce its latest investment 
                       in Entia, LLC (“Entia” or the "Company"), which closed in early June 2018. Based in
                       Lake Mary, Florida, the Company actively manages a closely held portfolio of businesses 
                       spanning multiple sectors, including sensors...</p>
                    <Link to="entia" style={{ textDecoration: "none", color: "inherit"}}>
                        <Button variant="border-blue">
                                Read more
                        </Button>
                    </Link>
                    <div id="aml-news-divider" />
                </div>
                <div id="aml-news-module">
                    <h3>May 2018</h3>
                    <h1>Assurance Mezz Completes Investment in Apogee Healthcare Holdings, LLC</h1>
                    <p>Assurance Mezzanine Fund (“Assurance”) is pleased to announce its latest investment 
                       in Apogee Healthcare Holdings LLC (the "Company"), which closed in May 2018. The 
                       Company includes two healthcare staffing businesses: Critical Health Connection, LLC 
                       (“Critical Health”) and Quincy MD, LLC...</p>
                    <Link to="apogee" style={{ textDecoration: "none", color: "inherit"}}>
                        <Button variant="border-blue">
                                Read more
                        </Button>
                    </Link>
                    <div id="aml-news-divider" />
                </div>
                <div id="aml-news-module">
                    <h3>Feb 2018</h3>
                    <h1>Assurance Mezz Completes Investment in Old Mill Brick, LLC</h1>
                    <p>Assurance Mezzanine Fund (“Assurance”) is pleased to announce its latest investment 
                       in Old Mill Brick, LLC. (“OMB”), which closed in February 2018. Assurance partnered 
                       with Bridger Capital Partners who sponsored the transaction. Bridger Capital Partners 
                       is a middle market private equity firm...</p>
                    <Link to="oldmill" style={{ textDecoration: "none", color: "inherit"}}>
                        <Button variant="border-blue">
                                Read more
                        </Button>
                    </Link>
                    <div id="aml-news-divider" />
                </div>
                <div id="aml-news-module">
                    <h3>Dec 2017</h3>
                    <h1>Assurance Mezz Completes Investment in Purpose First Group, LLC</h1>
                    <p>Assurance Mezzanine Fund (“Assurance”) is pleased to announce its first investment in
                       Purpose First Group, LLC ("PFG"), which closed in December 2017. PFG provides mill-work, 
                       cabinets, windows and countertops to multi-family, single-family and commercial markets 
                       within the states of Texas and Florida...</p>
                    <Link to="purpose" style={{ textDecoration: "none", color: "inherit"}}>
                        <Button variant="border-blue">
                                Read more
                        </Button>
                    </Link>
                    <div id="aml-news-divider" />
                </div>
            </div>
        </div>
    )
}