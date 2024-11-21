import React from 'react'
import { ADropDowMenu } from './ADropDowMenu'

type Props = {}

const AHeader = (props: Props) => {
  return (
    <header className="z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center">

        </div>
        <div className="flex flex-1 items-center justify-end">
          <ADropDowMenu />
        </div>
      </div>
    </header>
  )
}

export default AHeader