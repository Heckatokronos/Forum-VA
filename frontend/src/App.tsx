import React from 'react';
import Navigation from './Components/Navbar'
import Home from './Pages/Home';
import News from './Pages/News';
import Login from './Pages/Login';


const App: React.FC = () => {



  return (
    <div style={{ background: `black`, }}>
      <Navigation />
    </div>
  );
};

export default App;
