import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { styled } from '@linaria/react';
import NavbarShowcase from './Components/Navbar'

const App: React.FC = () => {
  return (
    <>
      <NavbarShowcase />
    </>
  );
};

export default App;

const Container = styled.div<{ color: string, }>`
  text-align: center;
  margin-top: 2rem;
  background-color: ${(props) => props.color};
`
