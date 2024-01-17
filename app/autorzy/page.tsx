import AuthorTile from "@/components/AuthorTile"
import { Authors } from "@/constants/Authors"
import Hero from "@/components/Hero"

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <Hero title="Autorzy" imgUrl="wstep_hero.webp" />
      <div className="flex flex-col items-center w-full">
        <h2 className="text-2xl font-bold mt-8">Autorami tego serwisu są:</h2>
        <div className="flex flex-row gap-8 m-8 justify-center items-center">
          {Authors.map(author => (
            <AuthorTile name={author.name} redirectUrl={author.url} />
          ))}
        </div>
      </div>
    </div>
  )
}