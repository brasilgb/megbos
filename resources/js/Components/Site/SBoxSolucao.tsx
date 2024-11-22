import React from 'react'

type Props = {}

const SBoxSolucao = (props: Props) => {
    return (
        <div className='container mx-auto flex items-center justify-around h-80 rounded-md bg-gray-50 border'>
            <div className='flex-1 flex items-center justify-center p-10'>
                <h1 className='text-4xl leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus lectus, ultricies non purus nec.
                </h1>
            </div>
            <div className='w-px h-[50%] bg-yellow-primary' />
            <div className='flex-1 p-10'>
                <ul  className='leading-relaxed'>
                    <li>Linha 1</li>
                    <li>Linha 2</li>
                    <li>Linha 3</li>
                    <li>Linha 4</li>
                </ul>
            </div>
        </div>
    )
}

export default SBoxSolucao;