import { getGames } from "../services/apiGames.ts";
import { useQuery } from "@tanstack/react-query";
import GameSelectedHeader from "../ui/GameSelectedHeader.tsx";
import PrivCompRow from "../ui/PrivCompRow.tsx";
import CorpRow from "../ui/CorpRow.tsx";
import MinorRow from "../ui/MinorRow.tsx";
import { useAppSelector } from "../hooks";
import { selectGame } from "../Features/session/sessionSlice";
import { CorpType, MinorType, PrivType } from "../utilities/types.ts";
import Spinner from "../ui/Spinner.tsx";
import ErrorMessage from "../ui/ErrorMessage.tsx";

function Companies() {
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
    (el: { id: number }) => +el.id === +selectedGame
  );
  const privates = gameObject?.privatesJSON;
  const corps = gameObject?.companiesJSON;
  const minors = gameObject?.minorsJSON;

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
    <div className="flex flex-col space-y-8 pb-12">
      <header className="font-secondary text-center">
        <h1 className="text-2xl">Companies, Privates and Minors</h1>
        <GameSelectedHeader
          condition={corps || privates || minors}
          gameObject={gameObject}
        />
      </header>
      {privates && Object.keys(privates).length > 0 && (
        <div className="grid grid-cols-3 gap-4 mr-4">
          {privates.map((privComp: PrivType, i: number) => (
            <PrivCompRow
              key={i}
              currencySymbol={gameObject.currencySymbol}
              privComp={privComp}
            />
          ))}
        </div>
      )}
      {corps && Object.keys(corps).length > 0 && (
        <div className="grid grid-cols-3 gap-4 mr-4">
          {corps.map((corp: CorpType, i: number) => {
            return <CorpRow key={i} corp={corp} />;
          })}
        </div>
      )}
      {minors && Object.keys(minors).length > 0 && (
        <div className="grid grid-cols-3 gap-4 mr-4">
          {minors.map((minor: MinorType, i: number) => {
            return <MinorRow key={i} minor={minor} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Companies;
