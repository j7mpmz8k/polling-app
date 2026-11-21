import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "./useAuth";
import { User } from "../contexts/AuthContext";

export function useRequireUser(): User | null {
  const { user, loading, setRedirectUrl } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !user) {
      setRedirectUrl(location.pathname);
      navigate("/login");
    }
  }, [user, loading, navigate, location.pathname, setRedirectUrl]);

  return user;
}
