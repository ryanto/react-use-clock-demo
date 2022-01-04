import { formatDistance } from "date-fns";
import { useState, useEffect } from "react";
import { useInterval } from "interval-hooks";

export default function Home() {
  let [lastClicked, setLastClicked] = useState();

  let handleClick = () => {
    setLastClicked(new Date());
  };

  return (
    <div className="mb-32 text-center">
      <div className="text-xl font-medium">
        <span className="text-gray-500">Last clicked: </span>
        {lastClicked && lastClicked.toString()}
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
