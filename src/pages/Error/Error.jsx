import { Link } from "react-router-dom"
import BigWave from "../../components/BigWave/BigWave"
import './Error.scss'

function Error() {
    return (
        <div className="error">
            <BigWave />
            <div className="error__content">
                <h2>404</h2>
                <h3>Erreur lors du chargement de la page</h3>
                <Link to="/">Retour sur la page d'accueil</Link>
            </div>
        </div>
    )
}

export default Error