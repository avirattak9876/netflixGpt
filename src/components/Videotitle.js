import React from 'react';

function Videotitle({ title, overview }) {
  return (
    <div className='absolute w-screen aspect-video pt-28 px-16 z-20 text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-semibold'>{title}</h1>
      <p className='text-lg w-2/3 mt-2 mb-4 overflow-hidden line-clamp-3'>{overview}</p>

      <div className='flex gap-4'>
        <button className='bg-white px-6 py-2 rounded-lg text-black hover:bg-opacity-80'>
          <i className="fas fa-play mr-2"></i>
          Play
        </button>
        <button className='flex items-center bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-gray-800'>
          <i className="fas fa-info-circle mr-2"></i>
          More info
        </button>
      </div>
    </div>
  );
}

export default Videotitle;
