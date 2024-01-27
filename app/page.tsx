'use client'

import ArticleLatest from "@/components/ArticleLatest";
import FeatureSection from "@/components/single-use/FeatureSection";
import MainHero from "@/components/single-use/MainHero";

export default function Home() {
  return (
    <main className="w-full">
      <MainHero />
      <FeatureSection />
      <ArticleLatest />
    </main>
  )
}
