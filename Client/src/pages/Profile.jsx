import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { profile } from "../../connectionToBackend";

const Profile = () => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const fetchUser = async () => {
        try {
            const response = await profile(); // Call the profile function to get user data
            console.log("Fetched user:", response);
            if (response) {
                setUser(response.user);
                localStorage.setItem("user", JSON.stringify(response.user)); // Store user data in local storage
                
            }
             
        } catch (error) {
            console.error("Error fetching user data:", error); // Log any errors
            return null; // Return null if there was an error
        }finally {  
            setLoading(false); // Ensure loading is set to false in case of error
        }
     }
     useEffect(()=>{
        fetchUser()
     },[])

     if (loading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>; // Show loading state while fetching user data
     }  

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />

      <main className="flex flex-col items-center justify-start pt-24 px-4 bg-white">
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">User Profile</h1>

        <div className="flex items-center justify-center w-full">
          <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
            
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden shadow-lg mb-4">
                <img
                  src={user?.profilePicture || "https://via.placeholder.com/150"}
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {user?.name || "John Doe"}
              </h2>
              <p className="text-gray-500">
                {user?.email || "johndoe@example.com"}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">About</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {user?.bio || "No bio available. Update your profile to add one."}
              </p>
            </div>

            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white py-2 rounded-xl font-medium shadow hover:bg-blue-700 transition duration-200">
                Edit Profile
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
