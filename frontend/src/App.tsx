import React from 'react';
import { Navigation } from './Components/Navbar';
import { RegisterForm } from './Components/RegisterForm';


const App: React.FC = () => {



  return (
    <div>
      <Navigation />
      <RegisterForm />
    </div>
  );
};

export default App;
