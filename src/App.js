import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import PayCorrect from './pages/PayCorrect';
import Product from './pages/Product';
import ProductsSearchPage from './pages/ProductsSearchPage';
import Register from './pages/Register';

function App() {
  return (
    <div className='font-Roboto bg-slate-100'>
      <BrowserRouter>
          <Header/>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/pay/correct' element={<PayCorrect/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/product/:idProduct' element={<Product/>}/>
          <Route path='/search' element={<ProductsSearchPage/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
