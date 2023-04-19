import React from 'react';
import "../styles/Header.css"

// const Title = () => (
//     <h1>Food Villa</h1>
// );

const Header = () => {
    return (
        <div className="header">
            <a href='/'>
                <img className='logo' src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w100-rw" alt="logo" />
            </a>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}

export default Header
