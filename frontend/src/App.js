import logo from './logo.svg';
import './App.css';
import SignUp from './components/screens/authentication/SignUp';
import Login from './components/screens/authentication/Login';
import ForgetPassword from './components/screens/authentication/ForgetPassword';
import Recovery from './components/screens/authentication/Recovery';
import OTP from './components/screens/authentication/OTP';
import HomePage from './components/screens/HomePage';
import ProductPage from './components/screens/productPage/ProductPage';
import CartPage from './components/screens/productPage/CartPage';
import ProductPageOverview from './components/screens/productPage/ProductPageOverview';
import UserAccount from './components/screens/userPage/UserAccount';
import UserOrder from './components/screens/userPage/UserOrder';
import UserOrderdetails from './components/screens/userPage/UserOrderdetails';
import UserSavedItems from './components/screens/userPage/UserSavedItems';
import UserAddressBook from './components/screens/userPage/UserAddressBook';
import {HashRouter as Router, Routes, Route, HashRouter} from 'react-router-dom'



function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
        </Routes>

        <Routes>
          <Route exact path='/signup' element={<SignUp /> } />
        </Routes>

        <Routes>
          <Route exact path='/login' element={<Login/> } />
        </Routes>

        <Routes>
          <Route exact path='/forgetpassword' element={<ForgetPassword /> }></Route>
        </Routes>

        <Routes>
          <Route exact path='/recovery' element={<Recovery /> }></Route>
        </Routes>

        <Routes>
          <Route exact path='/otp' element={<OTP /> }></Route>
        </Routes>

        <Routes>
          <Route exact path='/store/:id' element={<ProductPage /> }></Route>
        </Routes>

        <Routes>
          <Route exact path='/cart' element={<CartPage /> }></Route>
        </Routes>

        <Routes>
          <Route exact path='/product/:id' element={<ProductPageOverview /> }></Route>
        </Routes>

        <Routes>
          <Route exact path='/user/account' element={<UserAccount /> }></Route>
        </Routes>

        <Routes>
          <Route exact path='/user/order' element={<UserOrder /> }></Route>
        </Routes>

        <Routes>
          <Route exact path='/user/order/details' element={<UserOrderdetails /> }></Route>
        </Routes>

        <Routes>
          <Route exact path='/user/saveditems' element={<UserSavedItems /> }></Route>
        </Routes>

        <Routes>
          <Route exact path='/user/addressbook' element={<UserAddressBook /> }></Route>
        </Routes>

      </HashRouter>
      

    </>
  );
}

export default App;
