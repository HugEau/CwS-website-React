import Wave1 from '../../assets/images/vague1.png'
import Wave2 from '../../assets/images/vague2.png'
import Wave3 from '../../assets/images/vague4.png'
import './TopWaves.scss'

function TopWaves() {
    return (
        <div className="img">
            <img className="img__waveRoll--1" src={Wave1} alt="waveTopRight" loading="eager" />
            <img className="img__wave1" src={Wave2} alt="waveTopLeft1" loading="eager" />
            <img className="img__wave3" src={Wave3} alt="waveTopLeft2" loading="eager" />
        </div>
    )
}

export default TopWaves