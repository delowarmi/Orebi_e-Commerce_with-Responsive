import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
let GoogleAuthButton = () => {
  let auth = getAuth();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from || "/";
  let provider = new GoogleAuthProvider();
  let handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      toast.success("Sign in successful!");
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1000);
         
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex items-center gap-3 bg-navHColor border border-gray-300 shadow-md px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300"
    >
      <FcGoogle size={24} />
      <span className="font-medium text-yellow-600">Sign in with Google</span>
    </button>
  );
};
export default GoogleAuthButton;

