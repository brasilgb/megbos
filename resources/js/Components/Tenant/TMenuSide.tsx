import { Link, usePage } from '@inertiajs/react';
import { Home } from 'lucide-react';
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
            url: route('tdashboard',params),
            icon: Home,
            active: true
        },
        {
            label: 'Clientes',
            url: route('tcustomers.index',params),
            icon: Home,
            active: false
        }
    ];
    return (
        <div className='w-full'>
            <ul className='flex flex-col gap-2'>
                {sideNavItems?.map((item: any, idx: number) => (
                    <li key={idx} className={`${item.active && 'bg-gray-50 text-sky-800'} text-white rounded-md hover:bg-gray-50/80 h-8 flex items-center ${!colapside && 'justify-center'} p-2 cursor-pointer`}>
                        <Link
                            href={item.url}
                            className='flex items-center gap-1'
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