import { formatDistanceStrict } from "date-fns";
import { useInterval, useSynchronizedInterval } from "interval-hooks";
import { useState } from "react";

let useClock = () => {
  let [now, setNow] = useState(new Date());

  useSynchronizedInterval(() => {
    setNow(new Date());
  }, 1000);

  return now;
};

export default function Home() {
  let [lastClicked, setLastClicked] = useState();

  let now = useClock();

  let handleClick = () => {
    setLastClicked(now);
  };

  return (
    <div className="mb-32 text-center">
      <div className="text-xl font-medium">
        <span className="text-gray-500">Last clicked: </span>
        {lastClicked &&
          formatDistanceStrict(lastClicked, now, {
            unit: "second",
            addSuffix: true,
          })}
      </div>
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 mt-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleClick}
      >
        Click me!
      </button>
    </div>
  );
}
