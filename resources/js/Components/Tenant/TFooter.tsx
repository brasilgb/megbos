import React from 'react'

type Props = {}

const TFooter = (props: Props) => {
  return (
    <footer className='min-h-8 px-6 bg-gray-50 flex items-center justify-between border-t border-t-white'>
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