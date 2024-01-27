import { ArticleTileProps } from "@/types/ArticleTileProps";
import Link from "next/link";

export default function ArticleTile({ slug, imgUrl, title, excerpt }: ArticleTileProps) {
  return (
    <Link href={`/blog/${slug}`} className="group flex flex-col items-start max-w-96 pb-3 md:border-0 border-b-[1px] border-neutral-300">
      {
        imgUrl == ''
          ? <div className="w-96 h-44 bg-gradient-to-r rounded-lg from-gray-800 to-gray-500 flex justify-center items-center text-white flex-col"><p className="text-5xl font-bold">404</p><p className="">No picture found!</p></div>
          : <img src={imgUrl} alt={title} className="w-96 h-44 object-cover group-hover:brightness-[0.8] rounded-lg transition-all" />
      }
      <h5 className="font-bold text-gray-900 text-2xl">{title}</h5>
      <div className="text-neutral-600 line-clamp-3">{excerpt}</div>
    </Link>
  )
}
