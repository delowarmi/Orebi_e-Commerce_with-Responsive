import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

let GoogleAuthButton = () => {
  let auth = getAuth();
  let db = getDatabase();
  let bdTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from || "/";
  let provider = new GoogleAuthProvider();

  let handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await set(ref(db, `users/${user.uid}`), {
        email: user.email,
        firstName: user.displayName,
        createdAt: bdTime, 
        photoURL: user.photoURL,   
      });

      console.log("User Info:", user);
      toast.success("Sign in successful!");

      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1000);
         
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error("Sign in failed!");
    }
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex items-center gap-3 bg-navHColor border hover:border-orange-600 shadow-md px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300"
    >
      <FcGoogle size={24} />
      <span className="font-medium text-yellow-600">Sign in with Google</span>
    </button>
  );
};

export default GoogleAuthButton;
