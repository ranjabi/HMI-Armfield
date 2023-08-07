import Header from "../../component/header";
import "./style.css"
import HW from "../../assets/Heater Water.jpg"
import Filled from "../../assets/tangki/filled water 2px.png"
import { useEffect, useState } from "react";
import MesinKondisi1 from "../../assets/mesin-kondisi-1.svg"
import MesinKondisi2 from "../../assets/mesin-kondisi-2.svg"

const HMI = () => {
    const [L1, setL1] = useState(0);
    const [T1, setT1] = useState(1);
    const [SP, setSP] = useState(-1);
    
    function getConversion(l1) {
        return (l1 / 250) * 100;
    }
    
    useEffect(() => {
        const l1Interval = setInterval(() => {
            setL1((prev) => (prev + 1) % 250);
        }, 10);
        return () => clearInterval(l1Interval);
    }, [])

    useEffect(() => {
        const T1SPInterval = setInterval(() => {
            setT1((prev) => prev * -1);
            setSP((prev) => prev * -1);
        }, 1000);
        return () => clearInterval(T1SPInterval);
    }, [])

    let imageSource;
    if (T1 < SP) {
        imageSource = MesinKondisi1;
    } else if (T1 > SP) {
        imageSource = MesinKondisi2;
    }

    const style = {
        height: '70%',
        width: '40%',
        marginTop: '100px',
        zIndex: '1',
        position: 'relative',
        backgroundImage: `url(${imageSource})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <>
            <Header/>
            <div className="hami">
                <div className="kotak">
                   <fieldset>
                        <legend>Sample Data</legend>
                        <div className="time_sampling">
                            <span className="spanTS">Time Sampling</span>
                            <p> 2</p>
                        </div>
                        <div className="current_time">
                            <span className="spanCT">Current Time</span>
                            <p> 14:05:07</p>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Water Heater</legend>
                        <img src={HW} alt="" />
                        <div className="actual_output">
                            <span className="spanAO">Actual Output</span>
                            <p> 0.00 kW</p>
                        </div>
                        <div className="heater_output">
                            <span className="spanHO">Heater Output</span>
                            <p> 0</p>
                        </div>
                    </fieldset>
                </div>
                <div style={style}>
                    <div className="SP1">
                        <span className="spanSP1">S-P</span>
                        <input type="number" id = "SP1" />
                    </div>
                    <div className="SP2">
                        <span className="spanSP2">S-P</span>
                        <input type="number" id = "SP2" />
                    </div>
                    <div className="SP3">
                        <span className="spanSP3">S-P</span>
                        <input type="number" id = "SP3" />
                    </div>
                    <div className="T1">
                        <span className="spanT1">T1</span>
                        <p> 0.00°C</p>
                    </div>
                    <div className="T2">
                        <span className="spanT2"> T2</span>
                        <p> 0.00°C</p>
                    </div>
                    <div className="T3">
                        <span className="spanT3">T3</span>
                        <p> 0.00°C</p>
                    </div>
                    <div className="T4">
                        <span className="spanT4">T4</span>
                        <p> 0.00°C</p>
                    </div>
                    <div className="N1">
                        <span className="spanN1">N1</span>
                        <p> 0</p>
                    </div>
                    <div className="F1">
                        <span className="spanF1">F1</span>
                        <p> 0 ml/m</p>
                    </div>
                    <div className="L1">
                        <span className="spanL1">L1</span>
                        <p> 0 mm</p>
                    </div>
                    <div className="C1">
                        <span className="spanC1">C1</span>
                        <p> 0.0 mS</p>
                    </div>
                    <div className="filled-container">
                        <img 
                            src={Filled} 
                            alt="filled water" 
                            className="filled-water" 
                            style={{height: `${getConversion(L1)}%`}} 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HMI;