import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Bars from "./Bars";
import { useNavigate } from "react-router-dom";
import validator from 'validator';

function Login() {

  const navigate = useNavigate();
 
  const [errorMessage, setErrorMessage] = useState({
    username:'',
    password:''
  }) ;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleForgotPasswordClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  const {username,password}=errorMessage;

  const validateUserName=(value)=>{
     if(validator.isLength(value,{ min: 4, max: 12 })){
      setErrorMessage('Characters must be within 4 to 12 range ') 
    }else if(validator.isEmpty(value)){
    setErrorMessage(' ') 
  }else if (validator.isAlpha(value)) { 
    setErrorMessage('') 
}
  else { 
      setErrorMessage({...username,username:'Username should contain only Alphabets '}) 
  }
  }

  const validatePassword = (value) => { 
      if (validator.isStrongPassword(value, { 
          minLength: 8, minLowercase: 1, 
          minUppercase: 1, minNumbers: 1, minSymbols: 1 
      })) { 
          setErrorMessage({...password,password:'Is Strong Password'}) 
      }else if(validator.isEmpty(value)){
        setErrorMessage(' ') 
      }
      else { 
          setErrorMessage({...password,password:'Is Not Strong Password'}) 
      } 
     
  }

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Perform any validation or API calls here
    navigate("/Home"); // Navigate to the dashboard page
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Left section */}
      <div className="w-1/2 p-10 flex justify-center items-center">
        <div className="w-[50%] flex flex-col">
          <h1 className="text-4xl font-bold mb-6 ml-1 flex items-start text-left">
            Why Choose SISA Radar?
          </h1>
          <ul className=" list-none font-custom text-left text-sm mb-6">
            <li className="flex items-start">
              <span className="text-gray-500 mr-3 ">•</span>
              <span className="text-gray-400 ">
                Complete Data Visibility: Discover and map all data sources.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-3">•</span>
              <span className="text-gray-400 text-align: start">
                Advanced Data Classification: Automatically categorize sensitive
                data.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-3">•</span>
              <span className="text-gray-400 text-align: start">
                Easy Compliance: Meet GDPR, CCPA, HIPAA, and more.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-3">•</span>
              <span className="text-gray-400 text-align: start">
                Risk Mitigation: Identify and address risks proactively.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-3">•</span>
              <span className="text-gray-400">
                Seamless Integration: Integrate effortlessly with existing
                systems.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-3">•</span>
              <span className="text-gray-400">
                User-Friendly Interface: Simplify data management for all users.
              </span>
            </li>
          </ul>
          <Bars/>
        </div>
        
      </div>

      {/* Right section */}
      <div className="w-1/2 p-10 bg-gray-800 flex flex-col justify-center items-center">
        <div className="w-[80%] font-custom">
         <img src={`${process.env.PUBLIC_URL}/A.png`} alt="Logo" className="m-auto" />
          <h2 className="text-3xl font-semibold mb-4 text-center">Sign in - XYZ Tenant</h2>
          <p className="mb-8 w-[38%] text-[12px] text-center m-auto text-gray-400">
            Hi, Welcome back to SISA Radar, Please enter your details below to
            sign in
          </p>

          <form onSubmit={handleLogin}>
            <div className="relative mb-12">
            <label htmlFor="username" className="block mb-2 text-start"> <span className="text-red-500">•</span> User name</label>
              <FontAwesomeIcon
                icon={faUser}
                className="absolute left-3 mt-6 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                id="username"
                className="w-full pl-10 p-3 rounded-md bg-gray-900 text-white border-[1px] border-zinc-600"
                placeholder="User name"
                onChange={(e) => validateUserName(e.target.value)}
                required
              />
              {errorMessage === ' ' ? null :<span className="text-[12px]" style={{fontWeight: 'bold',color: 'red'}}>{errorMessage.username}</span>}
            </div>
            <div className="relative mb-4">
            <label htmlFor="password" className="block mb-2 text-start"> <span className="text-red-500">•</span> Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 pr-10 rounded-md bg-gray-900 text-white border-[1px] border-zinc-600"
                placeholder="Password"
                onChange={(e) => validatePassword(e.target.value)}
                required
              />
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="absolute right-3 mt-6 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              />
             
               {errorMessage === ' ' ? null :<span className="text-[12px]" style={{fontWeight: 'bold',color: 'red'}}>{errorMessage.password}</span>}
               
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                <span className="ml-2">Remember Me</span>
              </label>
              <a href="#" onClick={handleForgotPasswordClick} className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 rounded text-white hover:bg-blue-700"
            >
              Log in
            </button>
          </form>

          <p className="mt-4 ml-[120px]">
            Don’t have an account?
            <a href="#" className="text-blue-500 hover:underline">
              Sign up Now
            </a>
          </p>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[400px]">
            <h3 className="text-xl font-semibold mb-4">Reset Password</h3>
            <p className="mb-4 text-gray-400">Enter your email address and we will send you a reset link.</p>
            <form onSubmit={handleResetPassword}>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded bg-gray-700 text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="mr-2 py-2 px-4 bg-gray-600 rounded text-white hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-600 rounded text-white hover:bg-blue-700"
                >
                  Send Reset Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
