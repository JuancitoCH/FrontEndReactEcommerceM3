import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';

function App() {
  return (
    <div className='font-Roboto bg-slate-100'>
      <BrowserRouter>
          <Header/>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/product/:idProduct' element={<Product/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
