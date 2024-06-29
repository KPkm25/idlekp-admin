import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import SignIn from './components/Auth/SignIn';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Stats from './components/Dashboard/Stats';
import Comments from './components/Dashboard/Comments';
import Media from './components/Dashboard/Media';
import Posts from './components/Dashboard/Posts';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'; // Import the PrivateRoute component
import './styles/global.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="dashboard">
          <Header />
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/dashboard/stats" element={<PrivateRoute><Stats /></PrivateRoute>} />
              <Route path="/dashboard/comments" element={<PrivateRoute><Comments /></PrivateRoute>} />
              <Route path="/dashboard/media" element={<PrivateRoute><Media /></PrivateRoute>} />
              <Route path="/dashboard/posts" element={<PrivateRoute><Posts /></PrivateRoute>} />
              <Route path="/" element={<Navigate to="/signin" />} />
              <Route path="/dashboard" element={<Navigate to="/dashboard/stats" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
