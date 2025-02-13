import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar';
import Home from './pages/home';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Category from './pages/categoryPage';
import Login from './pages/loginPage';
import Signup from './pages/signUpPage';
import Post from './pages/postPage';
import Footer from './Components/footer';

function App() {
  return (
    <>
    {/* <Navbar></Navbar>
    <Home></Home> */}
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/:category' element={<Category />} />
    <Route path='/login' element={<Login></Login>}/>
    <Route path='/signUp' element={<Signup></Signup>}/>
    <Route path='/articles/:id' element={<Post></Post>}/>
  </Routes>
  <Footer></Footer>
</BrowserRouter>
    </> 
  );
}

export default App;
