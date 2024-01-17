'use client';

import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import Sidebar from '../Sidebar'
import SidebarLink from '../SidebarLink'
import { MenuItems } from '@/constants/MenuItems'

export default function Navbar() {
  return (
    <Menu>
      <div className="w-full flex justify-center items-center h-28 bg-sky-300 dark:bg-sky-800">
        <div className="w-1/2">
          <Menu.Button>
            <svg className='size-12 ml-8' aria-hidden="true" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Menu.Button>
        </div>
        <a href='/' className="font-mono text-2xl w-1/2">ZS10.AI</a>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100 z-50"
        enterFrom="transform opacity-0 z-50"
        enterTo="transform opacity-100 z-50"
        leave="transition ease-in duration-75 z-50"
        leaveFrom="transform opacity-100 z-50"
        leaveTo="transform opacity-0 z-50"
      >
        <Menu.Items>
          <Sidebar>
            {MenuItems.map(item => (
              <Menu.Item>
                <SidebarLink href={item.href}>{item.title}</SidebarLink>
              </Menu.Item>
            ))}
          </Sidebar>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
