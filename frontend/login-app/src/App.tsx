import React from 'react';
import { Navbar } from './Components/Navbar';
import { SignForm } from './Components/SignForm';

function App() {
  return (
    <>
    <Navbar />
    <img src="https://images.pexels.com/photos/302871/pexels-photo-302871.jpeg?" className='background-picture'/>
    <div className='container'>
      
      <SignForm />

    </div>
    </>
  );
}

export default App;
