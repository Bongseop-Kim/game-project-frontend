import { useState } from "react";
import moneyBagImg from "../../../assets/money-bag.png";
import { socket } from "../../../socket/socket";

export const MyMoney = () => {
  const [money, setMoney] = useState(0);
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
