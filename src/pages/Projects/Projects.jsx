import BigWave from "../../components/BigWave/BigWave"
import { works } from "../../assets/datas/works"
import PortfolioWork from "../../components/PortfolioWork/PortfolioWork"
import './Projects.scss'

function Projects() {
    return (
        <div className="projects">
            <BigWave />

            <div className="portfolio">
                <div className="portfolio__content">
                    <p className="portfolio__content--title">   <span>réalisations<br/></span>Portfolio</p>
                    {works.map((work) => {
                        return (
                            <PortfolioWork item={work} key={work.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects