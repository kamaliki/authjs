export default function AboutPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h2 className="text-4xl font-bold text-center">About me</h2>
          <a href="/blog" className="text-2xl text-center">
            Go to the blog
          </a>
          <a href="/settings" className="text-2xl text-center">
            Go to the settings
          </a>
          <a href="/" className="text-2xl text-center">
            Go to the home page
          </a>
        </div>
        <div className="flex min-h-screen flex-col items-center font-mono justify-between p-24">
          <p>My name is Kévin and I am a student in computer science.</p>
          <p>I am currently studying at the University of Paris 8.</p>
          <p>
            I am passionate about computer science and I am always looking for
            new things to learn.
          </p>
          <p>
            I am currently learning Next.js and I am very happy to learn it.
          </p>
          <p>I am also learning TypeScript and I am very happy to learn it.</p>
        </div>
      </main>
    </>
  );
}
