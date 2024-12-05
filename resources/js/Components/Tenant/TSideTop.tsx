import React from 'react'

interface TSideTopProps {
    colapside: boolean;
}

const TSideTop = ({ colapside }: TSideTopProps) => {
    return (
        <div className='h-32 flex items-center gap-2'>
            <div className={`${colapside ? 'w-20' : 'w-28'} rounded-full p-1`}>
                <img src="default.jpg" alt="" className='rounded-full' />
            </div>
            <h1 className={`${colapside ? '' : 'hidden'} transition-all duration-300 sm:text-gray-50 text-gray-500`}>
                Empresa
            </h1>
        </div>
    )
}

export default TSideTop