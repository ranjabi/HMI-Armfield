import Header from '../../component/header'
import './style.css'
import blank from '../../assets/blank_pic.png'

const Profile = () => {
    return (
        <>
            <Header />
            <div className='profile'>
                <div className='prof-box'>
                    <div className='prof-img'>
                        <img src={blank} alt="" />
                    </div>
                    <div className='flex-username'>
                        <div className='flex'>
                            <h6>Username</h6>
                            <p>akmalkomeng</p>
                        </div>
                        <div className='flex'>
                            <h6>Email</h6>
                            <p>blablabla@gmail.com</p>
                        </div>
                    </div>    
                    <button type="submit" className="btn-edit">Edit Profile</button>
                </div>
            </div>
        </>
    )
}

export default Profile;