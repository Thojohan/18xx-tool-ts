import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../hooks";
import { selectGame, selectSession } from "../Features/session/sessionSlice";
import { getGames } from "../services/apiGames";
import Spinner from "../ui/Spinner";
import ErrorMessage from "../ui/ErrorMessage";
import { PlayerSessionType } from "../utilities/types";
import { CorpType } from "../utilities/types";
import GameSelectedHeader from "./GameSelectedHeader";

function EndGameTable() {
  const selectedGame = useAppSelector(selectGame);
  const session = useAppSelector(selectSession);
  console.log(session);
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

  const playersArray = Object.keys(session)
    .filter((el) => parseInt(el))
    .map((el) => session[`${el}` as keyof object] as PlayerSessionType);

  const corpsArray: CorpType[] = gameObject?.companiesJSON;
  console.log(corpsArray);
  console.log(playersArray);

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
      <table className="w-[95%]">
        <caption className="bg-zinc-300 text-lg dark:bg-zinc-700">
          Holdings per player
        </caption>
        <thead>
          <tr className="font-semibold bg-zinc-200 dark:bg-zinc-900">
            <th className="w-[30%]">Company</th>
            {playersArray.map((el, i) => (
              <th key={i}>{el.playerName}</th>
            ))}
          </tr>
        </thead>
        <tbody className="gap-4">
          {corpsArray.map((el, i) => (
            <tr
              key={i}
              style={{
                backgroundColor: `rgba(from ${el.color} r g b /0.4)`,
              }}
            >
              <td className="pl-6">{el.name}</td>
            </tr>
          ))}
          <tr>
            <td className="pl-6 dark:bg-zinc-900">Cash on hand</td>
          </tr>
          <tr className="bg-zinc-200 font-semibold dark:bg-zinc-800">
            <td className="pl-6">Total value</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EndGameTable;
