import React from 'react';
import './_cart.scss';
import Drawer from '../common/drawer/Drawer';
import useWindowSize from '../../js/UseWindowSize';

const Cart = ({ cartOpen, cartClose }) => {
    const [height, width] = useWindowSize()
    const isMobile = width < 391
    return (
        <Drawer className="cart" position="right" width={!isMobile ? "tablet" : "mobile"} isOpen={cartOpen} onClose={cartClose} closeBtn={true} positionCloseRight>
            <h2>Your Cart</h2>
        </Drawer>
    );
};

export default Cart;