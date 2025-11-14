import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementItem, decrementItem, removeItem } from "../redux/cartSlice";
import { Plus, Minus, Trash2 } from "lucide-react";
import Header from "./Header";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  return (
    <div className="shopping-cart">
      <Header />
      <div className="container">
        <h1 className="page-title">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button
              className="continue-shopping-btn"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <div className="summary-item">
                <span className="summary-label">Total Items:</span>
                <span className="summary-value">{totalQuantity}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Total Cost:</span>
                <span className="summary-value">${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">Unit Price: ${item.price}</p>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => handleDecrement(item.id)}
                        disabled={item.quantity === 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => handleIncrement(item.id)}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="item-total">
                      Subtotal: ${item.totalPrice.toFixed(2)}
                    </p>
                    <button
                      className="delete-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      <Trash2 size={20} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <button
                className="continue-shopping-btn"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
