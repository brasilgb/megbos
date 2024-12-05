import { User } from 'lucide-react'
import React from 'react'
import DropdownMenuHeader from './TDropdownMenuHeader'

type Props = {}

const THeader = (props: Props) => {
  return (
    <header className='bg-gray-50 h-12 sm:px-6 pr-4 pl-8 flex items-center justify-between border-b border-b-white shadow'>
      <div>uj</div>
      <div>
        <DropdownMenuHeader />
      </div>
    </header>
  )
}

export default THeader;