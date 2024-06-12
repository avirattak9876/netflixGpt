import React, { useState } from 'react';
import Header from './Header';
import { bg_image } from '../utils/constants';

function Login() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [nameFocused, setnameFocused] = useState(false);

  const [signinfo,setsigninfo] = useState(true);


  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = (e) => {
    if (!e.target.value) {
      setEmailFocused(false);
    }
  };

  const handlenameFocus = () => {
    setnameFocused(true);
  };

  const handlenameBlur = (e) => {
    if (!e.target.value) {
      setnameFocused(false);
    }
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = (e) => {
    if (!e.target.value) {
      setPasswordFocused(false);
    }
  };

  const handleClick = () =>{
        
     setsigninfo(!signinfo);
  
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="relative flex-grow flex justify-center items-center  ">
        <img className="absolute inset-0 w-full h-full object-cover" src={bg_image} alt="Background" />
        <div className="relative z-10 bg-black bg-opacity-65 rounded-md p-10 max-w-sm w-full ">
          {signinfo ? <h2 className="text-[2em] font-bold mb-4 text-white px-4">Sign In</h2> : <h2 className="text-[2em] font-bold mb-4 text-white px-4">Sign Up</h2>}
          <form className='p-4 pb-8 relative'>
           {!signinfo && <div className="mb-3 relative">
              <input
                id="name"
                className="w-full bg-black bg-opacity-65 text-white border border-white rounded-md py-5 px-3"
                type="text"
                onFocus={handlenameFocus}
                onBlur={ handlenameBlur}
              />
              <label
                htmlFor="name"
                className={`text-white absolute left-3 transition-all ${nameFocused ? 'text-xs -top-1 mt-2 text-gray-400' : 'top-4'}`}
              >
                Name
              </label>
            </div>}

            <div className="mb-3 relative">
              <input
                id="email"
                className="w-full bg-black bg-opacity-65 text-white border border-white rounded-md py-5 px-3"
                type="email"
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
              />
              <label
                htmlFor="email"
                className={`text-white absolute left-3 transition-all ${emailFocused ? 'text-xs -top-1 mt-2 text-gray-400' : 'top-4'}`}
              >
                Email
              </label>
            </div>
            <div className="mb-3 relative ">
              <input
                id="password"
                className="w-full bg-black bg-opacity-65 text-white border border-white rounded-md py-5 px-3"
                type="password"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
              <label
                htmlFor="password"
                className={`text-white absolute left-3 transition-all ${passwordFocused ? 'text-xs -top-1 mt-2 text-gray-400' : 'top-4'}`}
              >
                Password
              </label>
            </div>
          { signinfo ? <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline">
              Sign In
            </button> : <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline">
              Sign Up
            </button>}

           { signinfo  ? <p onClick={handleClick} className='text-white mt-7 underline cursor-pointer'>New to Netflix? Sign UP NOW</p> : <p onClick={handleClick} className='text-white mt-7 underline cursor-pointer'>Already Registered? Sign In NOW</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
