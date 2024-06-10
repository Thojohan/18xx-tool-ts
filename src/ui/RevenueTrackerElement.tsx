function RevenueTrackerElement({ numb }: { numb: number }) {
  const isRound = numb % 5 === 0;
  console.log(isRound);
  return (
    <div
      className={`grid w-32 h-32 grid-rows-10 grid-cols-11 gap-1 p-1 shadow-sm shadow-zinc-700 dark:shadow-zinc-300 ${
        isRound && "bg-zinc-200 dark:bg-zinc-700"
      }`}
    >
      <p className="col-start-4 col-span-2 row-start-4 row-span-3 text-5xl text-center font-semibold">
        {numb}
      </p>
      <p className="col-start-10 row-start-1 text-center text-xs font-semibold">
        {numb}
      </p>
      <p className="col-start-10 row-start-3 text-center text-xs font-semibold">
        {numb * 2}
      </p>
      <p className="col-start-10 row-start-5 text-center text-xs font-semibold">
        {numb * 3}
      </p>
      <p className="col-start-10 row-start-7 text-center text-xs font-semibold">
        {numb * 4}
      </p>
      <p className="col-start-10 row-start-9 text-center text-xs font-semibold">
        {numb * 5}
      </p>
      <p className="col-start-10 row-start-11 text-center text-xs font-semibold">
        {numb * 6}
      </p>
      <p className="col-start-7 row-start-11 text-center text-xs font-semibold">
        {numb * 7}
      </p>
      <p className="col-start-4 row-start-11 text-center text-xs font-semibold">
        {numb * 8}
      </p>
      <p className="col-start-1 row-start-11 text-center text-xs font-semibold">
        {numb * 9}
      </p>
    </div>
  );
}

export default RevenueTrackerElement;
