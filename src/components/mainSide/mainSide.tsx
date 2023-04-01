import { MyMoney } from "./components/myMoney";
import { TouchCards } from "./components/touchCards";

export const MainSide = () => {
  return (
    <div className="mainContent">
      <MyMoney></MyMoney>
      <TouchCards></TouchCards>
    </div>
  );
};
