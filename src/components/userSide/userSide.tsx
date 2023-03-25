import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const UserSide = () => {
  const navigate = useNavigate();
  const [userId, setuserId] = useState<string | null>();
  useEffect(() => {
    if (Cookies.get("token")) {
      fetchUser(Cookies.get("token"));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const fetchUser = async (token: any) => {
    await axios
      .get("http://localhost:8000/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // 세션에 저장하기...
        setuserId(res.data.data.name);
      })
      .catch((error) => {
        alert(error.response.data.error.message);
      });
  };

  const logOut = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <div className="userContent">
      <div>{userId}</div>
      <button onClick={logOut}>로그아웃</button>
      <div>ranking</div>
      <div>socket 사용해야지....</div>
    </div>
  );
};
