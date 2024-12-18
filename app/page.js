"use client"
import React from "react";
import { ToastContainer, toast } from 'react-toastify';


const page = () => {
  const notify = ()=>{
    toast.success('Login success!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
    
  }
  return (
    <div>
      <button onClick={notify} className="text-white font-bold text-2xl m-4 px-4 py-3 rounded border-green-300 bg-green-500">
        Login
      </button>
      <ToastContainer/>
    </div>
  );
};

export default page;
