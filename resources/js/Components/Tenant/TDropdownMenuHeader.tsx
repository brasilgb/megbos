import { Link, usePage } from '@inertiajs/react'
import { LockKeyholeOpen, LogOutIcon, User } from 'lucide-react'
import React, { useState } from 'react'

type Props = {}

const TDropdownMenuHeader = (props: Props) => {
    const { auth } = usePage().props as any;
    const [colapseMenu, setColapseMenu] = useState<boolean>(false);

    return (
        <>
            {colapseMenu && <div className={`bg-gray-900/5 fixed top-0 right-0 bottom-0 left-0`} onClick={() => setColapseMenu(!colapseMenu)} />}
            <div className='relative'>
                <button
                    onClick={() => setColapseMenu(!colapseMenu)}
                >
                    <User className='w-5 h-5' />
                </button>
                <div className={`${colapseMenu ? '' : 'hidden'} bg-gray-50 border border-white shadow-md rounded-md w-56 absolute -right-2 top-10 p-2`}>
                    <ul className='flex flex-col items-start gap-1'>
                        <li className='h-8 flex items-center justify-start gap-1 px-2  w-full'>
                            <LockKeyholeOpen className='w-4 h-4' />
                            <span>{auth?.user?.name}</span>
                        </li>
                        <li className='h-8 flex px-2 hover:bg-gray-100 w-full rounded-md'>
                            <Link href={''} className='flex items-center justify-start gap-1 w-full'>
                                <User className='w-4 h-4' />
                                <span>Perfil</span>
                            </Link>
                        </li>
                        <li className='h-8 px-2 hover:bg-gray-100 w-full rounded-md'>
                            <Link method='post' href={route('logout')} className='flex items-center justify-start gap-1 w-full'>
                                <LogOutIcon className='w-4 h-4' />
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>


    )
}

export default TDropdownMenuHeader