'use client'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

import { Classes } from '@/constants/Classes'
import LessonRender from './LessonRender'

export default function LessonInfo() {
  const [selectedClass, setSelectedClass] = useState(Classes[0])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className='flex flex-row gap-5'>
        <div className="w-52">
          <Listbox value={selectedClass} onChange={setSelectedClass}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white mb-4 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selectedClass.code}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {Classes.map((classNum, classNumIdx) => (
                    <Listbox.Option
                      key={classNumIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-neutral-100 text-neutral-900' : 'text-gray-900'
                        }`
                      }
                      value={classNum}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${selectedClass ? 'font-medium' : 'font-normal'
                              }`}
                          >
                            {classNum.code}
                          </span>
                          {selectedClass ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
      <LessonRender classCode={selectedClass.code} />
    </div>
  )
}
