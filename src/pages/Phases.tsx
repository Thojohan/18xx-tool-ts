import GameSelectedHeader from "../ui/GameSelectedHeader";
import { useQuery } from "@tanstack/react-query";
import { getGames } from "../services/apiGames";
import PhaseTable from "../ui/PhaseTable";
import TrainTable from "../ui/TrainTable";
import { useAppSelector } from "../hooks";
import { selectGame } from "../Features/session/sessionSlice";

function Phases() {
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

  return (
    <div className="flex flex-col gap-12 pb-12">
      <header className="font-secondary text-center">
        <h1 className="text-2xl">Game Phases & Train Roster</h1>
        <GameSelectedHeader condition={phases} gameObject={gameObject} />
      </header>

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

export default Phases;
