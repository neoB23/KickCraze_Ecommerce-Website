import React, { useState, useEffect } from 'react';

function Hero() {
    const images = [
        "/images/banner1.jpg",
        "/images/banner2.jpg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="flex justify-center items-center">
            <div>
                <div className="justify-center items-center">
                    <img
                        src={images[currentImageIndex]}
                        alt="banner"
                        className="w-3/4 h-auto mx-auto" // Adjust image size
                    />
                </div>
                <div className="text-center mt-4">
                    <h1 className="font-extrabold text-3xl">KICKCRAZE</h1>
                    <p className="font-thin">The latest footwear in fashion</p>
                    <button className="bg-zinc-900 text-white p-3 text-xs rounded-full mt-2">Preview Now</button>
                </div>
                <div className="flex justify-center items-center mt-4">            
                    <iframe 
                        className="w-full h-96 mx-auto" // Adjust iframe width and height
                        src="https://www.youtube.com/embed/LBukoM3CLic?mute=1" // Video starts muted
                        title="YouTube video player"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="flex justify-center items-center flex-col mt-4">
                    <h1 className="font-bold text-2xl text-center">Elevate Essentials</h1>
                    <p className="text-center text-sm">
                        Designed with soft, heavyweight loopback cotton, the Wordmark Paris Hoodie provides sophistication and warmth for any occasion.<br/>
                        The front pocket provides small storage, while the seasonal Wordmark embroidery and vibrant blue shades <br/> 
                        nod to the City of Light and its alluring day-to-night transformation.
                    </p>
                </div>
                <div className="mt-4">
                    <h1 className="font-extrabold text-3xl text-left"> Latest Release</h1>
                    <div className="flex justify-end mr-4">
                        <button className="p-2 bg-zinc-900 text-white rounded-full w-12 h-12">a</button>
                        <button className="p-2 bg-zinc-900 text-white rounded-full w-12 h-12
                        ">b</button>
                    </div>
                    <div className="justify-center item-center flex">
                        <img src="" alt="shoes"/>
                        <img src="" alt="shoes"/>
                        <img src="" alt="shoes"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
