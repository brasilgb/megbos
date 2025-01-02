import { Link, usePage } from '@inertiajs/react';
import { CalendarClock, ChevronDown, Home, MessageCircleMore, Minus, ShoppingBasket, SlidersHorizontal, Users2, Wrench } from 'lucide-react';
import { useState } from 'react';

interface TMenuSideProps {
    colapside: boolean;
}

const TMenuSide = ({ colapside }: TMenuSideProps) => {
    const params = route().params.company;
    const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);

    const sideNavItems = [
        {
            label: 'Home',
            url: route('tdashboard', { company: params }),
            icon: Home,
            active: route().current('tdashboard', { company: params })
        },
        {
            label: 'Clientes',
            url: route('clientes.index', { company: params }),
            icon: Users2,
            active: route().current('clientes.*', { company: params })
        },
        {
            label: 'Ordens',
            url: route('ordens.index', { company: params }),
            icon: Wrench,
            active: route().current('ordens.*', { company: params })
        },
        {
            label: 'Produtos',
            url: route('produtos.index', { company: params }),
            icon: ShoppingBasket,
            active: route().current('produtos.*', { company: params })
        },
        {
            label: 'Agendamentos',
            url: route('agendamentos.index', { company: params }),
            icon: CalendarClock,
            active: route().current('agendamentos.*', { company: params })
        },
        {
            label: 'Mensagens',
            url: route('mensagens.index', { company: params }),
            icon: MessageCircleMore,
            active: route().current('mensagens.*', { company: params })
        }
    ];

    const sideNavItems2 = [
        {
            label: 'Empresa',
            url: route('tdashboard', { company: params }),
            icon: Minus,
            active: route().current('tdashboard', { company: params })
        },
        {
            label: 'Impressões',
            url: route('tdashboard', { company: params }),
            icon: Minus,
            active: route().current('tdashboard', { company: params })
        },
        {
            label: 'Etiquetas',
            url: route('tdashboard', { company: params }),
            icon: Minus,
            active: route().current('tdashboard', { company: params })
        },
        {
            label: 'Whatsapp',
            url: route('tdashboard', { company: params }),
            icon: Minus,
            active: route().current('tdashboard', { company: params })
        },
        {
            label: 'Gerais',
            url: route('tdashboard', { company: params }),
            icon: Minus,
            active: route().current('tdashboard', { company: params })
        }
    ];
    return (
        <>
            <div className='w-full flex flex-col gap-2'>
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
                <div>
                    <div onClick={() => setOpenSubMenu(!openSubMenu)} className={`relative ${0 ? 'bg-gray-50 text-sky-800' : 'text-gray-50'} h-8 flex items-center ${!colapside && 'justify-center'} p-2 cursor-pointer transition-colors duration-300`}>
                        <SlidersHorizontal size={20} />
                        <h1 className={`flex-1 ml-1 ${!colapside ? 'hidden' : ''}`}>Configurações</h1>
                        <ChevronDown size={20} className={`${openSubMenu ? 'rotate-0' : 'rotate-180'} duration-300 ${!colapside ? 'hidden' : ''}`} />
                    </div>
                    <div className={`pl-4 absolute  ${openSubMenu ? 'block' : 'hidden'} transition-all duration-300`}>
                        <ul className={`flex flex-col gap-2 border-l ${!colapside ? 'bg-blue-primary pr-2 rounded-r-md shadow-md' : 'bg-transparent'}`}>
                            {sideNavItems2?.map((item: any, idx: number) => (
                                <li key={idx} className={` text-white hover:text-sky-800/50 h-8 flex items-center ${!colapside && 'justify-center'} cursor-pointer transition-colors duration-300`}>
                                    <Link
                                        href={item.url}
                                        className='flex items-center gap-2 w-full'
                                    >
                                        <item.icon size="14" />
                                        <div>{item.label}</div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TMenuSide