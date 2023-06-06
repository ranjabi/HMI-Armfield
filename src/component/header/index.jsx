import Main from "../../assets/mainlogo.svg";
import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");
    console.log(token);
    // const authorization = Authorization: "Bearer " + token ;
    try {
      await axios.post("http://localhost/armfield/public/api/logout", null, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token, //Add this line
        },
      });
      localStorage.removeItem("access_token");
      localStorage.removeItem("id");
      localStorage.removeItem("name");
      localStorage.removeItem("role");
      localStorage.removeItem("email");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="head">
        <div className="container">
          <a href="/">
            <img src={Main} />
          </a>
          <div className="nav">
            <div
              className={navOpen ? "hamBox hamboxOpen" : "hamBox"}
              onClick={() => setNavOpen(!navOpen)}
            >
              <span
                class={navOpen ? "line line1 line1spin" : "line line1"}
              ></span>
              <span
                class={navOpen ? "line line2 line2spin" : "line line2"}
              ></span>
              <span
                class={navOpen ? "line line3 line3spin" : "line line3"}
              ></span>
            </div>
            <ul className="bigScreen">
              <li>
                <a href="/">Dashboard</a>
              </li>
              <li>
                <a href="#/hmi">HMI</a>
              </li>
              <li>
                <a href="#/database">Database</a>
              </li>
              <li>
                <a href="#/profile">Profile</a>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
          <div
            className="navOverlay"
            style={{
              top: navOpen ? "0" : "-100%",
              transitionDelay: navOpen ? "0s" : "0s",
            }}
          >
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="#/hmi">HMI</a>
            </li>
            <li>
              <a href="#/database">Database</a>
            </li>
            <li>
              <a href="#/profile">Profile</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </div>
        </div>
      </div>

      <script></script>
    </>
  );
};

export default Header;
