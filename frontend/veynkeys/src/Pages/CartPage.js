import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity, } from '../Slices/cartSlice';

function CartPage() {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    dispatch(updateCartQuantity({ productId, newQuantity }));
  };

  // Sepetin toplam tutarını hesaplayın
  const calculateTotal = () => {
    return Object.values(cart.items).reduce((total, item) => total + item.price * item.quantity, 0);
  };


  return (
    <>
      {/*======================
    Shopping Cart area Start
    ==========================*/}
      <div className="cart-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form action="#" className="cart-form">
                {/* Cart Title Start */}
                <div className="cart-title">
                  <h5 className="last-title mt-50 mb-20">Shopping Cart</h5>
                </div>
                {/* Cart Title End */}
                {/* Cart Table Area Start */}
                <div className="table-desc">
                  <div className="cart-page table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-image">Image</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-total">Total</th>
                          <th className="product-remove">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(cart.items).map((key) => {
                          const item = cart.items[key];
                          return (
                            <tr key={item.id}>
                              <td className="product-image"><img src={item.image} alt={item.title} style={{width:150}} /></td>
                              <td className="product-name">{item.title}</td>
                              <td className="product-price">£{item.price}</td>
                              <td className="product-quantity">
                                <input
                                  type="number"
                                  defaultValue={item.quantity}
                                  onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                                />
                              </td>
                              <td className="product-total">£{item.price * item.quantity}</td>
                              <td className="product-remove">
                                <button onClick={() => handleRemoveFromCart(item.id)}>
                                  <i className="fa fa-trash-o" />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Cart Table Area End */}
                {/* Totals Area Start */}
                <div className="coupon-area">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="coupon-code right">
                        <h3>Cart Totals</h3>
                        <div className="coupon-inner">
                          <a href="#">Calculate Total</a>
                          <div className="cart-subtotal">
                            <p>Total</p>
                            <p className="cart-amount">£{calculateTotal()}</p>
                          </div>
                          <div className="checkout-btn">
                            <a href="#">Proceed to Checkout</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Totals Area End */}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*======================
    Shopping Cart area End
    ==========================*/}

    </>
  )
}

export default CartPage