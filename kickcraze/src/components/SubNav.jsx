import React from 'react';
import { Link } from 'react-router-dom';

function SubNav() {
    return (
        <div className="flex justify-center items-center p-2 bg-zinc-900">
            <div className="flex space-x-4 md:space-x-12 text-white text-sm md:text-base">
                <CustomLink href="">Men</CustomLink>
                <CustomLink href="">Women</CustomLink>
                <CustomLink href="">Kids</CustomLink>
                <CustomLink href="">Sale</CustomLink>
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
export default SubNav;
