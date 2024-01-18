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
              <Link href='/'>
                <h2 className='text-8xl font-mono'>ZS10-AI</h2>
              </Link>
              <p className="text-sm leading-6 text-gray-300">
                Platforma AI dostępna dla każdego.
              </p>
            </div>
            <div className="mt-16 md:mt-0">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <ul role="list" className=" space-y-4">
                    {MenuItems.map(item => (
                      <li key={item.title}>
                        <Link
                          className='text-sm leading-6 text-gray-300 hover:text-white'
                          href={item.href}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 sm:mt-20 lg:mt-8">
            <p className="text-sm leading-5 text-gray-400">ZS10-AI to platforma edukacyjna, gdzie nowoczesność spotyka się z tradycją, a sztuczna inteligencja staje się kluczowym elementem technikum. Nasza strona to miejsce, gdzie technologia i edukacja łączą siły, aby kształtować przyszłych informatyków i programistów.
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
