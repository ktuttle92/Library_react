import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import React, {useState,useEffect} from 'react'


const Cart=({cart,changeQuantity,})=>{
    const total=()=>{
        let price =0;
        cart.forEach((item)=>{
            price += +(
                ((item.salePrice||item.originalPrice) * item.quantity).toFixed(2))});
            return price}
        
  
    return(<>
     <Nav/>
     <div id="books__body">
        <main id="books__main">
             <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="cart__title">Cart</h2>
                    </div>
                    <div className="cart">
                        <div className="cart__header">
                            <span className="cart__book">Book</span>
                            <span className="cart__quantity">Quantity</span>
                            <span className="cart__total">Price</span>
                        </div>
                        <div className="cart__body">
                            {cart && cart.length > 0 ? (cart.map(book=>(
                            <div className="cart__item" key={book.id}>
                                <div className="cart__book">
                                    <img src={book.url} alt="" className="cart__book--img"/>
                                    <div className="cart__book--info">
                                        <span className="cart__book--title">{book.title}</span>
                                        <span className="cart__book--price">${(+book.salePrice||+book.originalPrice).toFixed(2)}</span>
                                        <button className="cart__book--remove">Remove</button>
                                    </div>
                                </div>
                                <div className="cart__quantity">
                                    <input 
                                    type="number" 
                                    min={0} 
                                    max={99} 
                                    className="cart__input" 
                                    onChange={(event)=>changeQuantity(book,event.target.value)} value={+book.quantity} key={book.id}></input>
                                </div>
                                <div className="cart__total">
                                ${(+(book.salePrice||book.originalPrice) * +book.quantity).toFixed(2)}
                                </div>
                            </div>
                            ))) : (<div>No items in the cart</div>)
                            }
                        </div>
                    </div>
                    <div className="total">
                        <div className="total__item total__sub-total">
                            <span>Subtotal</span>
                            <span>${(total() * .93).toFixed(2)}</span>
                        </div>
                        <div className="total__item total__tax">
                            <span>Tax</span>
                            <span>${(total() * .07).toFixed(2)}</span>
                        </div>
                        <div className="total__item total__price">
                            <span>Total</span>
                            <span>${total().toFixed(2)}</span>
                        </div>
                        <div className="btn btn__checkout no-cursor" 
                        onClick={()=>alert("Haven't gotten around to this yet")}>
                            Proceed to checkout
                        </div>
                    </div>
               </div>
              </div>
        </main>
     </div>
      
     <Footer/>
    </>)
}

export default Cart