import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, logIn } = UserAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      setError("");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen " style={{ zIndex: -1 }}>
        <img
          className=" sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/5e7655d5-4269-44e5-890f-922982726418/TR-tr-20230619-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        ></img>
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="w-full fixed px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? (
                <p className="bg-red-600 py-3 rounded p-3">{error}</p>
              ) : null}
              <form
                onSubmit={handleLogin}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p className="hover:text-gray-300">
                    <input type="checkbox" className="mr-1" />
                    Remember me
                  </p>
                  <p className="hover:text-gray-300">Need Help!</p>
                </div>
                <p className="py-8  cursor-pointer text-gray-300 ">
                  <span className="text-gray-600 hover:text-gray-300">
                    New to Netflix ?
                  </span>
                  <Link to="/signup"> Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
