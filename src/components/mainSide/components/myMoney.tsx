import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moneyBagImg from "../../../assets/money-bag.png";
import { socket } from "../../../socket/socket";
import { RootState } from "../../../store/store";

export const MyMoney = () => {
  const [money, setMoney] = useState(0);
  const userItem = useSelector((state: RootState) => state.userItem);

  // console.log(userItem.money);
  useEffect(() => {
    setMoney(userItem.money);
  }, [setMoney, userItem]);

  socket.on("current_user", (data: any) => {
    setMoney(data.money);
  });
  return (
    <div className="myMoney">
      <img src={moneyBagImg} alt="money-bag" />
      <p>{`${money} $`}</p>
    </div>
  );
};
