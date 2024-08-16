import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
const isActive = (path) => location.pathname === path;

    return (
        <div className="flex justify-between items-center p-2 ml-12">
            <img src="images/logo.png" className="w-16 h-16 object-contain" alt="logo"/>
            <div className="flex gap-x-5 mr-12">     
                <CustomLink href="/">Sign In</CustomLink>
                <CustomLink href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"/></svg></CustomLink>
                <CustomLink href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"/></svg></CustomLink>
            </div>
        </div>
    );
}
function CustomLink({ href, children, ...props }) {
    return (
        <Link
            to={href}
            className="text-white hover:text-blue-500 transition-colors duration-300"
            {...props}
        >
            {children}
        </Link>
    );
}

export default Nav;
