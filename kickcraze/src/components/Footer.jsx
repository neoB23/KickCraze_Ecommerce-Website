import React from 'react';

function Footer() {
    return (
        <div className="bg-zinc-950 p-12">
            <div className=" p-12 flex justify-between">
                <div className="text-white">
                    <h1 className="font-bold text-3xl">KickCraze</h1>
                    <h1>The latest footware fashioncd</h1>
                </div>
                <div className="text-white flex flex-col space-y-4">
                    <a href="/" className="text-center">FAQs</a>
                    <a href="/" className="text-center">Size Chart</a>
                    <a href="/" className="text-center">Contact Us</a>
                </div>
                <div className="text-white flex flex-col text-right space-y-4">
                    <a href="/">Terms of Services</a>
                    <a href="/">Refund Policy</a>
                    <a href="/">About Us</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
