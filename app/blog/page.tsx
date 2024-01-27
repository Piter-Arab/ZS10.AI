import ArticleTile from "@/components/ArticleTile"
import Hero from "@/components/Hero"
import { blog } from "@/constants/blog"

export default function page() {
  return (
    <div className="w-full mt-10">
      <Hero title="Blog" content="Lorem Ipsum placeholder teks" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-12 flex flex-start flex-col">
          <h3 className="text-3xl font-bold text-gray-100">Blog</h3>
          <p className="text-gray-400">Witaj na naszym blogu.</p>
        </div>
        <div className="flex md:flex-row mt-8 justify-center flex-col md:flex-wrap p-3 gap-3 mx-auto">
          {blog.map((item, index) => (
            <ArticleTile
              key={index}
              slug={item.slug}
              imgUrl={item.imgUrl}
              title={item.title}
              excerpt={item.excerpt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
