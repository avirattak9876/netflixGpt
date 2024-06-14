import React, { useRef, useState } from 'react';
import Header from './Header';
import { bg_image } from '../utils/constants';
import { checkValiddata } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import {updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUserinfo } from '../utils/userSlice';

function Login() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [nameFocused, setnameFocused] = useState(false);

  const [signinfo, setsigninfo] = useState(true);
  const [errormessage, seterrormessage] = useState(null);

  
  const dispatch = useDispatch();


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

  const handletoogle = () => {
    setsigninfo(!signinfo);
  }

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClick = () => {
    const message = checkValiddata(email.current.value, password.current.value);

    seterrormessage(message);

    if (message) return;

    if (!signinfo) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
             const {uid , email , displayName} = auth.currentUser;
             dispatch(addUserinfo({uid : uid , email : email , displayName : displayName})); 
           
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
        });
    } 
    
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <div className="relative">
      <Header />
      <div className="absolute inset-0">
        <img className="absolute inset-0 w-full h-full object-cover" src={bg_image} alt="Background" />
      </div>
      <div className="relative z-10 flex flex-grow justify-center items-center">
        <div className="bg-black bg-opacity-65 rounded-md p-10 mb-9 max-w-sm w-full">
          <h2 className="text-[2em] font-bold mb-4 text-white px-4">{signinfo ? "Sign In" : "Sign Up"}</h2>
          <form onSubmit={(e) => e.preventDefault()} className='p-4 pb-8 relative'>
            {!signinfo && (
              <div className="mb-3 relative">
                <input
                  id="name"
                  ref={name}
                  className="w-full bg-black bg-opacity-65 text-white border border-white rounded-md py-5 px-3 focus:outline-none focus:border-2 focus:border-red-500"
                  type="text"
                  onFocus={handlenameFocus}
                  onBlur={handlenameBlur}
                />
                <label
                  htmlFor="name"
                  className={`text-white absolute left-3 transition-all ${nameFocused ? 'text-xs -top-1 mt-2 text-gray-400 ' : 'top-4'}`}
                >
                  Name
                </label>
              </div>
            )}

            <div className="mb-3 relative">
              <input
                id="email"
                ref={email}
                className="w-full bg-black bg-opacity-65 text-white border border-white rounded-md py-5 px-3 focus:outline-none focus:border-2 focus:border-red-500"
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
                ref={password}
                className="w-full bg-black bg-opacity-65 text-white border border-white rounded-md py-5 px-3 focus:outline-none focus:border-2 focus:border-red-500"
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

            <p className='font-semibold text-red-600 m-2'>{errormessage}</p>

            <button onClick={handleClick} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline">
              {signinfo ? "Sign In" : "Sign UP"}
            </button>

            <p onClick={handletoogle} className='text-white mt-7 underline cursor-pointer'>
              {signinfo ? "New to Netflix? Sign UP NOW" : "Already registered? Sign In NOW"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
