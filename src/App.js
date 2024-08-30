import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import { allroutes } from './routes/route.jsx';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        {allroutes()}
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
