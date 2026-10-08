"use client"; // error wrapper is a client component 


import { useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}
// In TypeScript, an interface is like a blueprint or contract for an object.
// is just describing the shape of the props object.
// "This component expects a prop named children, and it can contain React elements."

const ErrorSimulator = ({ // error simulator component a outline with a button to simulate an error at root level 
  message = "An error occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button
      title="Simulate an error"
      className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-sm hover:bg-red-900 transition"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>  // to throw error 
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
      <div className="absolute top-0 left-4 -translate-y-1/2">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      {children} 
    </div>
  );
};