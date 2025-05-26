import Logo from "./assets/MKwhite.png"
import Logo1 from "./assets/Mk.png"
import React, { useState } from "react";

export default function Login(){


  const [Email, setEmail] = useState("");
  const [Password, setPassword] =useState("");
  const [message, setMessage] = useState("");
  
  const mkEmail=("admin@mk");
  const mkPassword =("1234");
  
  function Log(e:React.FormEvent<HTMLFormElement>){
          e.preventDefault();
          
              if (Email ===mkEmail && Password ===mkPassword){
                  setMessage("Logged in ✅")
              }
              else{
              setMessage("❌  Not logged in Wrong Password")
              }
          }
    return(
        <div className="flex h-screen">
    {/* <!-- Logo Section --> */}
    <div className="w-1/2 bg-orange-600 flex items-center justify-center shadow-sm">
      <div className="text-white text-center">
        <img src= {Logo} alt="Logo" className="mx-auto mb-4 h-50 animate-bounce"/>
        <h1 className="text-5xl font-semibold tracking-tight text-balance">Welcome Back!</h1>
        <p className="mt-2 text-lg ">Please login to your account</p>
      </div>
    </div>
    {/* <!-- Login Form Section --> */}
    <div className="w-1/2 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow hover:shadow-2xl">
        <img src={Logo1} alt="" className="h-25 mx-auto"/>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 justify-center  items-center flex ">Sign in to My Klub</h2>
        <form onSubmit={Log} className="space-y-5">
           
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input type="email" id="email" name="email" 
            required 
            value={Email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" 
            value={Password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setPassword(e.target.value)}
            required 
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"/>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember" name="remember" type="checkbox" 
              className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"/>
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-orange-500 hover:underline">Forgot your password?</a>
            </div>
          </div>
          <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200">Sign In</button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?
          <a href="#" className="text-orange-500 hover:underline">Sign up</a>
        </p>
        <p className="text-orange-600 pt-5">{message}</p>
      </div>
    </div>
  </div>

    );
}