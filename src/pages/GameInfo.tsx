import GameSelectedHeader from "../ui/GameSelectedHeader";
import { getGames } from "../services/apiGames";
import { useQuery } from "@tanstack/react-query";
import GameMetrics from "../ui/GameMetrics";
import PhaseTable from "../ui/PhaseTable";
import TrainTable from "../ui/TrainTable";
import { useAppSelector } from "../hooks";
import { selectGame } from "../Features/session/sessionSlice";
import Spinner from "../ui/Spinner";
import ErrorMessage from "../ui/ErrorMessage";

function GameInfo() {
  const selectedGame = useAppSelector(selectGame);
  const {
    data: games,
    isLoading,
    error,
  } = useQuery({
    queryFn: getGames,
    queryKey: ["games"],
  });
  const gameObject = games?.find(
    (el: { id: number }) => el.id === +selectedGame
  );
  const phases = gameObject?.phasesJSON;
  const trains = gameObject?.trainsJSON;

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
    <div className="pb-12 space-y-8">
      <header className="font-secondary text-center">
        <h1 className="text-2xl">Game Info </h1>
        <GameSelectedHeader condition={gameObject} gameObject={gameObject} />
      </header>
      {gameObject && <GameMetrics gameObject={gameObject} />}
      {phases && Object.keys(phases).length > 0 && (
        <PhaseTable phases={phases} />
      )}
      {trains && Object.keys(trains) && (
        <TrainTable
          trains={trains}
          currencySymbol={gameObject.currencySymbol}
        />
      )}
    </div>
  );
}

export default GameInfo;
