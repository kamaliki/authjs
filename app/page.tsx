"use client";
import Image from "next/image";
import { signIn, signOut  } from "next-auth/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h2 className="text-4xl font-bold text-center">Welcome to my blog !</h2>

        <div className="flex min-h-screen flex-col items-center font-mono justify-between p-24">
          <a href="/blog" className="text-2xl text-center">
            Go to the blog
          </a>
          <a href="/settings" className="text-2xl text-center">
            Go to the settings
          </a>
          <a href="/about" className="text-2xl text-center">
            Go to the about me
          </a>
        </div>

        <div className="flex min-h-screen flex-col items-center font-mono justify-between p-24">
          
        <button
          className="text-2xl text-center"
          onClick={() => signIn("google")}
        >
          Sign in
        </button>

        <button
          className="text-2xl text-center"
          onClick={() => signOut()}
        >
          Sign out
        </button>
        </div>


      </div>
    </main>
  );
}
