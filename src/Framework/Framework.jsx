import React from 'react';
import framework from '../assets/Images/avataaars.svg';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Framework() {
    return (
        <div className='bg-green-400 h-screen flex flex-col justify-center'>
            <div className='flex items-center justify-center'>
                <img src={framework} alt="Framework Avatar" className='w-60 sm:mt-6 md:mt-40' />
            </div>
            <div className='text-center sm:mb-4 md:mt-5'>
                <h1 className='text-white text-4xl font-bold'>START FRAMEWORK</h1>
                <div className="flex items-center justify-center my-5">
                    <div className="flex items-center w-full max-w-sm">
                        <div className="flex-grow border-t-4 border-white"></div>
                        <span className="mx-4 text-white">
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        <div className="flex-grow border-t-4 border-white"></div>
                    </div>
                </div>
                <h1 className='text-white'>Graphic Artist - Web Designer - Illustrator</h1>
            </div>
        </div>
    );
}
