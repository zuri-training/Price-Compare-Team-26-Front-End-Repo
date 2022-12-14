import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navbar, Footer } from './components'
import {
  About,
  DiscountDeals,
  EmailPreference,
  Home,
  Trending,
  Profile,
  Login, ContactUs,
  Logout, ProtectedRoute, Products,
  SharedLayout, SignUp, ComingSoon,
  Categories, ComparePrice, CookiePolicy,  Error, Privacy, Rules, UserDoc
} from './pages/sharedPages'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<SharedLayout/>} >
          <Route index element={<Home/>} />
          <Route path='discount-deals' element={<DiscountDeals/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='trending' element={<Trending/>} />
          <Route path='login' element={<Login/>} />
          <Route path='logout' element={<Logout/>} />
          <Route path='email-preferences' element={<EmailPreference/>} />
          <Route path='about-us' element={<About/>} />
          <Route path='privacy-policy' element={<Privacy/>} />
          <Route path='cookie-policy' element={<CookiePolicy/>} />
          <Route path='rules-guidelines' element={<Rules/>} />
          <Route path='compare-price' element={ <ComparePrice/>} />
          <Route path='contact-us' element={ <ContactUs/>} />
          <Route path='coming-soon' element={ <ComingSoon/>} />
          <Route path='product-categories' element={<Categories/>} />
          
          <Route path='/products' element={<ProtectedRoute>
            <Products/>
          </ProtectedRoute>}/>

          <Route path='user-doc' element={<UserDoc/>} />       
          <Route path='sign-up' element={<SignUp/>} />       
          <Route path='*' element={<Error />} />
        </Route> 
      </Routes>
      <Footer/>
      <ToastContainer position='top-right'/>
    </Router>
  );
}

export default App;
