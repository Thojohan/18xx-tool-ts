import Button from "../../ui/Button.tsx";
import { BsExclamationTriangle } from "react-icons/bs";
import { deleteGame } from "../../services/apiGames.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import WarningToast from "../../ui/WarningToast.tsx";
import toast from "react-hot-toast";
import { selectGame, setSelectedGame } from "../session/sessionSlice.ts";
import { useAppDispatch, useAppSelector } from "../../hooks.ts";

function DeleteGame() {
  const dispatch = useAppDispatch();
  const selectedGame = useAppSelector(selectGame);
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: deleteGame,
    onSuccess: () => {
      toast.success("Game successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["games"],
      });
      dispatch(setSelectedGame(""));
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function clickHandler(game: number) {
    toast((t) => (
      <WarningToast
        yesHandler={() => {
          toast.dismiss(t.id);
          mutate(game);
        }}
        noHandler={() => {
          toast.dismiss(t.id);
        }}
      >
        Sure you want to delete this game permanently?
      </WarningToast>
    ));
  }

  return (
    <div className="flex justify-center mb-12 mr-32">
      <Button
        variant="primary"
        type="button"
        clickHandler={() => clickHandler(+selectedGame)}
        disabled={!selectedGame || isPending}
      >
        <p className="flex items-center">
          <BsExclamationTriangle className="text-red-800 dark:text-red-400" />
          <span className="m-2">Delete selected game </span>
          <BsExclamationTriangle className="text-red-800 dark:text-red-400" />
        </p>
      </Button>
    </div>
  );
}

export default DeleteGame;
