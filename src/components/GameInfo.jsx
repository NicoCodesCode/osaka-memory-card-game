export default function GameInfo({ state }) {
  return (
    <section className="min-w-72 mx-auto flex flex-wrap justify-between sm:w-2/3">
      <p className="text-2xl font-bold text-center text-daioh-yellow">
        {state.allMatchesFound
          ? "All matches found!"
          : `Matches: ${state.matches}`}
      </p>
      <p className="text-2xl font-bold text-center text-daioh-yellow">
        Moves: {state.moves}
      </p>
    </section>
  );
}
