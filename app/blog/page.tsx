import ArticleTile from "@/components/ArticleTile"
import { info } from "@/constants/info"

export default function page() {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="mt-12 flex flex-start flex-col">
          <h3 className="text-3xl font-bold">Blog</h3>
          <p className="text-neutral-700">Witaj na naszym blogu.</p>
        </div>
        <div className="flex flex-row mt-8 justify-center flex-wrap w-3/4 gap-3 mx-auto">
          {info.map(item => (
            <ArticleTile
              slug={item.slug}
              imgUrl={item.imgUrl}
              title={item.title}
              excerpt={item.excerpt}
            />
          ))}
        </div>
      </div>
    </>
  )
}
