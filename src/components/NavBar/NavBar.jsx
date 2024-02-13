import './NavBar.scss'

import { useLocation } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faCode, faFolder, faRoute, faMoneyBill, faEnvelope} from '@fortawesome/free-solid-svg-icons';

library.add( faHouse, faUser, faCode, faFolder, faRoute, faMoneyBill, faEnvelope )

function NavBar() {

    let pathName = useLocation();

    if (pathName.pathname === '/') {
        return (
                <div className="nav">
                    <div className="navbar">
                        <div className="navbar__element">
                            <p className="navbar__element--name">Accueil</p>
                            <a href="#home" alt="home link">
                                <FontAwesomeIcon icon={faHouse} />
                            </a>
                        </div>
                        <div className="navbar__element">
                            <p className="navbar__element--name">Présentation</p>
                            <a href="#presentation" alt="presentation link">
                                <FontAwesomeIcon icon={faUser}/>
                            </a>
                        </div>
                        <div className="navbar__element">
                            <p className="navbar__element--name">Compétences</p>
                            <a href="#skills" alt="skills link">
                                <FontAwesomeIcon icon={faCode}/>
                            </a>
                        </div>
                        <div className="navbar__element">
                            <p className="navbar__element--name">Portfolio</p>
                            <a href="#portfolio" alt="portfolio link">
                                <FontAwesomeIcon icon={faFolder}/>
                            </a>
                        </div>
                        <div className="navbar__element">
                            <p className="navbar__element--name">Guide de conception</p>
                            <a href="#guide" alt="guide link">
                                <FontAwesomeIcon icon={faRoute}/>
                            </a>
                        </div>
                        <div className="navbar__element">
                            <p className="navbar__element--name">Forfaits</p>
                            <a href="#packages" alt="packages link">
                                <FontAwesomeIcon icon={faMoneyBill} />
                            </a>
                        </div>
                        <div className="navbar__element"> 
                            <p className="navbar__element--name">Contact</p>
                            <a href="#contact" alt="contact link">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                        </div>
                    </div>
                    
                    <div className="navbarTiny">
                        <div className="navbarTiny__element">
                            <p className="navbarTiny__element--name">Accueil</p>
                            <a href="#home" alt="home link">
                                <FontAwesomeIcon icon={faHouse} />
                            </a>
                        </div>
                        <div className="navbarTiny__element">
                            <p className="navbarTiny__element--name">Présentation</p>
                            <a href="#presentation" alt="presentation link">
                                <FontAwesomeIcon icon={faUser}/>
                            </a>
                        </div>
                        <div className="navbarTiny__element">
                            <p className="navbarTiny__element--name">Compétences</p>
                            <a href="#skills" alt="skills link">
                                <FontAwesomeIcon icon={faCode}/>
                            </a>
                        </div>
                        <div className="navbarTiny__element">
                            <p className="navbarTiny__element--name">Portfolio</p>
                            <a href="#portfolio" alt="portfolio link">
                                <FontAwesomeIcon icon={faFolder}/>
                            </a>
                        </div>
                        <div className="navbarTiny__element">
                            <p className="navbarTiny__element--name">Conception</p>
                            <a href="#guide" alt="guide link">
                                <FontAwesomeIcon icon={faRoute}/>
                            </a>
                        </div>
                        <div className="navbarTiny__element">
                            <p className="navbarTiny__element--name">Forfaits</p>
                            <a href="#packages" alt="packages link">
                                <FontAwesomeIcon icon={faMoneyBill}/>
                            </a>
                        </div>
                        <div className="navbarTiny__element"> 
                            <p className="navbarTiny__element--name">Contact</p>
                            <a href="#contact" alt="contact link">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                        </div>
                    </div>
                </div>
            )
    } else if(pathName.pathname === '/projets') {
    }
}

export default NavBar