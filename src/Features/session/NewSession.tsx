import StartGameForm from "./StartGameForm.tsx";
import GameSelectedHeader from "../../ui/GameSelectedHeader.tsx";
import { useQuery } from "@tanstack/react-query";
import { getGames } from "../../services/apiGames.ts";

import { selectGame } from "./sessionSlice";
import { useAppSelector } from "../../hooks";

function NewSession() {
  const selectedGame = useAppSelector(selectGame);

  // const { uiState } = useContext(UiContext);
  const {
    data: games,
    isLoading,
    error,
  } = useQuery({
    queryFn: getGames,
    queryKey: ["games"],
  });

  const gameObject =
    games?.find((el: { id: number }) => +el.id === +selectedGame) || [];

  return (
    <>
      <header className=" font-secondary text-center">
        <h1 className="text-2xl">Start a new session</h1>
        <GameSelectedHeader condition={selectedGame} gameObject={gameObject} />
      </header>

      {Object.keys(gameObject).length > 1 && <StartGameForm />}
    </>
  );
}

export default NewSession;
