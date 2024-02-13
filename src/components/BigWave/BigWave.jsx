import Wave from '../../assets/images/waveBottom.png'
import './BigWave.scss'

function BigWave() {
    return (
        <div className="fade">
            <img className="fade__wave" src={ Wave } alt="wave transition" />
        </div>
    )
}

export default BigWave