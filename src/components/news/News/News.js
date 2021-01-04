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