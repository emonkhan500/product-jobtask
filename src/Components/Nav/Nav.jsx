import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Nav = () => {
const {user,logOut}=useContext(AuthContext)

const handleSignOut=()=>{
  logOut()
  .then(result=>console.log('looged Out'))
  .catch(error=>console.error(error))
}

 
    return (
      <div className="navbar rounded-sm  bg-[#15151580]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border p-2 rounded-md border-yellow-400 font-mono"
                    : "text-xl"
                }
              >
                Home
              </NavLink>
            </li>
           
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border p-2 rounded-md border-yellow-400 font-mono"
                    : "text-xl"
                }
              >
                Product
              </NavLink>
            </li>
          </ul>
        </div>
        <a className=" text-2xl font-bold text-green-500">ProductZone</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border p-2 rounded-md border-yellow-400 font-mono"
                    : "text-xl"
                }
              >
                Home
              </NavLink>
            </li>
           
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border p-2 rounded-md border-yellow-400 font-mono"
                    : "text-xl"
                }
              >
                Product
              </NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
      <div className="flex gap-3">
      {
      user?<>
      
<Link> <button onClick={handleSignOut} className="btn border-green-600 text-green-500">Sign Out</button></Link>
</> :
<div className="flex gap-3">
<Link to='/login'> <button className="btn  bg-green-500 border-green-600 text-white">Login</button></Link>
<Link to='/register'> <button className="btn bg-green-500 border-green-600 text-white">Register</button></Link>
</div>
    }
    </div>
      </div>
    </div>
    );
};

export default Nav;