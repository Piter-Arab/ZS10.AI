import Hero from "@/components/Hero";
import ArticleLatest from "@/components/layout/ArticleLatest";

export default function Home() {
  return (
    <main className="w-full">
      <Hero title="ZS10-AI" content="Witaj na platformie ZS10 AI, gdzie możesz lorem ipsum" />
      <ArticleLatest />
    </main>
  )
}
