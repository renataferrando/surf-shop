import React from 'react';
import './_footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='lists'>
                <ul>
                    <h4>FRECUENT</h4>
                    <a>Leash</a>
                    <a>Fins</a>
                    <a>Grips</a>
                </ul>
                <ul>
                    <h4>SUPPORT</h4>
                    <a>Help</a>
                    <a>Frecuent questions</a>
                    <a>Returns and exchanges</a>
                </ul>
                <ul>
                    <h4>ABOUT US</h4>
                    <a>Stores</a>
                    <a>Sustainability</a>
                    <a>Discounts</a>
                </ul>
            </div>
            <div className='bottom'>
                <p>© 2022 Leash surfing co. All rights reserve</p>
                <div className='social'>
                    <i className='fa fa-instagram'></i>
                    <i className='fa fa-facebook'></i>
                    <i className='fa fa-youtube'></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;