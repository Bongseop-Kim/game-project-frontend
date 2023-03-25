import { MainSide } from "../components/mainSide/mainSide";
import { StoreSide } from "../components/storeSide/storeSide";
import { UserSide } from "../components/userSide/userSide";

export const MainPage = () => {
  return (
    <div className="mainpage">
      <StoreSide></StoreSide>
      <MainSide></MainSide>
      <UserSide></UserSide>
    </div>
  );
};
