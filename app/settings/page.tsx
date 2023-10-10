//create a component that shows the loggin user information

export default function Settings() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h2 className="text-4xl font-bold text-center">Settings</h2>
        <a href="/blog" className="text-2xl text-center">
          Go to the blog
        </a>
        <a href="/" className="text-2xl text-center">
          Go to the home page
        </a>
      </div>
      <div className="flex min-h-screen flex-col items-center font-mono justify-between p-24">
        Logged in as: <span className="font-bold">user</span>
      </div>
      </main>
    </>
  );
}
