"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className="mt-4 text-2xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-2xl sm:leading-[3.5rem]">
        Error: {error.message}
      </h2>
      <button
        className="inline-flex justify-center rounded-lg bg-amber-500 mt-3 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try Again
      </button>
    </div>
  );
}
