import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./components/Main";
import { AuthContextProvider } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
