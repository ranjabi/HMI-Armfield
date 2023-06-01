import Header from '../../component/header'
import './style.css'
import IM from '../../assets/HMI.svg';

const HMI = () => {
    return (
        <>
        <Header />
        <div className='ilustrasi'>
            <img src= {IM} alt="Gambar Ilustrasi Mesin" />
            <div className='T1'>
                <span className='spanT1'>S -P</span>
                <input type="number" id='a' name='a' placeholder=''/>
                <span> °C</span>
            </div>
            <div className='T3'>
                <span className='spanT3'>S -P</span>
                <input type="number" id='b' name='b' placeholder=''/>
                <span> °C</span>
            </div>
        </div> 

        </>
    )
}

export default HMI;