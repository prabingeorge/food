import React, { useContext } from 'react';
import './CartNotification.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const CartNotification = () => {
    const { cartItems, getTotalCartAmount } = useContext(StoreContext);

    // Calculate total number of items in cart
    const getTotalItems = () => {
        return Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);
    };

    // Only show notification if cart has items
    const shouldShow = getTotalCartAmount() > 0;

    if (!shouldShow) {
        return null;
    }

    return (
        <div className="cart-notification">
            <div className="cart-notification-content">
                <div className="cart-info">
                    <span className="item-count">{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in cart</span>
                    <span className="total-amount">${getTotalCartAmount().toFixed(2)}</span>
                </div>
                <Link to="/cart" className="view-cart-btn">
                    View Cart
                </Link>
            </div>
        </div>
    );
};

export default CartNotification;
