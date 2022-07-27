import React from 'react';
import ThirdImg from '../images/thirdPart.png';

const ThirdPart = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={ThirdImg} alt='' />
                <div>
                    <h1 class="text-5xl font-bold">An award winning startup <br />
                        Awarded by <span className='text-red-800'>Startup Punjab</span></h1>

                    <div className='pt-5'>
                        <button class="btn bg-red-800 hover:bg-red-900">Read Article</button>
                        <p className='inline-block pl-5 text-yellow-700'>#startupindia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdPart;