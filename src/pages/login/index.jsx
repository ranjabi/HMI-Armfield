import './style.css'
import BG from '../../assets/bglog.svg';

const Login = () =>{
    return (
        <>
        <div className="login">
            <img src = {BG}/>
            <div className="form">
                <div className="formteks">
                    <h3>Login</h3>
                    <form className="login-form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" placeholder ="Enter username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">PIN</label>
                            <input type="password" id="password" name="password" placeholder ="Enter PIN" required />
                        </div>
                        <h4>Forgot Password? Call your supervisor</h4>
                        <button type="submit" className="btn-login">Login</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;