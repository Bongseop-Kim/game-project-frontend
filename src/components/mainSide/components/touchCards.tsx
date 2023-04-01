import log from "../../../assets/log.png";
import diamond from "../../../assets/diamond.png";
import stone from "../../../assets/stone.png";
import { useSelector } from "react-redux";
import { socket } from "../../../socket/socket";
import { RootState } from "../../../store/store";

const cards = [
  { src: log, time: 1000, reward: 1 },
  { src: diamond, time: 10000, reward: 2 },
  { src: stone, time: 100000, reward: 3 },
];

export const TouchCards = () => {
  const userItem = useSelector((state: RootState) => state.userItem);

  const plusMoney = (money: number) => {
    socket.emit("plusMoney", { id: userItem.id, money: money }, (data: any) => {});
  };

  return (
    <div className="touchCards">
      {cards.map((card, i) => {
        return (
          <div
            key={i}
            className="card"
            onClick={(e) => {
              e.preventDefault();
              plusMoney(card.reward);
            }}
          >
            <img src={card.src} alt="cardimgae" />
            <div>{`time : ${card.time / 1000}sec`}</div>
            <div>{`reward : ${card.reward}`}</div>
          </div>
        );
      })}
    </div>
  );
};
