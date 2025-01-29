import { useState, useEffect } from "react";

import { ACTIONS } from "../cardsReducer";

export default function Card(props) {
  const [isCardShowed, setIsCardShowed] = useState(false);

  useEffect(() => {
    if (
      props.state.flippedCards === 0 &&
      !props.state.matchedCardsNames.includes(props.name)
    ) {
      setIsCardShowed(false);
    }
  }, [props.state.flippedCards]);

  const flipCard = () => {
    if (props.state.flippedCards < 2 && !isCardShowed) {
      props.dispatch({
        type: ACTIONS.FLIP_CARD,
        payload: { name: props.name },
      });
      setIsCardShowed(true);
    }
  };

  return (
    <div onClick={flipCard} className="relative">
      <img
        src={props.imgSource}
        alt="osaka image"
        className="max-w-24 border-2 border-slate-300 rounded-md cursor-pointer select-none sm:max-w-36"
      />
      <div
        className={`w-24 h-24 bg-slate-900 text-slate-50 text-2xl border border-slate-900 rounded-md cursor-pointer flex justify-center items-center ${
          isCardShowed ? "hidden" : "flex"
        } absolute top-0 select-none sm:w-36 sm:h-36 sm:text-4xl`}
      >
        ?
      </div>
    </div>
  );
}
