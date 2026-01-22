import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from "./pages/Home"
import Layout from './pages/Layout';
import Books from "./pages/Books"
import {books} from './data'
import BookInfo from './pages/BookInfo'
import Cart from './pages/Cart'
import React, {useState, useEffect} from 'react'


function App() {
   const[cart,setCart]=useState([]);

   function addToCart(book){
    setCart([...cart,{...book,quantity:1}])}

   function changeQuantity(book,quantity){
    setCart(cart.map(item=>{
      return item.id === book.id ?
        {...item,quantity:+quantity,
          }
         : item
   }))}
  function removeBook(item){
    setCart(cart.filter(book=>book.id !== item.id))
  }
function numberOfItems(){
        let counter=0;
        cart.forEach((item)=>{
          counter += item.quantity;
        }); return counter
       }

    useEffect(()=>{
      console.log(cart)
    },[cart])

  return( 
    <Router>
      <Routes>
        <Route path="/" element={<Layout numberOfItems={numberOfItems} />}>
          <Route index element={<Home/>}/>
          <Route path="books" exact element={<Books books={books}/>}/>
          <Route path="books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart}/>}/>
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeBook={removeBook} />}/>
        </Route>
      </Routes>
    </Router>
     )
}

export default App;
