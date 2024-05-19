import React, { useState } from 'react';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import portfolioImage1 from '../assets/Images/poert1.png';
import portfolioImage2 from '../assets/Images/port2.png';
import portfolioImage3 from '../assets/Images/port3.png';

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [portfolioImage1, portfolioImage2, portfolioImage3];

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className='flex flex-col items-center pt-20 p-10'>
            <h2 className='text-3xl text-gray-900'>PORTFOLIO COMPONENT</h2>
            <div className="flex items-center w-full max-w-sm mt-5">
                <div className="flex-grow border-t-4 border-gray-900"></div>
                <span className="mx-4 text-gray-900">
                    <FontAwesomeIcon icon={faStar} />
                </span>
                <div className="flex-grow border-t-4 border-gray-900"></div>
            </div>
            <div className='flex flex-wrap justify-center w-full p-2'>
                {images.map((image, index) => (
                    <div key={index} className='relative group p-2 sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <div className='relative cursor-pointer' onClick={() => openModal(image)}>
                            <img src={image} alt="" className='w-full' />
                            <div className='absolute inset-0 bg-green-500 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300'>
                                <FontAwesomeIcon icon={faPlus} className='text-white text-3xl' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50' onClick={closeModal}>
                    <div className='relative'>
                        <img src={selectedImage} alt="" className='max-w-full max-h-full' />
                        <button className='absolute top-4 right-4 text-white text-3xl' onClick={closeModal}>&times;</button>
                    </div>
                </div>
            )}
            <div className='flex flex-wrap justify-center w-full p-2'>
                {images.map((image, index) => (
                    <div key={index} className='relative group p-2 sm:w-1/2 md:w-1/3 lg:w-1/4'>
                        <div className='relative cursor-pointer' onClick={() => openModal(image)}>
                            <img src={image} alt="" className='w-full' />
                            <div className='absolute inset-0 bg-green-500 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300'>
                                <FontAwesomeIcon icon={faPlus} className='text-white text-3xl' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50' onClick={closeModal}>
                    <div className='relative'>
                        <img src={selectedImage} alt="" className='max-w-full max-h-full' />
                        <button className='absolute top-4 right-4 text-white text-3xl' onClick={closeModal}>&times;</button>
                    </div>
                </div>
            )}
        </div>
    );
}
