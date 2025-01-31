import { useEffect, useReducer } from "react";
import Card from "./Card";
import GameInfo from "./GameInfo";
import { cardsReducer, ACTIONS } from "../cardsReducer";

const initialState = {
  cards: [],
  moves: 0,
  flippedCards: 0,
  flippedCardsNames: [],
  matches: 0,
  matchedCardsNames: [],
  allMatchesFound: false,
};

export default function MemoryGame() {
  const [state, dispatch] = useReducer(cardsReducer, initialState);

  useEffect(() => {
    const images = [
      "osaka2",
      "osaka3",
      "osaka4",
      "osaka5",
      "osaka8",
      "osaka2",
      "osaka3",
      "osaka4",
      "osaka5",
      "osaka8",
    ];

    dispatch({ type: ACTIONS.SHUFFLE_CARDS, payload: { images: images } });
  }, []);

  useEffect(() => {
    if (state.flippedCards === 2) {
      dispatch({ type: ACTIONS.MOVE });

      if (state.flippedCardsNames[0] === state.flippedCardsNames[1]) {
        dispatch({ type: ACTIONS.MATCH });
      }

      const hideCardsTimeout = setTimeout(
        () => dispatch({ type: ACTIONS.HIDE_CARDS }),
        1000
      );

      return () => {
        clearTimeout(hideCardsTimeout);
      };
    }
  }, [state.flippedCards]);

  useEffect(() => {
    if (state.matches * 2 === state.cards.length && state.matches > 0) {
      dispatch({ type: ACTIONS.END_GAME });
    }
  }, [state.matches]);

  return (
    <main className="min-w-screen min-h-screen bg-gradient-to-b from-orange-400 to-orange-600 flex justify-center items-center">
      <article className="w-5/6 mx-auto p-8 flex flex-col gap-8 items-center">
        {state.cards.length > 0 ? (
          <>
            <section className="max-w-72 flex flex-wrap justify-center gap-4 sm:max-w-4xl">
              {state.cards.map((card, index) => (
                <Card
                  key={`${card}-${index}`}
                  imgSource={`/assets/${card}.jpg`}
                  name={card}
                  dispatch={dispatch}
                  state={state}
                />
              ))}
            </section>
            <GameInfo state={state} />
          </>
        ) : (
          <p className="text-4xl">Loading...</p>
        )}
      </article>
    </main>
  );
}
