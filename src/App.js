import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { CartProvider } from './components/ContextReducer';
import Cart from './screens/Cart';
function App() {
  return (
    
      <CartProvider>
        <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/CreateUser' element={<Signup/>}/>
        </Routes>
      </Router>  
      </CartProvider>
  );
}
export default App;