import { useLocation } from "react-router-dom";
import './Header.scss'
import TopWaves from '../TopWaves/TopWaves.jsx'
import WaiterText from "./WaiterText/WaiterText.jsx";
import HeaderText from "./HeaderText/HeaderText.jsx";

function Header() {
    let pathName = useLocation();
    function isPathNameHome() {
        if (pathName.pathname === '/') {
            return (
                <WaiterText />
            )
        } else {
            return (
                <HeaderText />
            )
        }
    }
    return (
        <div className="header">
            
            <TopWaves />
            
            { isPathNameHome() }
        </div>
    )
}

export default Header