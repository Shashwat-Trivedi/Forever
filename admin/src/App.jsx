import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Login from './components/Login.jsx';



function App() {
  const [token, setToken] = useState(sessionStorage.getItem('adminToken') || '');

  useEffect(() => {
    sessionStorage.setItem('adminToken', token);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === '' ? (
        <Login setToken={setToken} /> 
      ) : (
        <>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <hr className="border-gray-300" />
            <div className="flex w-full">
              <Sidebar />
              <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
                <Outlet />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
