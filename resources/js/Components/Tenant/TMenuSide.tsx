import { Link, usePage } from '@inertiajs/react';
import { Home, Users2 } from 'lucide-react';
import React from 'react'
import { useRoute } from '../../../../vendor/tightenco/ziggy/src/js';

interface TMenuSideProps {
    colapside: boolean;
}

const TMenuSide = ({ colapside }: TMenuSideProps) => {
    const params = route().params;


    const sideNavItems = [
        {
            label: 'Home',
            url: route('tdashboard', params),
            icon: Home,
            active: route().current('tdashboard', params)
        },
        {
            label: 'Clientes',
            url: route('clientes.index', params),
            icon: Users2,
            active: route().current('clientes.*', params)
        }
    ];
    return (
        <div className='w-full'>
            <ul className='flex flex-col gap-2'>
                {sideNavItems?.map((item: any, idx: number) => (
                    <li key={idx} className={`${item.active ? 'bg-gray-50 text-sky-800' : 'text-gray-50'} rounded-md hover:bg-gray-50/80 hover:text-sky-800/50 h-8 flex items-center ${!colapside && 'justify-center'} p-2 cursor-pointer transition-colors duration-300`}>
                        <Link
                            href={item.url}
                            className='flex items-center gap-1 w-full'
                        >
                            <item.icon size="20" />
                            <div className={`${!colapside ? 'hidden' : ''} transition-all duration-500`}>{item.label}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TMenuSide