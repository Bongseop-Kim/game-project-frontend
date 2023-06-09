import store from "../../assets/store.png";
import wrench from "../../assets/wrench.png";
import excavator from "../../assets/excavator.png";
import drill from "../../assets/drill.png";
import jackpot from "../../assets/jackpot-machine.png";
import pickaxe from "../../assets/pickaxe.png";
import robot from "../../assets/robot.png";
import { socket } from "../../socket/socket";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

export const StoreSide = () => {
  const userItem = useSelector((state: RootState) => state.userItem);

  const itemList = [
    { img: wrench, power: 1, price: 100 },
    { img: pickaxe, power: 1, price: 100 },
    { img: drill, power: 1, price: 100 },
    { img: excavator, power: 1, price: 100 },
    { img: robot, power: 1, price: 100 },
  ];

  const buyTool = (power: number, price: number) => {
    socket.emit("buyTool", { id: userItem.id, money: price, strong: power }, (error: string) => {
      alert("돈이 부족합니다.");
    });
  };

  return (
    <div className="storeContent">
      <img src={store} alt="store" />
      <div>
        {itemList.map((arg, i) => {
          return (
            <div
              className="itemList"
              key={i}
              onClick={(e) => {
                e.preventDefault();
                buyTool(arg.power, arg.price);
              }}
            >
              <div className="item">
                <img src={arg.img} alt="tool" />
                <div>
                  <div>power + {arg.power} </div>
                  <div>price {arg.price} $</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img src={jackpot} alt="jackpot" />
    </div>
  );
};
