import Button from "@/components/Button"
import { info } from "@/constants/info"
import ArticleTile from "@/components/ArticleTile"
import Hero from "@/components/Hero"

export default function Page() {
  return (
    <div className="w-full mt-10">
      <Hero title="Informacje" />
      <div className="w-3/4 flex flex-col items-center mx-auto mt-16">
        <div>
          <h4 className="text-2xl font-semibold leading-7 text-black">Informacje o ZS10</h4>
          <p className="mt-1 text-base max-w-2xl leading-6 text-neutral-700">Zespół Szkół nr. 10 w Warszawie im. Stansiława Staszica</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3 mt-28">
          <Button className="border-b text-xl border-black text-neutral-900 flex flex-row gap-2 items-center" target="_blank" href="https://zs10.pl">
            <svg className="size-6" aria-hidden="true" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Strona Szkoły
          </Button>
          <Button className="border-b text-xl border-black text-neutral-900 flex flex-row gap-2 items-center" target="_blank" href="https://www.facebook.com/SamorzadZS10">
            <svg className='size-6' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
            </svg>
            Facebook Samorządu Szkoły
          </Button>
          <div className="flex flex-row flex-wrap gap-3">
            {info.map((item, index) => (
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
    </div>
  )
}
