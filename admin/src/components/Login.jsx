import React, { useState } from 'react';
import axios from 'axios';
import { backendURL } from '../config/env.js'; 
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const onSubmithandler = async (e) => {
    try {
      e.preventDefault();
      // const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`, {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({ email, password })
      // });

      const response = await axios.post(backendURL + '/api/user/admin', {
        email,
        password,
      });
      if (response.status === 200) {
        setToken(response.data.token);
      }
      else {
        toast.error(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error(error.response?.data?.message || 'An error occurred during login'); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2 ">
              Email Address{' '}
            </p>
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2 ">Password </p>
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              placeholder="your password"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
            type="submit"
            onClick={onSubmithandler}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
