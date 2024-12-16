import { Check } from 'lucide-react';
import React from 'react'

interface FlashMessageProps {
    message: string;
}

const FlashMessage = (props: FlashMessageProps) => {
    return (
        <div className=''>
            <div className='bg-green-600 text-green-100 border border-green-100 rounded-md p-2 flex gap-2 shadow-md'><Check className='h-6 w-6' />{props?.message}</div>
        </div>
    )
}

export default FlashMessage