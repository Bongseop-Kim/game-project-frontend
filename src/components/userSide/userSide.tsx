import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const UserSide = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("token")) {
      console.log(Cookies.get("token"));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="userContent">
      <div>hi</div>
    </div>
  );
};
