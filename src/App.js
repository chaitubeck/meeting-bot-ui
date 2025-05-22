import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import UploadPage from "./UploadPage";
import SearchPage from "./SearchPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>🌿 Meeting Insight</h1>
          <nav>
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
              Search
            </NavLink>
            <NavLink to="/upload" className={({ isActive }) => isActive ? "active" : ""}>
              Admin Upload
            </NavLink>
          </nav>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/upload" element={<UploadPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
