import React, { lazy, Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';

import { UserProvider } from './context/userContext/user.context';
import CartProvider from './context/cartContext/cart.context';

import ErrorBoundary from './components/errorBoundary/errorBoundary.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.components';

const Homepage = lazy(() => import('./pages/homepage/homepage.page'));
const SignInPage = lazy(() => import('./pages/signIn-page/signin-page'));
const RegisterPage = lazy(() => import('./pages/register-page/register-page'));
const ProfilePage = lazy(() => import('./pages/profilepage/profile-page'));
const CartPage = lazy(() => import('./pages/cartpage/cart.page'));
const CheckoutPage = lazy(() => import('./pages/checkoutpage/checkout.page'));
const ContactPage = lazy(() => import('./pages/contactpage/contact.page'));
const AdminPage = lazy(() => import('./pages/adminpage/admin.page'));
const QuienesPage = lazy(() => import('./pages/quienes/quienes.page'));

function App() {

  const path = useLocation().pathname;
  const location = path.split("/")[1];

  // console.log(JSON.parse(localStorage.getItem('accessToken')));
  // console.log(JSON.parse(localStorage.getItem('localCart')));


  return (
    <UserProvider>
      <CartProvider>
        <div className={"app " + location}>
              <Header />
                <Switch>
                  <ErrorBoundary>
                  <Suspense fallback={<div className="loading">...Cargando</div>}>
                    <Route exact path="/" component={Homepage}/>            
                    <Route exact path='/admin' component={AdminPage} />
                    <Route exact path="/signin" component={SignInPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/profile" component={ProfilePage} />
                    <Route exact path="/cart" component={CartPage} />
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/quienes" component={QuienesPage} />
                  </Suspense>
                  </ErrorBoundary>
              </Switch>      
          <Footer />
        </div> 
      </CartProvider>
    </UserProvider>
 
  );
}

export default App;
