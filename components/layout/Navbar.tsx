'use client';

import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Sling } from 'hamburger-react'

import Sidebar from '../Sidebar'
import SidebarLink from '../SidebarLink'
import { MenuItems } from '@/constants/MenuItems'

import {
  YellowExclamationTriangleIcon,
  Zs10AITextLogo,
} from '../icons/Icons';

function HamburgerIcon({ open }: { open: boolean }) {
  return <Sling color='white' toggled={open} rounded />
}

export default function Navbar() {
  const [isActiveLink, setIsActiveLink] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="fixed w-screen z-50">
      <Menu>
        <div className="tranxla w-full flex justify-between items-center h-20 bg-gray-900/85 backdrop-blur-lg border-b border-white/20">
          <div className="ml-5">
            <Menu.Button>
              {({ open }: { open: boolean }) => <HamburgerIcon open={open} />}
            </Menu.Button>
          </div>
          <a href='/' className=" font-mono text-2xl text-white">
            <Zs10AITextLogo className='text-white size-40' />
          </a>
          <div className="size-9 mr-8"></div>

        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-[250] z-50"
          enterFrom="transform opacity-0 z-50"
          enterTo="transform opacity-100 z-50"
          leave="transition ease-in duration-[250] z-50"
          leaveFrom="transform opacity-100 z-50"
          leaveTo="transform opacity-0 z-50"
        >
          <Menu.Items>
            <Sidebar>
              {MenuItems.map(item => (
                <Menu.Item key={item.title}>
                  {({ close }) => (
                    <SidebarLink
                      href={item.href}
                      titleCont={item.titleCont}
                      onClick={() => {
                        close;
                        setIsActiveLink(item.href)
                        setIsSidebarOpen(true)
                      }}
                      className={isActiveLink == item.href
                        ? 'bg-gray-800 w-full h-min group flex justify-between rounded-md p-2 text-gray-400 hover:text-white  transition-all'
                        : 'hover:bg-gray-800 w-full h-min group flex justify-between rounded-md p-2 text-gray-400 hover:text-white  transition-all'
                      }
                    >

                      <item.icon />
                      {item.title}
                      {
                        item.experimental == true
                          ? <YellowExclamationTriangleIcon />
                          : <></>
                      }
                    </SidebarLink>
                  )
                  }
                </Menu.Item>
              ))}
            </Sidebar>
          </Menu.Items>
        </Transition>
      </Menu >
    </div>
  )
}
