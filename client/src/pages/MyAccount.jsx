import React from 'react';
import './_my-account.scss'

const MyAccount = () => {
    const userName = JSON.parse(localStorage.getItem('userInfo'))
    console.log(userName)
    return (
        <div className='myaccount-page'>
            <div className='wrapper'>
                <div className='left'>
                    <h1>MY DETAILS</h1>
                    <h4>Email</h4>
                    <p>{userName.email}</p>
                    <h4>Address</h4>
                    <p>{userName.address}</p>
                    <h4>City</h4>
                    <p>{userName.city}</p>
                    <h4>Date of birth</h4>
                    <p>{userName.date}</p>
                </div>
                <div className='right'>
                    <h1>MY ORDERS</h1>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;