import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';


function App() {
  return (
    <div className='font-Roboto bg-slate-100'>
      <BrowserRouter>
          <Header/>
          <Routes>
          <Route path='/' element={<Home/>} />
        
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
