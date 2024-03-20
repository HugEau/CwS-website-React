import './PortfolioList.scss'
import { Link } from 'react-router-dom';

function PortfolioWork(work) {
    let workItem = { ...work.item }

    return (
        <Link to={"/projets/" + workItem.id} onClick={() => {window.scroll(0, 250);}}>
            <div className="portfolio__content--ctn--item" id={workItem.id}>
                <div className="portfolio__content--ctn--itemImg">
                    <img src={workItem.image} alt={workItem.id + " website"} />
                </div>
                <div className="portfolio__content--ctn--itemText">
                    <h2>{workItem.name}</h2>
                    <p>{workItem.date}</p>
                </div>
            </div>
        </Link>
    )
}

export default PortfolioWork