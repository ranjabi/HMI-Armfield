import "./style.css";
import BG from "../../assets/bglog.svg";
import { useRef, useState } from "react";
import { useEffect } from "react";
import AuthContext from "../../context/AuthProvider";
import { useContext } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Dashboard from "../dashboard";
import { useNavigate } from "react-router-dom";

const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth, auth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // });

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost/armfield/public/api/login",
        {
          name: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response?.data?.data?.acess_token);
      const access_token = response?.data?.data?.acess_token;
      const id = response?.data?.data?.user?.id;
      const name = response?.data?.data?.user?.name;
      const role = response?.data?.data?.user?.role;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      localStorage.setItem("role", role);
      setUsername("");
      setPassword("");
      setSuccess(true);
      navigate("/dashboard");
      console.log(AuthContext);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login">
        <img src={BG} />
        <div className="form">
          <div className="formteks">
            <h3>Login</h3>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  placeholder="Enter username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">PIN</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter PIN"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              <h4>Forgot Password? Call your supervisor</h4>
              <button type="submit" className="btn-login">
                {!loading ? "Login" : "Loading...."}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
