import { Route, Routes } from 'react-router-dom';
import { Main, Post, } from './pages'
import { Navigation } from './components/ui'
import { Login, Register, Retrieval } from './components/ui/auth';



function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/retrieval' element={<Retrieval />} />
<<<<<<< HEAD
=======
        <Route path='/post' element={<Post />} />
>>>>>>> butt
      </Routes>
    </>
  );
}

export default App;
