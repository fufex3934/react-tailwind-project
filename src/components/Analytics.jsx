import React from 'react';
import Bible from '../assets/bible.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Bible} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>GROWING WITH BIBLE STUDY</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Give Your Self to God</h1>
          <p>
          "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." - John 3:16

          "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." - Proverbs 3:5-6
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;