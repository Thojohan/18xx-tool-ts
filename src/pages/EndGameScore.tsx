import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../hooks";
import { selectGame, selectSession } from "../Features/session/sessionSlice";
import { getGames } from "../services/apiGames";
import GameSelectedHeader from "../ui/GameSelectedHeader";
import Spinner from "../ui/Spinner";
import ErrorMessage from "../ui/ErrorMessage";

function CalcScore() {
  const selectedGame = useAppSelector(selectGame);
  const session = useAppSelector(selectSession);

  const {
    data: games,
    isLoading,
    error,
  } = useQuery({
    queryFn: getGames,
    queryKey: ["games"],
  });

  const gameObject = games?.find(
    (el: { id: number }) => +el.id === +selectedGame
  );

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
    <div>
      <header className="font-secondary text-center">
        <h1 className="text-2xl">Calculate value</h1>
        <GameSelectedHeader condition={gameObject} gameObject={gameObject} />
      </header>
      <table>
        <thead>
          <tr className=" text-l font-semibold">
            <th>Company name</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default CalcScore;
