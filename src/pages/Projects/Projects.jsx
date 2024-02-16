import BigWave from "../../components/BigWave/BigWave"
import { works } from "../../assets/datas/works"
import { Link } from "react-router-dom"
import PortfolioList from "../../components/PortfolioList/PortfolioList"
import './Projects.scss'

function Projects() {
    return (
        <div className="projects">
            <BigWave />

            <div className="portfolio">
                <div className="portfolio__content">
                    <h2 className="portfolio__content--title">   <span>réalisations<br/></span>Portfolio</h2>
                    <Link to='/' onClick={() => {window.scroll(0, 0);}} id="returnHome"><span>Retour accueil</span></Link>
                    <div className="portfolio__content--ctn">
                        {works.map((work) => {
                            return (
                                <PortfolioList item={work} key={work.id} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects