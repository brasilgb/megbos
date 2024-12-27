import { useTenantContext } from '@/Contexts/TenantContext';
import React from 'react'

type Props = {}

const TFooter = (props: Props) => {
  const {colapseSideBar} = useTenantContext();
  return (
    <footer className={`${colapseSideBar ? 'md:ml-[16rem]' : 'md:ml-14 ml-0'} duration-300 min-h-8 px-6 bg-gray-50 flex items-center justify-between border-t border-t-white`}>
      <div>
        <p className='text-sm text-gray-600'>&copy; Reserved to customer</p>
      </div>
      <div>
        <p className='uppercase text-xs font-semibold'>TFooter</p>
      </div>
    </footer>
  )
}

export default TFooter