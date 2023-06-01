import Header from '../../component/header'
import './style.css'
import IM from '../../assets/Gambar Ilustrasi Mesin (No BG).png';

const HMI = () => {
    return (
        <>
        <Header />
        <div className='ilustrasi'>
            <img src= {IM} alt="Gambar Ilustrasi Mesin" />
            <div className='T1'>
                <label htmlFor="a">T1</label>
                <input type="number" id='a' name='a' placeholder='T1'/>
            </div>
            <div className='T3'>
                <label htmlFor="b">T3</label>
                <input type="number" id='b' name='b' placeholder='T3'/>
            </div>
        </div> 

        </>
    )
}

export default HMI;