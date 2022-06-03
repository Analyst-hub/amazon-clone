import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            exact path="/" 
            element={<h1> Home Page Fuckers </h1>}
          />
          <Route
            path="/login"
            element={<h1>Login Page</h1>}
          />
          <Route 
            path='/checkout'
            element={<h1>Get the fuck out dude</h1>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
