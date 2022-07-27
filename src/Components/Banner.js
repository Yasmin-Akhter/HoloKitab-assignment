import React from 'react';
import banner from '../images/banner.jpg';

const Banner = () => {
    return (

        <div class="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div >
                    <h1 class="mb-5 text-5xl font-bold">Make your Kids Learning <span className='text-red-900'>Interactive</span> & <span className='text-red-900'>Engaging</span></h1>

                </div>
            </div>
        </div>
    );
};

export default Banner;