import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="conteneur1">
        <h1 className={`mb-3 text-2xl font-semibold`}>Exemple height:100vh</h1>
        <button className="text-xl font-semibold">Cliquez ici</button>
      </div>
      <div className="conteneur2"></div>
    </main>
  );
}
