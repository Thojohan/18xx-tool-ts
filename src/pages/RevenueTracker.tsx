import RevenueTrackerElement from "../ui/RevenueTrackerElement";

function RevenueTracker() {
  const arr = new Array(99).fill(null).map((_, i) => i + 1);

  console.log(arr);
  return (
    <div className="flex gap-2 w-[95%] flex-wrap pb-10">
      {arr.map((numb, i) => (
        <RevenueTrackerElement numb={numb} key={i} />
      ))}
    </div>
  );
}

export default RevenueTracker;
