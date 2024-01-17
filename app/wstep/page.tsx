import Hero from "@/components/Hero";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Hero title="Wstęp" imgUrl="wstep_hero.webp" />
      <div className="p-3 w-3/4 mx-auto">
        <h2 className="text-4xl font-bold">Witamy!</h2>
        Wstęp

        To jest strona na której już jesteś. Tutaj będzie wyjaśnione do czego każda opcja służy!
        Cluster-Ai

        Cluster-AI to jest sztuczna inteligencja bazowana na mistral ai z klasterm beowulf'a, która jest postawiona w tym komputerze!
        Autorzy

        W tej sekcji zobaczysz autorów tego projektu.
      </div>
    </div>
  )
}