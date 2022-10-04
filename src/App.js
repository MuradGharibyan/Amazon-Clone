
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AmazonClone from './pages/AmazonClone';
import Cart from './pages/Cart'
import Login from './pages/Login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AmazonClone/>} />
          <Route path='/amazon_clone' element={<AmazonClone/>} />
          <Route path='/checkout' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
