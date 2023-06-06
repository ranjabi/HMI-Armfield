import Header from "../../component/header";
import "./style.css"

const HMI = () => {
    return (
        <>
            <Header/>
            <div className="hami">
                <div className="kotak">
                    <div className="kotak1">

                    </div>
                    <div className="kotak2">
                        
                    </div>
                </div>
                <div className="gambar">
                    <input type="number" id = "SP1" className="SP1" />
                    <span>T1</span>
                    <p>0</p>
                </div>
            </div>
        </>
    )
}

export default HMI;