import React from 'react';

function SubNav() {
    return (
        <div className="flex justify-center items-center p-2 bg-zinc-900">
            <div className="flex space-x-4 md:space-x-12 text-white text-sm md:text-base">
                <a href="">Men</a>
                <a href="">Women</a>
                <a href="">Kids</a>
                <a href="">Sale</a>
            </div>
        </div>
    );
}

export default SubNav;
