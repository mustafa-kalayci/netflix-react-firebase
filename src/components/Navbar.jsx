import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
function Navbar() {
  const { user, logOut } = UserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between w-full p-4 z-50 relative   ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl cursor-pointer">NETFLIX</h1>
      </Link>
      <div>
        {user && (
          <>
            <Link to="/account">
              <button className=" text-white pr-4">Account </button>
            </Link>

            <button
              className="bg-red-600 px-4 rounded cursor-pointer text-white p-2"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </>
        )}
        {!user && (
          <>
            <Link to="/signin">
              <button className=" text-white pr-4">Sign In </button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 px-4 rounded cursor-pointer text-white p-2">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
