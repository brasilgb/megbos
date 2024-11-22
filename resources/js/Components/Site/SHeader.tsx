import { Link } from '@inertiajs/react'
import { Sprout } from 'lucide-react'
import React from 'react'

type Props = {}

const SHeader = (props: Props) => {
    const links = [
        {
            label: 'Home',
            url: '/'
        },
        {
            label: 'Page 1',
            url: '/'
        },
        {
            label: 'Page 2',
            url: '/'
        },
        {
            label: 'Page 3',
            url: '/'
        },
        {
            label: 'Page 4',
            url: '/'
        },
    ]
    return (
        <div className='bg-[#F8D254] h-14'>
            <div className='container mx-auto flex items-center justify-between gap-4 h-full'>
                <div className='w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center'>
                    <Sprout className='text-yellow-500 h-8 w-8' />
                </div>
                <div className='flex flex-1 items-center justify-center gap-4'>
                    {links.map((link: any, idl: number) => (
                        <Link
                        className='text-base text-gray-700'
                            key={idl}
                            href={link.url}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div>
                    <Link
                    method="get"
                     href={route('dashboard')}
                     as="button"
                     className="bg-[#033147] text-base font-bold text-white rounded-full px-4 py-2"
                      >
                        Entrar
                      </Link>
                </div>
            </div>
        </div>
    )
}

export default SHeader