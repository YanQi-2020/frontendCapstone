import './App.css';
import Manu from './components/Manu/Manu.tsx';
import Home from './components/Home/Home.tsx';
import Layout from './components/Layout.tsx';
import HomeTableReservation from './components/Home/tableReservation/Home/tableReservation.tsx';
import Payment from './components/Home/Payment/payment.tsx';
import HomeCart from './components/Home/Cart/Home/Cart.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App123() {
  return (
    
    <div className="App">
      <Manu/>
      

      <Router>

<Routes>
<Route path="/" element={<Layout/>}>
  <Route path="tableReservation" element={<HomeTableReservation/>} />
  <Route path="payment" element={<Payment/>} />
  <Route path="cart" element={<HomeCart/>} />
</Route>
</Routes>



      {/* <Routes>
      <Route path="/tableReservation" component={HomeTableReservation} />
      </Routes> */}
        
         
        
    </Router>
     
    </div>
  );
}

export default App123;
