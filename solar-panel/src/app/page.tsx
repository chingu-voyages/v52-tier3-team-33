export default function Home(): React.ReactNode {
  return (
    <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
        <li>Welcome to Solar Panel App</li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </main>
  );
}
