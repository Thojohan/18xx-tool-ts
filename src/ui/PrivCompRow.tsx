import { PrivType } from "../utilities/types";

function PrivCompRow({
  privComp,
  currencySymbol,
}: {
  privComp: PrivType;
  currencySymbol: string;
}) {
  return (
    <div className="flex flex-col py-4 bg-zinc-100 p-6 dark:bg-zinc-900">
      <p className="font-semibold flex justify-between">
        <span>{privComp.name}</span>
        <span>{privComp.sym}</span>
      </p>{" "}
      <p className="flex justify-between">
        <span>
          Value: {currencySymbol}
          {privComp.value}
        </span>
        <span>
          Revenue: {currencySymbol}
          {privComp.revenue}
        </span>
      </p>
      {privComp.desc && <p className="text-sm mt-2">{privComp.desc}</p>}
    </div>
  );
}

export default PrivCompRow;
