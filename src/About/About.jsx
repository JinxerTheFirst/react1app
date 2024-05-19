import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
  return (
    <div className='h-screen bg-green-400 sm:p-20 md:p-40'>
      <div className='text-center'>
        <h1 className='text-white text-4xl font-bold'>ABOUT COMPONENT</h1>
        <div className="flex items-center justify-center mt-10">
          <div className="flex items-center w-full max-w-sm">
            <div className="flex-grow border-t-4 border-white"></div>
            <span className="mx-4 text-white">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <div className="flex-grow border-t-4 border-white"></div>
          </div>
        </div>
        <div className='flex flex-wrap justify-between items-center text-white mt-10'>
          <div className='p-5 sm:w-full md:w-1/2'>
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className='p-5 sm:w-full md:w-1/2'>
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
