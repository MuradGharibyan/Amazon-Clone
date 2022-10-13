
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AmazonClone from './pages/AmazonClone';
import Cart from './pages/Cart'
import Login from './pages/Login';
import Signup from './pages/Signup';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AmazonClone/>} />
          <Route path='/amazon_clone' element={<AmazonClone/>} />
          <Route path='/checkout' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
