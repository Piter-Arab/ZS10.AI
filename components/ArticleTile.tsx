import { ArticleTileProps } from "@/types/ArticleTileProps";
import Link from "next/link";

export default function ArticleTile({ slug, imgUrl, title, excerpt }: ArticleTileProps) {
  return (
    <Link href={`/blog/${slug}`} className="group flex flex-col items-start">
      <img
        src={imgUrl == ''
          ? 'wstep_hero.webp'
          : imgUrl
        }
        alt="image"
        className="w-60 h-28 object-cover group-hover:brightness-[0.8] rounded-lg transition-all"
      />
      <h5 className="font-bold text-gray-900 text-2xl">{title}</h5>
      <div className="text-neutral-600">{excerpt}</div>
    </Link>
  )
}
