import { MyMoney } from "./atoms/myMoney";
import { TouchCards } from "./atoms/touchCards";

export const MainSide = () => {
  return (
    <div className="mainContent">
      <MyMoney></MyMoney>
      <TouchCards></TouchCards>
    </div>
  );
};
