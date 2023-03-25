import log from "../../../assets/log.png";
import diamond from "../../../assets/diamond.png";
import stone from "../../../assets/stone.png";
import { useDispatch } from "react-redux";
import { setMoney } from "../../../services/userItem";

export const TouchCards = () => {
  const dispatch = useDispatch();
  const cards = [
    { src: log, time: 1000, reward: 1 },
    { src: diamond, time: 10000, reward: 2 },
    { src: stone, time: 100000, reward: 3 },
  ];
  return (
    <div className="touchCards">
      {cards.map((card, i) => {
        return (
          <div
            key={i}
            className="card"
            onClick={(e) => {
              e.preventDefault();
              dispatch(setMoney(card.reward));
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
