"use client";

import { useState } from "react";

//Client componentfor CSR
export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const validateForm = () => {
    if (!email) {
      setEmailError("Email is required!!");
      return false;
    }else{
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required!!");
      return false;
    }else{
      setPasswordError("");
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const  isValid = validateForm();
    if(isValid){  
    // Login Form Data Submitioin Area
    console.log("Form Data:", { email: email, password: password });
    }
  };

  return (
    <div className="w-[380px] mx-auto bg-green-200">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg px-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/*Title */}
          <h3 className="text-center text-xl font-semibold text-gray-900">
            {props.title}
          </h3>

          {/*E-mail */}
          <div>
            <label
              htmlFor="email"
              className="text sm font-medium text-gray-900 block mb-2"
            >
              Your email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-red-500 block w-full p-2.5"
              placeholder="yourname@email.com"

            />
            {emailError && <div className="text-red-700 text-xs mt-2 ml-1 ">{emailError}</div> }         
          </div>

          {/*PassWord */}
          <div>
            <label
              htmlFor="password"
              className="text sm font-medium text-gray-900 block mb-2"
            >
              Your password
            </label>

            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300  rounded-lg text-gray-900 focus:ring-blue-500 focus:border-red-500 block w-full p-2.5"
              placeholder="********"
            />
            {passwordError && <div className="text-red-700 text-xs mt-2 ml-1">{passwordError}</div>}          
          </div>
          

          {/*remember me */}
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5 ">
                <input
                  id="remember"
                  type="checkbox"
                  className="bg-gray-50 border  focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded "
                />
              </div>

              <div className="text-sm ml-3">
                <label htmlFor="remember" className="font-medium text-gray-900">
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="/forget password"
              className="text-sm text font-medium text-blue-700 hover:underline ml-auto"
            >
              Lost Password?
            </a>
          </div>
          {/*submit button */}

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Sign in
          </button>
          <div className="flex justify-center text-sm font-medium text-gray-500 space-x-1">
            <span>Not registered?</span>

            <a href="/register" className="text-blue-700 hover:underline">
              Create an accoount
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
