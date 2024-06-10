import RevenueTrackerElement from "../ui/RevenueTrackerElement";

function RevenueTracker() {
  const arr = new Array(99).fill(null).map((_, i) => i + 1);

  return (
    <div>
      <header className="font-secondary text-center">
        <h1 className="text-2xl">Game Info </h1>
        <p className="mx-6 mt-2 mb-8">
          Helps calculate the dividends for X shares from 1-9 for any revenue
          1-99. Example: If your corporation runs for 160 and you have 7 shares,
          find the 16-spot on the chart and look at the seventh position running
          clockwise from top right to find the correct value of 112.
        </p>
      </header>
      <section className="flex gap-2 w-[95%] flex-wrap pb-10">
        {arr.map((numb, i) => (
          <RevenueTrackerElement numb={numb} key={i} />
        ))}
      </section>
    </div>
  );
}

export default RevenueTracker;
