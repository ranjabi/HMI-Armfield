import "./App.css";
import Profile from "./pages/profilePage";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import HMI from "./pages/HMI";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import Database from "./pages/database";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/hmi"
          element={
            <ProtectedRoute>
              <HMI />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/database"
          element={
            <ProtectedRoute>
              <Database />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </HashRouter>
    // <Database/>
  );
}

export default App;
