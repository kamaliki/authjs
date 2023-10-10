"use client";

import { useState } from "react";

export default function BlogPage() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">Blog</h1>
        <p className="text-2xl">Count: {count}</p>
        <button className="text-xl" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>

      <a href="/" className="text-2xl font-bold font-mono text-center">
        Go to the home page
      </a>
    </main>
  );
}
