import "tailwindcss/tailwind.css";
import Head from "next/head";
import { useEffect, useReducer } from "react";

function MyApp({ Component, pageProps }) {
  let [state, rerender] = useReducer((s) => s + 1, 0);

  useEffect(() => {
    window.rerender = rerender;
  });

  return (
    <div>
      <Head>
        <title>Clocks</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="p-8 max-w-7xl mx-auto font-sans">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
