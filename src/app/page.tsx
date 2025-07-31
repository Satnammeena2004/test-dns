
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-[32px] sm:text-[48px] font-bold text-center sm:text-left"> 
            Satnam Meena
          </h1>
          <p className="text-[16px] sm:text-[20px] text-center sm:text-left">
            This is a brief introduction about Satnam Meena.
          </p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
