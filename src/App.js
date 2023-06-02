import logo from './logo.svg';
import './App.css';
import Profile from './pages/profilePage';
import Login from './pages/login'
import Database from './pages/database'
import Dashboard from './pages/dashboard';
import HMI from './pages/HMI'
import {HashRouter, Routes, Navigate, Route} from "react-router-dom";

function App() {
  return (
    // <HashRouter>
    //   <Routes>
    //     {/* <Route exact path="/" element={<Login/>}/> */}
    //     <Route exact path="/" element={<Dashboard/>}/>
    //     <Route exact path = "/hmi" element = {<HMI/>}/>
    //     <Route exact path ="/database" element={<Database/>}/>
    //     <Route exact path = "/profile" element={<Profile/>}/>
    //   </Routes>
    // </HashRouter>
    <Login/>  
  );
}

export default App;
