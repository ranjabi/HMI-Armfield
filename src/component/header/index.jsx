import Main from '../../assets/mainlogo.svg'
import './style.css'
import { useState } from 'react'
const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <div className="head">
                <div className="container">    
                    <a href = "/">
                        <img src={Main}/>
                    </a>
                    <div className="nav">
                        <div className={navOpen ? "hamBox hamboxOpen" : "hamBox"} onClick={() => setNavOpen(!navOpen)}>
                            <span class={navOpen ? "line line1 line1spin" : "line line1"}></span>
                            <span class={navOpen ? "line line2 line2spin" : "line line2"}></span>
                            <span class={navOpen ? "line line3 line3spin" : "line line3"}></span>
                        </div>
                        <ul className='bigScreen'>
                            <li><a href = "/">Dashboard</a></li>
                            <li><a href = "#/hmi">HMI</a></li>
                            <li><a href = "#/database">Database</a></li>
                            <li><a href = "#/profile">Profile</a></li>
                            <li><a href = "/">Logout</a></li>
                        </ul>
                    </div>
                    <div className='navOverlay' style={{
                        top: navOpen ? "0" : "-100%",
                        transitionDelay: navOpen ? "0s" : "0s",
                    }}>
                        <li><a href = "/">Dashboard</a></li>
                        <li><a href = "#/hmi">HMI</a></li>
                        <li><a href = "#/database">Database</a></li>
                        <li><a href = "#/profile">Profile</a></li>
                        <li><a href = "/">Logout</a></li>
                    </div>
                </div>
            </div>  

            <script>
            </script>
        </>
    )
}

export default Header;