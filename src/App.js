import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyBooks from './pages/MyBooks';
import BookExchange from './pages/BookExchange';
import Navbar from './Navbar';
import { Login } from './components/auth/login/login';
import Register from './components/auth/signup/signup';
import { useAuth } from './contexts/authContexts/index'; 

const App = () => {
  const { userLoggedIn } = useAuth(); 
  
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/bookexchange" element={<BookExchange /> } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
