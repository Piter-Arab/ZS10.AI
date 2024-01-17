import { HeroProps } from "@/types/HeroProps";

export default function Hero({ title, imgUrl }: HeroProps) {
  return (
    <div className="w-full h-72 mb-3 relative flex items-center justify-center">
      <img src={`/${imgUrl}`} alt="Hero Image" className="absolute object-cover w-full h-72 -z-10" />
      <div className="absolute w-1/2 flex flex-col justify-start">
        <div className="border-l-8 border-l-sky-800 w-min py-3 px-10 backdrop-blur-md text-white">
          <h3 className="text-5xl font-bold">{title}</h3>
        </div>
      </div>
    </div>
  )
}