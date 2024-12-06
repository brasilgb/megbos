import React, { ReactNode } from 'react'
import { Breadcrumb } from '../ui/breadcrumb'

interface THeaderMainProps {
    icon: any;
    title: string;
    children: ReactNode;
}

const THeaderMain = (props: THeaderMainProps) => {
    return (
        <div className='flex items-center justify-between pb-3'>
            <div className='flex items-center justify-start gap-2'>
                <props.icon size={30} />
                <h1 className='text-xl'>{props.title}</h1>
            </div>
            <div>
                <Breadcrumb>
                    {props.children}
                </Breadcrumb>
            </div>
        </div>
    )
}

export default THeaderMain