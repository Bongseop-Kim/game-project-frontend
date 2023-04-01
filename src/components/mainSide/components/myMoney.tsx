import { useDispatch, useSelector } from "react-redux";
import moneyBagImg from "../../../assets/money-bag.png";
import { setMoney, setStrong } from "../../../services/userItem";
import { socket } from "../../../socket/socket";
import { RootState } from "../../../store/store";

export const MyMoney = () => {
  const dispatch = useDispatch();
  const userItem = useSelector((state: RootState) => state.userItem);

  socket.on("current_user", (data: any) => {
    dispatch(setMoney(data.money));
    dispatch(setStrong(data.strong));
  });
  return (
    <div className="myMoney">
      <img src={moneyBagImg} alt="money-bag" />
      <p>{`${userItem.money} $`}</p>
    </div>
  );
};
