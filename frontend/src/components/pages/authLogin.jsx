import { useEffect } from "react";
import Login from "../auth/Login";
import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function page() {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    // redirect to home page if user is already logged in
    if (user && user._id) {
      navigate("/");
    }
  }, [user, navigate]);

  // return null or a loading spinner/indicator
  if (user && user._id) {
    return null;
  }

  return (
    <div className="auth-page w-full h-full flex justify-center items-center">
      <Login />
    </div>
  );
}

export default page;