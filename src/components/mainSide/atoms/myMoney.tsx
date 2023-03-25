import { useSelector } from "react-redux";
import moneyBagImg from "../../../assets/money-bag.png";
import { RootState } from "../../../store/store";

export const MyMoney = () => {
  const userItem = useSelector((state: RootState) => state.userItem);
  return (
    <div className="myMoney">
      <img src={moneyBagImg} alt="money-bag" />
      <p>{`${userItem.money} $`}</p>
    </div>
  );
};
