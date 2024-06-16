import { getGames } from "../services/apiGames";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";
import toast from "react-hot-toast";
import WarningToast from "./WarningToast";
import {
  selectIsOngoing,
  selectGame,
  setSelectedGame,
  stopOngoing,
} from "../Features/session/sessionSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

function Sidebar() {
  const dispatch = useAppDispatch();
  const isOngoing = useAppSelector(selectIsOngoing);
  const selectedGame = useAppSelector(selectGame);

  const {
    data: games,
    isLoading,
    error,
  } = useQuery({
    queryFn: getGames,
    queryKey: ["games"],
  });

  function statusHandler(
    gameID: string,
    selectedGameID: string,
    ongoing: boolean
  ) {
    if (+gameID === +selectedGameID && ongoing === false) return "selected";
    if (+gameID === +selectedGameID && ongoing === true) return "active";
    return "";
  }

  console.log(games);

  function choseGame(e: unknown) {
    const eventTarget = (e as Event).target as HTMLInputElement;
    const gameID = eventTarget.id;
    if (isOngoing) {
      toast((t) => (
        <WarningToast
          yesHandler={() => {
            toast.dismiss(t.id);
            dispatch(setSelectedGame(selectedGame === gameID ? "" : gameID));
            dispatch(stopOngoing());
          }}
          noHandler={() => {
            toast.dismiss(t.id);
          }}
        >
          NB: This will terminate the current game session
        </WarningToast>
      ));
    }
    if (isOngoing === false) {
      dispatch(setSelectedGame(selectedGame === gameID ? "" : gameID));
    }
  }

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage errorMsg={error?.message} />;

  return (
    <aside className="w-full h-full pl-4 text-md font-secondary pt-4 flex flex-col pr-2">
      {games?.map((game, i) => (
        <Button
          key={i}
          variant="listItem"
          type="button"
          id={game.id}
          clickHandler={choseGame}
          status={statusHandler(game.id, selectedGame, isOngoing)}
        >
          {game.gameName}
        </Button>
      ))}
    </aside>
  );
}

export default Sidebar;
