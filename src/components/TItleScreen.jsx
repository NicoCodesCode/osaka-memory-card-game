import LinkButton from "./LinkButton";

export default function TitleScreen() {
  return (
    <main className="min-w-full min-h-full bg-gradient-to-b from-orange-400 to-orange-600 flex justify-center items-center fixed top-0 left-0">
      <article className="max-w-2/3 mx-auto p-8 flex flex-col gap-8 items-center">
        <img
          src="/assets/azumanga-logo.png"
          alt="azumanga daioh logo"
          className="absolute max-w-56 top-8 left-1/2 transform -translate-x-1/2 md:top-8 md:left-4 md:translate-x-0"
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-daioh-yellow py-2 z-10">
          Osaka Memory Card Game
        </h1>
        <LinkButton path="/play">Play</LinkButton>
        <img
          src="/assets/title-osaka.png"
          alt="osaka menu image"
          className="absolute bottom-0 opacity-75 md:max-w-80"
        />
      </article>
    </main>
  );
}
