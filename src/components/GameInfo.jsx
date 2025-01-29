export default function GameInfo({ state }) {
  return (
    <section className="max-w-32 flex flex-wrap justify-center sm:min-w-96 sm:justify-between">
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
