import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, signUp } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen z-0" style={{ zIndex: -1 }}>
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/5e7655d5-4269-44e5-890f-922982726418/TR-tr-20230619-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        ></img>
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="w-full fixed px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
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
                  Sign Up
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
                    Already subscribed to Netflix?
                  </span>
                  <Link to="/signin"> Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
