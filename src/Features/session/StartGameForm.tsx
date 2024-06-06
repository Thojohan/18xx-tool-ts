import { useEffect, useRef, useState } from "react";
import { selectorSteps } from "../../services/Utility.ts";
import Button from "../../ui/Button.tsx";
import FormInput from "../../ui/FormInput.tsx";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getGames } from "../../services/apiGames.ts";
import { selectGame, sessionObject, startOngoing } from "./sessionSlice";
import { useAppDispatch, useAppSelector } from "../../hooks.ts";

function StartGameForm() {
  const dispatch = useAppDispatch();
  const selectedGame = useAppSelector(selectGame);
  const { register, handleSubmit, reset, formState } = useForm();
  const inputValuesArray = useRef([] as number[]);
  const [count, setCount] = useState(0);
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

  const playerCountArray = selectorSteps(
    gameObject.playerCountFrom,
    gameObject.playerCountTo
  );
  const bestCountArray = selectorSteps(
    gameObject.bestPlayerCountFrom,
    gameObject.bestPlayerCountTo
  );
  console.log(playerCountArray);

  inputValuesArray.current = selectorSteps(1, +count);

  useEffect(() => {
    setCount(+gameObject.playerCountFrom);
    inputValuesArray.current = selectorSteps(1, +gameObject.playerCountFrom);
  }, [gameObject]);

  function submitFunc(data: object) {
    dispatch(startOngoing());
    dispatch(sessionObject(data));
  }

  function errorFunc(err: unknown) {
    if (err?.message) console.log(err?.message);
  }

  return (
    <form onSubmit={handleSubmit(submitFunc, errorFunc)}>
      <input
        type="hidden"
        value={gameObject.gameName}
        {...register("gameName", {
          required: "This field is required",
        })}
      />
      <div className="flex space-x-4 justify-center">
        <span>Chose player count </span>

        <select
          className="border-zinc-800 dark:border-zinc-200 border-solid border-2 rounded-lg bg-zinc-100 text-zinc-800 dark:text-zinc-200 dark:bg-zinc-800"
          value={count}
          {...register("playerCount", {
            required: "This field is required",
          })}
          onChange={(e) => setCount(+e.target.value)}
        >
          {playerCountArray.map((pCount) => (
            <option
              className={
                bestCountArray.find((e) => e === pCount)
                  ? "bg-green-100 dark:bg-green-900"
                  : "bg-zinc-100 dark:bg-zinc-800"
              }
              key={pCount}
              value={pCount}
            >
              {pCount} players
            </option>
          ))}
        </select>
        <span>
          (Best player count(s) according to BGG voters marked in{" "}
          <span className="bg-green-100 dark:bg-green-900">green</span>)
        </span>
      </div>
      <div className="flex flex-col space-y-4 my-6">
        {inputValuesArray.current.map((_el, i) => (
          <FormInput
            key={i}
            register={{
              ...register(`player${i}`, {
                required: "This field is required",
              }),
            }}
          >
            Type player name
          </FormInput>
        ))}
      </div>
      <Button variant="primary" type="submit">
        Start game
      </Button>
    </form>
  );
}

export default StartGameForm;
