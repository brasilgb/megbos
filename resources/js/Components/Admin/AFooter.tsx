import { Link } from '@inertiajs/react'
import moment from 'moment'
import React from 'react'

type Props = {}

const AFooter = (props: Props) => {
    return (
        <footer className="z-20 py-2 px-6 w-full flex items-center justify-between bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div>
                <p className='text-sm font-medium'>&copy;{moment().format("YYYY")}, todos os direitos reservados</p>
            </div>
            <div>
                <a
                    href="https://megb.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium underline underline-offset-4"
                >
                    MEGB
                </a>
            </div>
        </footer>
    )
}

export default AFooter