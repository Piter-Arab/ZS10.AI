import { AuthorTileProps } from "@/types/AuthorTileProps";

export default function AuthorTile({ name, imgUrl, redirectUrl }: AuthorTileProps) {
  return (
    <a href={`${redirectUrl}`} className="flex flex-col justify-center items-center group hover:scale-95 transition-all cursor-pointer">
      <img
        src={`/${imgUrl
          ? imgUrl
          : `default.jpg`
          }`}
        alt="Profile Picture"
        className="size-48 object-cover rounded-xl group-hover:brightness-75 transition-all"
      />
      <p className="font-mono w-10/12 rounded-b-xl text-center bg-gray-800">{name}</p>
    </a>
  )
}