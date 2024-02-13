import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './WaiterText.scss';

library.add( faInstagram, faLinkedin, faGithub)

function WaiterText() {
    return (
        <div className="waiter" id="home">
                    <div className="waiter__text">
                        <h1 className="waiter__text--logo">CwS</h1>
                        <div className="waiter__text--mainText">
                            <div className="roller">
                                <span id="rolltext">Sites web <br/>
                                    Portfolios<br/>
                                    Vitrines<br/>
                                    Commerces<br/>
                                </span>
                            </div>
                        </div>
                        <p className="waiter__text--descText">Développement Web<br/>Chesnel Web Studio</p>
                    </div>
                    
                    
                    <div className="waiter__social">
                        <p>Suivez moi sur mes réseaux :</p>
                        <div className="waiter__social--links">
                            <a className="waiter__social--linksA" href="https://www.instagram.com/chesnelwebstudio?igsh=bDBteng1N3NpZ240" target="_blank" rel='noreferrer' alt="instagram link">
                                <FontAwesomeIcon icon={faInstagram} size="2xl"/>
                            </a>
                            <a className="waiter__social--linksA" href="https://github.com/HugEau" target="_blank" rel='noreferrer' alt="github link">
                                <FontAwesomeIcon icon={faGithub} size="2xl"/>
                            </a>
                            <a className="waiter__social--linksA" href="https://www.linkedin.com/company/chesnel-web-studio" alt="linkedin link">
                                <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                            </a>
                        </div>
                    </div>
                </div>
    )
}

export default WaiterText