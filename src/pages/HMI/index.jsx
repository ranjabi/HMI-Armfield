import Header from "../../component/header";
import "./style.css"
import HW from "../../assets/Heater Water.jpg"
const HMI = () => {
    return (
        <>
            <Header/>
            <div className="hami">
                <div className="kotak">
                    <div className="kotak1">
                        <p>Sample Data</p>
                        <div className="time_sampling">
                            <span className="spanTS">Time Sampling</span>
                            <p> 2</p>
                        </div>
                        <div className="current_time">
                            <span className="spanCT">Current Time</span>
                            <p> 14:05:07</p>
                        </div>
                    </div>
                    <div className="kotak2">
                        <p>Water Heater</p>
                        <img src={HW} alt="" />
                        <div className="actual_output">
                            <span className="spanAO">Actual Output</span>
                            <p> 0.00 kW</p>
                        </div>
                        <div className="heater_output">
                            <span className="spanHO">Heater Output</span>
                            <p> 0</p>
                        </div>
                    </div>
                </div>
                <div className="gambar">
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
                        <span className="spanT2">- T2</span>
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
                </div>
            </div>
        </>
    )
}

export default HMI;