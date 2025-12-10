import { useDispatch } from "react-redux";
import { getUserData } from "../https";
import { useEffect, useState } from "react";
import { removeUser, setUser } from "../redux/slices/userSlice";
import { useNavigate, useLocation } from "react-router-dom";

const useLoadData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Skip fetching user data on auth page to prevent auto-login after logout
    if (location.pathname === "/auth") {
      setIsLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const { data } = await getUserData();
        console.log(data);
        if (data && data.success && data.data) {
          const { _id, name, email, phone, role } = data.data;
          dispatch(setUser({ _id, name, email, phone, role }));
        } else {
          console.error("Invalid API response format. Possible wrong Backend URL.", data);
          // Verify if we received HTML (SPA fallback)
          if (typeof data === 'string' && data.startsWith('<!doctype html>')) {
            console.error("Received HTML instead of JSON. Check VITE_BACKEND_URL.");
          }
          dispatch(removeUser());
          navigate("/auth");
        }
      } catch (error) {
        dispatch(removeUser());
        navigate("/auth");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [dispatch, navigate, location.pathname]);

  return isLoading;
};

export default useLoadData;
