const ACTIONS = {
  SHUFFLE_CARDS: "shuffle-cards",
  FLIP_CARD: "flip-card",
  MOVE: "move",
  HIDE_CARDS: "hide-cards",
  MATCH: "match",
  END_GAME: "end-game",
};

function cardsReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SHUFFLE_CARDS:
      for (let i = action.payload.images.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [action.payload.images[i], action.payload.images[j]] = [
          action.payload.images[j],
          action.payload.images[i],
        ];
      }
      return { ...state, cards: action.payload.images };

    case ACTIONS.FLIP_CARD:
      return {
        ...state,
        flippedCards: state.flippedCards + 1,
        flippedCardsNames: [...state.flippedCardsNames, action.payload.name],
      };

    case ACTIONS.MOVE:
      return { ...state, moves: state.moves + 1 };

    case ACTIONS.HIDE_CARDS:
      return {
        ...state,
        flippedCards: 0,
        flippedCardsNames: [],
      };

    case ACTIONS.MATCH:
      return {
        ...state,
        matches: state.matches + 1,
        matchedCardsNames: [
          ...state.matchedCardsNames,
          state.flippedCardsNames[0],
        ],
      };

    case ACTIONS.END_GAME:
      return { ...state, allMatchesFound: true };

    default:
      return state;
  }
}

export { cardsReducer, ACTIONS };
