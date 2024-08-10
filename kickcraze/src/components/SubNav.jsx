import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SubNav() {

    return (
        <div className="flex justify-center item-center p-2 bg-zinc-900">     
            <div className="space-x-12 text-white"> 
                <a href="">Men</a>
                <a href="">Women</a>
                <a href="">Kids</a>
                <a href="">Sale</a>
            </div>
        </div>

    );
}

export default SubNav;
