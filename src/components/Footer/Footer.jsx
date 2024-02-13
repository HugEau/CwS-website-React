import './Footer.scss'
import WaveTop from '../../assets/images/waveTop.png'
import FooterLegals from './FooterLegals/FooterLegals'

function Footer() {
    function legalsOpen() {
        let legalPage = document.getElementById("legalsDiv")
        if(legalPage) {
            legalPage.style.display = "flex"
        }
    }
    
    return (
        <div className="footer">
            <FooterLegals />
            <div className="footer__wave">
                <img className="footer__wave--img" src={WaveTop} alt="wave transition" />
            </div>
            <div className="footer__text">
                <h2>Site créé par Hugo Chesnel</h2>
                <div className="footer__text--nav">
                    <a href="/" alt="presentation link"><p>Accueil</p></a>
                    <a href="/projets" alt="portfolio link"><p>Portfolio</p></a>
                </div>
                <a href="mailto:chesnelwebstudio@gmail.com" alt="mailing hugo chesnel">chesnelwebstudio@gmail.com</a>
                <p>© www.chesnelwebstudio.fr - <button className="footer__text--btnLegals" id="legals" onClick={ legalsOpen }>Mentions Légales</button> - All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer