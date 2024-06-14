import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import myimage from "../img/Netflix_Logo.png";
import { my_profile } from '../utils/constants';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { addUserinfo, removeUserinfo } from '../utils/userSlice'
import { onAuthStateChanged } from "firebase/auth";



function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const location = useLocation();

  const userinfo = useSelector(store => store.userinfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    
    }).catch((error) => {
      // An error happened.
      console.error('Sign out error:', error);
    });
  }

  useEffect(()=>{
    
   const unsubsribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid ,email, displayName} = user;
          dispatch(addUserinfo({uid : uid , email : email , displayName : displayName})); 
          navigate("/browser")
         
        // ...
      } else {
        // User is signed out
        // ...
         dispatch(removeUserinfo());
         navigate("/")
      }
    });

    return () => unsubsribe();
  },[]);





  // Check if the current path is the login page
  const isLoginPage = location.pathname === '/';

  return (
    <div className='relative w-full z-50 bg-gradient-to-r from-black flex justify-between '>
      <img className='w-48' src={myimage} alt="LOGO" />
      {!isLoginPage && (
        <div className='relative flex items-center'
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <img
            src={my_profile}
            className='w-10 h-10 rounded-md cursor-pointer mr-1'
          />
          {isDropdownOpen ? (
            <i className="fas fa-caret-up text-white ml-2 cursor-pointer mr-9"></i>
          ) : (
            <i className="fas fa-caret-down text-white ml-2 cursor-pointer mr-9"></i>
          )}
          {isDropdownOpen && userinfo && (
            <div className='absolute right-0 mt-[12em] mr-5 w-48 bg-white rounded-md shadow-lg py-2'>
              <Link to="/account" className='flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200'>
                <i className="fas fa-user-circle mr-2"></i> {userinfo?.displayName}
              </Link>
              <Link to="/help" className='flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200'>
                <i className="fas fa-question-circle mr-2"></i> Help Desk
              </Link>
              <button onClick={handleSignOut} className='flex items-center w-full px-4 py-2 text-gray-800 hover:bg-gray-200'>
                <i className="fas fa-sign-out-alt mr-2"></i> Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
