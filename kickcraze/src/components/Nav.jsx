import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {

    return (
        <div className="flex justify-between items-center p-2">
            <img src="images/logo.png" className="w-16 h-16 object-contain" alt="logo"/>
            <div className="flex gap-x-7">     
                <a href="">Sign In</a>
                <a href="">Heart</a>
                <a href="">Cart</a>
            </div>
        </div>
    );
}

export default Nav;
