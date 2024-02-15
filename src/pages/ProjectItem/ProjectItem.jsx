import { Link } from "react-router-dom"
import BigWave from "../../components/BigWave/BigWave"
import ImgRoller from "../../components/ImgRoller/ImgRoller";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5, faCss3, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faPalette, faArrowUpWideShort, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

import './ProjectItem.scss'

library.add( faHtml5, faCss3, faJs, faReact, faSass, faPalette, faArrowUpWideShort, faPeopleGroup )

function ProjectItem(item) {
    let projet = { ...item }

    return (
        <div className="projet">
            <BigWave />
            <div className="projet__ctn">
                <div className="projet__ctn--content--title">
                    <span>{projet.category}</span>
                    <h2>{projet.name}</h2>
                </div>
                <ImgRoller info={projet}/>
                <div className="projet__ctn--content">
                    <div className="projet__ctn--content--interDiv"></div>

                    <div className="projet__ctn--content--skills">
                        <h3>Compétences nécéssitées :</h3>
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
                        <p>{projet.fullDescription}</p>
                    </div>
                    <Link to="/projets" onClick={() => {window.scroll(0, 250);}}>Retour aux projets</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem