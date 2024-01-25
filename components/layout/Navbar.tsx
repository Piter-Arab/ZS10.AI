'use client';

import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'

import Sidebar from '../Sidebar'
import SidebarLink from '../SidebarLink'
import { MenuItems } from '@/constants/MenuItems'

import {
  CodeBracketIcon,
  AcademicCapIcon,
  CpuChipIcon,
  HomeIcon,
  InfoCircleIcon,
  UserGroupIcon,
  YellowExclamationTriangleIcon,
  Zs10AITextLogo,
  ServerStackIcon
} from '../icons/Icons';

export default function Navbar() {
  const [isActiveLink, setIsActiveLink] = useState('');

  return (
    <Menu>
      <div className="w-full flex justify-between items-center h-20 bg-gray-900">
        <Menu.Button>
          <svg className='size-9 text-gray-400 hover:text-white transition-all ml-8' aria-hidden="true" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Menu.Button>
        <a href='/' className=" font-mono text-2xl text-white">
          <Zs10AITextLogo className='text-white size-40' />
        </a>
        <div className="size-9 mr-8"></div>

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
            {MenuItems.map(item => {
              var icon: JSX.Element | null = null;

              switch (item.icon) {
                case 'HomeIcon':
                  icon = <HomeIcon />;
                  break;
                case 'CodeBracketIcon':
                  icon = <CodeBracketIcon />;
                  break;
                case 'CpuChipIcon':
                  icon = <CpuChipIcon />;
                  break;
                case 'InfoCircleIcon':
                  icon = <InfoCircleIcon />;
                  break;
                case 'UserGroupIcon':
                  icon = <UserGroupIcon />;
                  break;
                case 'YellowExclamationTriangleIcon':
                  icon = <YellowExclamationTriangleIcon />;
                  break;
                case 'AcademicCapIcon':
                  icon = <AcademicCapIcon />;
                  break;
                case 'ServerStackIcon':
                  icon = <ServerStackIcon />;
                  break;
              }

              return (
                <Menu.Item key={item.title}>
                  {({ close }) => (
                    <SidebarLink
                      href={item.href}
                      titleCont={item.titleCont}
                      onClick={() => {
                        close;
                        setIsActiveLink(item.href)
                      }}
                      className={isActiveLink == item.href
                        ? 'bg-gray-800 w-full h-min group flex justify-between rounded-md p-2 text-gray-400 hover:text-white  transition-all'
                        : 'hover:bg-gray-800 w-full h-min group flex justify-between rounded-md p-2 text-gray-400 hover:text-white  transition-all'
                      }
                    >
                      {icon}
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
              )
            })}
          </Sidebar>
        </Menu.Items>
      </Transition>
    </Menu >
  )
}
