import React, { useState } from "react";

export default function Loginlogic(){

const [Email, setEmail] = useState("");
const [Password, setPassword] =useState("");
const [message, setMessage] = useState("");

const mkEmail=("admin@mk");
const mkPassword =("1234");

function Log(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        
            if (Email ===mkEmail && Password ===mkPassword){
                setMessage("Logged in")
            }
            else{
            setMessage("not logged in")
            }
        }
    
        
     return(
        
     
        <form onSubmit={Log} className="bg-orange-500 p-5 grid w-2/4 mx-auto justify-center rounded-xl pt-"> 

            <input type="email" 
            required 
            value={Email}
            className="bg-white  mb-3"
             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
             />

            <input type="password" name="" id="" 
            value={Password}
            className="bg-white mb-3"
             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
            <button type="submit" className="bg-blue-500 text-white  mb-3">Login</button>

            <p>{message}</p>
        </form>
        
    );


}
   

