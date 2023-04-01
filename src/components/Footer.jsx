import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>BIBLE FOR WORLD</h1>
        <p className='py-4'>"Do not be conformed to this world, but be transformed by the renewing of your mind, that you may prove what is the good, acceptable, and perfect will of God." - Romans 12:2</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Preaching</li>
            <li className='py-2 text-sm'>Praying</li>
            <li className='py-2 text-sm'>Worship</li>
            <li className='py-2 text-sm'>Advice</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>bible study</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>FND Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Organization</h6>
        <ul>
            <li className='py-2 text-sm'>Nedjo</li>
            <li className='py-2 text-sm'>Haramaya</li>
            <li className='py-2 text-sm'>Nekemte</li>
            <li className='py-2 text-sm'>Ambo</li>
            <li className='py-2 text-sm'>Baale</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;