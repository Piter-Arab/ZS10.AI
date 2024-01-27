import { info } from "@/constants/info"
import ArticleTile from "./ArticleTile"

export default function ArticleLatest() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-3">
      <h3 className="font-bold text-3xl">Nasz blog</h3>
      <p className="text-neutral-800 text-wrap text-center">Zapraszamy do czytania!</p>
      <div className="flex flex-col mt-3 md:flex-row items-center justify-center gap-3 w-full">
        {info.map((item, index) => {
          if (index <= 1) {
            return (
              <ArticleTile
                key={index}
                slug={item.slug}
                imgUrl={item.imgUrl}
                title={item.title}
                excerpt={item.excerpt}
              />
            )
          }
        })}
      </div>
    </div>
  )
}
