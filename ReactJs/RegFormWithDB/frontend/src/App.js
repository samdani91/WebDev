import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegForm from './Components/RegForm';
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route exact path="/" element={<RegForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
