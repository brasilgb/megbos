import { Link } from '@inertiajs/react'
import React from 'react'

type Props = {}

const SHero = (props: Props) => {
    return (
        <section className='bg-[#F8D254] h-[600px]'>
            <div className='container mx-auto flex h-full'>
                <div className='flex flex-col items-start justify-center gap-8 flex-1 h-full'>
                    <h1 className='text-5xl font-extrabold'>Content sections are made to display the benefits</h1>
                    <p className='text-2xl'>Content sections are made to display the benefits of your initial offering. This sections serve to communicate, educate and guide</p>
                    <Link
                        href="#"
                        className="bg-[#033147] text-base font-bold text-white rounded-full px-4 py-2"
                    >
                        Este é um botao hero
                    </Link>
                </div>
                <div className='flex-1'>
                    <div className='h-full flex flex-col items-center justify-center'>
                        <div className='h-auto w-[90%] bg-contain bg-center'>
                            <img src='orders.png' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SHero