import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons';



const Icon = () => {
    return (
        <div>
            <h1>Icon</h1>
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon className='text-yellow-400' icon={faMagicWandSparkles} />

        </div>
    );
};

export default Icon;