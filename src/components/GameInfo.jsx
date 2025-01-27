export default function GameInfo({ state }) {
  return (
    <section className="min-w-72 flex flex-wrap justify-between sm:w-2/3">
      <p className="text-2xl">
        {state.allMatchesFound
          ? "All matches found!"
          : `Matches: ${state.matches}`}
      </p>
      <p className="text-2xl">Moves: {state.moves}</p>
    </section>
  );
}
