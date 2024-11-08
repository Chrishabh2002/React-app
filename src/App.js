import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileForm from './components/ProfileForm';
import ProfileOutput from './components/ProfileOutput';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileForm />} />
        <Route path="/profile-output" element={<ProfileOutput />} />
      </Routes>
    </Router>
  );
}

export default App;
