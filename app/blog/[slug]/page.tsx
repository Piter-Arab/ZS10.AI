import { info } from "@/constants/info"
import { InfoArticle } from "@/types/InfoArticle"
import { ParamSlug } from "@/types/ParamsSlug"
import Link from "next/link";


export default function page({ params }: ParamSlug) {
  const article: InfoArticle | undefined = info.find(article => {
    return article.slug == params.slug
  });

  if (!article) {
    return <div className="">Error 404, artykul nie zostal znalziony</div>
  }

  return (
    <div className="bg-white px-6 py-32 lg:px-8 w-full">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <Link href="/blog" className="text-sm text-neutral-500 mb-3">
          &larr;&nbsp;
          <span className="underline">
            Wróć
          </span>
        </Link>
        <p className="text-lg font-semibold leading-7 text-indigo-500">{article.category}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{article.title}</h1>
        <p className="mt-6 text-xl leading-8">
          {article.excerpt}
        </p>
        <div className="mt-10 max-w-2xl">
          <p className="">{article.content}</p>
        </div>
      </div>
    </div>
  )
}
