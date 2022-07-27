import React from 'react';
import works from '../images/works.png';

const HowWork = () => {
    return (
        <div>

            <div class="hero min-h-screen mt-0">
                <div class="hero-content flex-col lg:flex-row-reverse ">
                    <div>
                        <img className='h-72' src={works} alt='' />

                    </div>
                    <div className='text-center w-1/2'>
                        <h1 class="text-3xl font-semibold underline decoration-red-600">How Does AR Book Work?</h1>
                        <p class="py-6">StartAR are not only children's picture book but more than just a picture book for children.These scannable books give a 3D view of every picture in the book.Starter also creates a smart education platform for PlaySchool.If you are running a playschool it is also a best option for teaching toddlers.Learning books for children shouldn't force them to learn.But books should be their favorite toys & best gift.We combine a augmented reality with the best alphabet books for children and amazing results are right infront of you.</p>

                    </div>
                </div>
            </div >
        </div >
    );
};

export default HowWork;