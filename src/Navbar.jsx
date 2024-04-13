import React from "react";
import { useAuth } from "./contexts/authContexts"; // Import the useAuth hook
import { doSignOut } from "./firebase/auth"; // Import the doSignOut function

function Navbar() {
  const { userLoggedIn } = useAuth(); // Access the userLoggedIn status from the authentication context

  const handleSignOut = async () => {
    try {
      await doSignOut(); 
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="flex flex-row w-screen h-screen/10 justify-between p-10 bg-indigo-950 text-white text-4l uppercase font-bold">
      <a href="/">Book Listing Management</a>
      <div className="text-2l">
        <a className="p-4" href="/mybooks">My Books</a>
        <a className="p-4" href="/bookexchange">Book Exchange</a>
        {/* Display sign-out button if user is logged in */}
        {userLoggedIn && <button className="p-4" onClick={handleSignOut}>Sign Out</button>}
      </div>
    </div>
  );
}

export default Navbar;
