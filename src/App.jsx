import React from 'react'
import Home from './Components/Home'
import { BrowserRouter as Router,  Route, Routes, Link } from 'react-router-dom'
import ProductList from './Components/ProductList'
import AddProduct from './Components/AddProduct'
import UpdateProduct from './Components/UpdateProduct'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux'
import Store from './Redux/Store'

const App = () => {
  return (
   <Provider store={Store}>
       <div className='App'>
       <Router>
         <div className='header bg-dark p-4 d-flex gap-3'>
            <Link style={{textDecoration:"none" , color:"#fff"}} to={'/'}>Home</Link>
            <Link style={{textDecoration:"none" , color:"#fff"}} to={'/productlist'}>ProductList</Link>
            <Link style={{textDecoration:"none" , color:"#fff"}} to={'/addproduct'}>AddProduct</Link>
         </div>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/productlist' element={<ProductList/>}/>
           <Route path='/addproduct' element={<AddProduct/>}/>
           <Route path='/edit/:code' element={<UpdateProduct/>}/>
        </Routes>
     </Router>
     <ToastContainer className="toast-position" position='bottom-center'></ToastContainer>
   </div>
   </Provider>
   
  )
  
}

export default App