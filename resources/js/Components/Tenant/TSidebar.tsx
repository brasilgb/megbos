import { ChevronRight, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import TMenuSide from './TMenuSide';
import TSideTop from './TSideTop';

type Props = {}

const TSidebar = (props: Props) => {
  const [colapseSideBar, setColapseSideBar] = useState<boolean>(true);
  const [colapseMobile, setColapseMobile] = useState<boolean>(false);

  return (
    <>
      <aside className={`${colapseSideBar ? 'md:w-[16rem]' : 'md:w-14 w-0'} transition-all duration-300 relative md:p-2`}>
        <div
          onClick={() => setColapseSideBar(!colapseSideBar)}
          className='h-6 w-6 bg-gray-50 border-2 border-blue-primary shadow rounded-full sm:flex hidden items-center justify-center absolute -right-3 top-3 cursor-pointer z-10'>
          <ChevronRight className={`h-5 w-5 duration-500 ${colapseSideBar ? '-rotate-180' : 'rotate-0'}`} />
        </div>
        <div className={`md:flex flex-col hidden`}>
          <TSideTop colapside={colapseSideBar} />
          <div className='h-px bg-gray-100/20 w-full mb-2' />
          <TMenuSide colapside={colapseSideBar} />
        </div>
      </aside>

      <aside className={`${colapseMobile ? 'w-[16rem]' : 'w-0'} transition-all duration-300 fixed top-0 bottom-0 left-0 bg-slate-50 shadow-lg z-10`}>
        <div
          onClick={() => setColapseMobile(!colapseMobile)}
          className={`h-6 w-6 rounded-full sm:hidden flex items-center justify-center absolute ${colapseMobile ? 'right-2 border bg-white' : '-right-8'} top-3 cursor-pointer`}>
          {colapseMobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </div>
        <div className={`${colapseMobile ? 'flex' : 'hidden'} flex-col p-2`}>
          <TSideTop colapside={colapseSideBar} />
          <div className='h-px bg-gray-100/50 w-full my-2' />
          <TMenuSide colapside={colapseMobile} />
        </div>
      </aside>
    </>
  )
}

export default TSidebar