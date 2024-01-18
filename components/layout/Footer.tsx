'use client';

import { MenuItems } from '@/constants/MenuItems';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900" aria-labelledby="footer-heading">
      <div className='mx-auto w-full lg:w-3/4 px-10 lg:px-0'>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="w-full pb-8 pt-16 sm:pt-24 lg:pt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-8 w-full lg:col-span-2">
              <Link href='/' className="text-8xl font-mono text-white">ZS10-AI</Link>
              <p className="text-sm leading-6 text-gray-300">
                Platforma AI dostępna dla każdego.
              </p>
            </div>
            <div className="mt-16 md:mt-0">
              <div className="flex flex-col md:flex-row justify-between content-start">
                <div>
                  <ul role="list" className=" space-y-4">
                    {MenuItems.map(item => (
                      <li key={item.title}>
                        <Link
                          className='text-sm leading-6 text-gray-400 hover:text-white'
                          href={item.href}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-10 md:mt-0 text-sky-600'>
                  <ul role="list" className="space-y-4">
                    <li>
                      <Link target='_blank' href="https://www.google.com/maps/place/Technikum+nr+25+im.+Stanis%C5%82awa+Staszica/@52.2730529,20.9511969,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecbc87c455251:0x7ab785ae5d33289!8m2!3d52.2730529!4d20.9537718!16s%2Fg%2F11hczznsz2?entry=ttu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 lg:mr-1 2xl:mr-2 inline">
                          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <p className="font-light inline text-gray-400 text-sm whitespace-nowrap">01-883 Warszawa</p>
                        <p className="pl-8 font-light text-gray-400 text-sm">ul. Perzyńskiego 10</p>
                      </Link>
                    </li>
                    <li>
                      <Link href='tel:+48228332868'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 mr-2 lg:mr-1 2xl:mr-2 inline">
                          <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                          <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                        </svg>
                        <p className="font-light text-gray-400 inline text-sm">
                          +48 228 332 868
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link target='_blank' className='flex items-center' href="https://www.facebook.com/SamorzadZS10">
                        <svg className='h-6 w-6 mr-2 lg:mr-1 2xl:mr-2 inline' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
                        </svg>
                        <p className="font-light text-gray-400 inline text-sm">Samorząd ZS10</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 sm:mt-20 lg:mt-8">
            <p className="text-sm leading-5 text-gray-400">ZS10-AI to platforma edukacyjna, gdzie nowoczesność spotyka się z tradycją, a sztuczna inteligencja staje się kluczowym elementem technikum. Nasza strona to miejsce, gdzie technologia i edukacja łączą siły, aby kształtować przyszłych inżynierów i specjalistów.
            </p>
          </div>
          <div className="mt-16 border-t border-sky-600 pt-8 sm:mt-20 lg:mt-12">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2024 ZS10-AI. Zabrania się kopiowania oraz wykorzystywania w inny sposób całości lub części danych zawartych w serwisie internetowym ZS10-AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
