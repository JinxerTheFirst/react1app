import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <div>
            <footer className="bg-slate-700 p-10 text-center">
                <div className='flex flex-wrap justify-around'>
                    <div className='sm:w-full md:w-1/3 text-white text-2xl space-y-3 p-3'>
                        <h2 className='text-xl md:text-2xl'>LOCATION</h2>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className='sm:w-full md:w-1/3 text-white p-3'>
                        <h2 className='text-2xl md:text-3xl'>AROUND THE WEB</h2>
                        <div className='flex justify-center space-x-2 mt-2'>
                            <FontAwesomeIcon className='text-xl border rounded-full p-2' icon={faFacebook} />
                            <FontAwesomeIcon className='text-xl border rounded-full p-2' icon={faTwitter} />
                            <FontAwesomeIcon className='text-xl border rounded-full p-2' icon={faLinkedinIn} />
                            <FontAwesomeIcon className='text-xl border rounded-full p-2' icon={faGlobe} />
                        </div>
                    </div>
                    <div className='sm:w-full md:w-1/3 text-white p-3'>
                        <h2 className='text-2xl md:text-3xl'>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </footer>
            <div className='bg-slate-900 text-white text-center p-4'>
                <p>Copyright © Your Website 2024</p>
            </div>
        </div>
    );
}
