import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Home />
        <Footer />
      </div>
    </Router>
  );
};
export default App;
