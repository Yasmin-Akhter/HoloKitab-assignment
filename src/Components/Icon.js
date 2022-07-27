import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';



const Icon = () => {
    return (


        <div className='grid grid-rows-3 gap-10 lg:ml-24 ml-6  ' >
            <div className='grid grid-cols-3'>
                <p><FontAwesomeIcon className='text-red-400 pr-2 ' icon={faBookOpen} />open books</p>
                <p><FontAwesomeIcon className='text-yellow-400' icon={faMagicWandSparkles} /> magical animation</p>
                <p><FontAwesomeIcon className='text-blue-400' icon={faWaveSquare} /> interactive sound </p>

            </div>
            <div className='grid grid-cols-3'>
                <p><FontAwesomeIcon className='text-red-400 pr-2' icon={faBookOpen} />open books</p>
                <p><FontAwesomeIcon className='text-yellow-400' icon={faMagicWandSparkles} /> magical animation</p>
                <p><FontAwesomeIcon className='text-blue-400' icon={faWaveSquare} /> interactive sound </p>
            </div>
            <div className='grid grid-cols-3'>
                <p><FontAwesomeIcon className='text-red-400 pr-2' icon={faBookOpen} />open books</p>
                <p><FontAwesomeIcon className='text-yellow-400' icon={faMagicWandSparkles} /> magical animation</p>
                <p><FontAwesomeIcon className='text-blue-400' icon={faWaveSquare} /> interactive sound </p>
            </div>

        </div>




    );
};

export default Icon;