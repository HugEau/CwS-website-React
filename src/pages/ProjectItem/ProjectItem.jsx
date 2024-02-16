import { Link } from "react-router-dom"
import BigWave from "../../components/BigWave/BigWave"
import ImgRoller from "../../components/ImgRoller/ImgRoller";
import IsWebsiteOnline from "../../components/PortfolioWork/IsWebsiteOnline.jsx/IsWebsiteOnline";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5, faCss3, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faPalette, faArrowUpWideShort, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

import './ProjectItem.scss'

library.add( faHtml5, faCss3, faJs, faReact, faSass, faPalette, faArrowUpWideShort, faPeopleGroup )

function ProjectItem(item) {
    let projet = { ...item }

    const renderHTML = (html) => ({ __html: html });

    return (
        <div className="projet">
            <BigWave />
            <div className="projet__ctn">
                <div className="projet__ctn--content--title">
                    <span>{projet.category}</span>
                    <h2>{projet.name}</h2>
                </div>
                <IsWebsiteOnline value={projet}/>
                <ImgRoller info={projet}/>
                <div className="projet__ctn--content">
                    <div className="projet__ctn--content--interDiv"></div>

                    <div className="projet__ctn--content--skills">
                        <h3>Compétences employées :</h3>
                        <div className="projet__ctn--content--skillsCtn">
                            {projet.code.map((skills, index) =>
                                <div className="projet__ctn--content--skillsCtnItem" key={index}> 
                                    {skills[0]}
                                    <p>{skills[1]}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="projet__ctn--content--interDiv"></div>

                    <div className="projet__ctn--content--description">
                        <h3>Description :</h3>
                        <div className="projet__ctn--content--descriptionP">
                            <p dangerouslySetInnerHTML={renderHTML(projet.fullDescription)}></p>
                            <p>Vous envisagez de faire, refaire ou optimiser un site pour votre entreprise ? <br/>CwS est la solution à toutes vos envies, prenez contact avec moi au plus vite via le <Link to="/#contact">formulaire de contact</Link>, par mail ou sur les réseaux.</p>
                        </div>
                    </div>
                    <Link to="/projets" onClick={() => {window.scroll(0, 250);}}>Retour aux projets</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem