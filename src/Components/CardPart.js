import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardPart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(products)
            })
    }, [])
    return (
        <div>
            <h1 className='mb-5 text-5xl text-center'>Our Latest and greatest augmented reality books</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}

                    ></Card>)
                }

            </div>
        </div>
    );
};

export default CardPart;