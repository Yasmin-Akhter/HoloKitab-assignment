import React from 'react';
// import './Card.css';

const Card = ({ product }) => {
    const { picture, price, name } = product;
    return (
        <div className='card-style'>

            <div class="card bg-base-100 hover:drop-shadow-2xl transform hover:scale-105 duration-500">
                <figure class="px-5 pt-10">
                    <img src={picture} alt="books" className='h-36 rounded-xl transform hover:scale-125 duration-500' />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p className='font-semibold'>{price}TK</p>
                    <div>
                        <button class=" px-4 py-2 rounded-xl text-white bg-red-800 hover:bg-red-900">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;