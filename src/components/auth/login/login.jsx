import React, { useState } from "react";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../../firebase/auth";
import { useAuth } from "../../../contexts/authContexts";
import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const { userLoggedIn } = useAuth() || {};
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    navigate("/");
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
      });
    }
  };


  const goToSignUpPage = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      {userLoggedIn && <Navigate to="/" replace={true} />}

      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-2 mb-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg p-2 mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isSigningIn ? "Signing In..." : "Sign In"}
          </button>
        </form>
        {/* <button
          onClick={onGoogleSignIn}
          className="w-full mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In with Google
        </button> */}

        {/* Button to navigate to the signup page */}
        <button
          onClick={goToSignUpPage}
          className="w-full mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export { Login };
