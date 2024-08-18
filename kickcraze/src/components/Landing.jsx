import React, { useState, useEffect } from 'react';
import Hero from './landingpage/Hero';
import Shoes from './landingpage/shoes'
// import Shoes from 'shoes.jsx';

function Landing(){
    return(
        <div> 
            <Hero/>
            <Shoes/>
        </div>
    );
}
export default Landing;