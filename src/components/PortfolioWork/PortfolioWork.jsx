import './PortfolioWork.scss'
import IsWebsiteOnline from './IsWebsiteOnline.jsx/IsWebsiteOnline';

function PortfolioWork(work) {
    let workItem = { ...work.item }

    // Create a function to render HTML content safely
    const renderHTML = (html) => ({ __html: html });

    return (
        <div className="presentation__content--portfolioWork">
            <div className="presentation__content--portfolioWorkImg" id={workItem.id}>
                <img src={workItem.image} alt={workItem.id + " website"} />
            </div>
            <div className="presentation__content--portfolioWorkText">
                <h2>{workItem.name}<br/><span>{workItem.date}</span></h2>
                <p dangerouslySetInnerHTML={renderHTML(workItem.description)} />
                <IsWebsiteOnline value={workItem}/>
            </div>
        </div>
    )
}

export default PortfolioWork