import { formatDistance } from "date-fns";
import { useState, useEffect } from "react";
import { useHarmonicIntervalFn, useInterval } from "react-use";

export default function Home() {
  let [lastClicked, setLastClicked] = useState();

  let handleClick = () => {
    setLastClicked(new Date());
  };

  return (
    <div className="text-center">
      <div className="text-xl font-medium">
        <span className="text-gray-500">Last clicked: </span>
        {lastClicked && lastClicked.toString()}
      </div>
      <button
        type="button"
        className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleClick}
      >
        Click me!
      </button>
    </div>
  );
}
