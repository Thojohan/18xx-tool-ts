import StartGameForm from "./StartGameForm.tsx";
import GameSelectedHeader from "../../ui/GameSelectedHeader.tsx";
import { useQuery } from "@tanstack/react-query";
import { getGames } from "../../services/apiGames.ts";

import { selectGame } from "./sessionSlice";
import { useAppSelector } from "../../hooks";
import Spinner from "../../ui/Spinner.tsx";
import ErrorMessage from "../../ui/ErrorMessage.tsx";

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

  if (isLoading)
    return (
      <div className="pb-12 space-y-8 pt-32">
        <Spinner />
      </div>
    );

  if (error)
    return (
      <div className="pb-12 space-y-8 pt-32">
        <ErrorMessage errorMsg={error?.message} />
      </div>
    );
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
