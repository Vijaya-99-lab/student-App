import logo from './logo.svg';
import react from 'react';
import Child1 from './Child1';
import AppStyles from './App.css'
import {useState} from 'react'
import styles from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import Orders from './Orders';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import ErrorPage from './ErrorPage';


function App() {

 
  return (
  
  <div>
    <BrowserRouter>  
    <Routes>
     <Route path = "/" element = {<Home/>} >  </Route>
     <Route path = "/about" element = {<About/>} >  </Route>
     <Route path = "/contact" element = {<Contact/>} >  </Route>
     <Route path = "/orders" element = {<Orders/>} > </Route>
      <Route path="*" element={<ErrorPage/>} />  
                          {/* for Error page, by using Link, we need not mention this, direclty we can give */} 
    </Routes>
    </BrowserRouter>

    </div>
  )  
}

export default App;
