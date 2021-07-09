import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';

import UserProvider from './context/userContext/user.context';
import CartProvider from './context/cartContext/cart.context';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.page';
import Footer from './components/footer/footer.components';
import SignInPage from './pages/signIn-page/signin-page';
import RegisterPage from './pages/register-page/register-page';
import ProfilePage from './pages/profilepage/profile-page';
import CartPage from './pages/cartpage/cart.page';
import CheckoutPage from './pages/checkoutpage/checkout.page';



function App() {

  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <UserProvider>
      <CartProvider>
        <div className={"app " + location}>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>        
          <Footer />
        </div> 
      </CartProvider>
    </UserProvider>
 
  );
}

export default App;
