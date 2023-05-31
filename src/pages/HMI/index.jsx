import Header from '../../component/header'
import './style.css'
import RCT from '../../assets/Gambar Ilustrasi Mesin.png';

const HMI = () => {
    return (
        <>
        <Header />
        <div className='gambar'>
            <img src= {RCT} alt="" />
        </div> 
        </>
    )
}

export default HMI;