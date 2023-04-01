import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setEmail, setId, setMoney, setName } from "../../services/userItem";
import { socket } from "../../socket/socket";
import { RootState } from "../../store/store";
import ranking from "../../assets/ranking.png";

export const UserSide = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userItem = useSelector((state: RootState) => state.userItem);
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    const fetchUser = async (token: any) => {
      await axios
        .get("http://localhost:8000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // 세션에 저장하기...
          dispatch(setId(res.data.data.id));
          dispatch(setName(res.data.data.name));
          dispatch(setEmail(res.data.data.email));
          dispatch(setMoney(res.data.data.money));
        })
        .catch((error) => {
          alert(error.response.data.error.message);
        });
    };

    if (Cookies.get("token")) {
      fetchUser(Cookies.get("token"));
    } else {
      navigate("/login");
    }
  }, []);

  const logOut = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  socket.on("update_users", (data: any) => {
    setAllUser(data);
  });

  return (
    <div className="userContent">
      <div className="idontkonwo">
        <div>{`접속한 유저 이름 : ${userItem.name}`}</div>
        <button onClick={logOut}>로그아웃</button>
        <img className="ranking" src={ranking} alt="" />
        <div>
          {allUser.map((user: any) => {
            return (
              <div className="row" key={user.name}>
                <div>{`이름 : ${user.name}　　　　`}</div>
                <div>{`돈 : ${user.money}`}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
