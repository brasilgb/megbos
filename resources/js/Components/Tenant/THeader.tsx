import { User } from 'lucide-react'
import React from 'react'
import DropdownMenuHeader from './TDropdownMenuHeader'
import { useTenantContext } from '@/Contexts/TenantContext'

type Props = {}

const THeader = (props: Props) => {
  const {colapseSideBar} = useTenantContext();
  return (
    <header className={`${colapseSideBar ? 'md:ml-[16rem]' : 'md:ml-14 ml-0'} duration-300 bg-gray-50 h-12 sm:px-6 pr-4 pl-8 flex items-center justify-between border-b border-b-white shadow`}>
      <div>uj</div>
      <div>
        <DropdownMenuHeader />
      </div>
    </header>
  )
}

export default THeader;