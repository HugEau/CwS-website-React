import { useLocation } from "react-router-dom";
import './Header.scss'
import TopWaves from '../TopWaves/TopWaves.jsx'
import WaiterText from "./WaiterText/WaiterText.jsx";
import HeaderText from "./HeaderText/HeaderText.jsx";

function Header() {
    let pathName = useLocation();
    console.log(pathName)
    function isPathNameHome() {
        if (pathName.pathname === '/') {
            return (
                <WaiterText />
            )
        } else if(pathName.pathname === '/projets') {
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