"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({ reset }: { reset: () => void }) {

  const router = useRouter();
  const reload = () => {
    startTransition(() => { // Using startTransition prevents React from blocking the UI while retrying.
      router.refresh(); // Useful if the error happened because of temporary bad data., also fetches fresh server data 
      reset();
    });
  };
  return (
    <div>
      <button onClick={() => reload()} className="border-white p-2 border-4">
        try againnn
      </button>
    </div>
  );
}


  // this component receievs the error object as the prop 
  // ({error}:{error : Error})
  //{error.message}
  // reset function type is a function that returns void 


// When the button is clicked:
// Refresh server data
// Tell the error boundary to retry rendering
// React performs it as a transition


// reset() alone: Retries rendering with the same data.
// router.refresh();  Fetches fresh server data.

// the button gives the user a way to recover from an error by fetching fresh server data and 
// asking Next.js to render the failed route again.