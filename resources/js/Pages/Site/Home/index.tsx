import SBoxServices from '@/Components/Site/SBoxServices'
import SBoxSolucao from '@/Components/Site/SBoxSolucao'
import SHero from '@/Components/Site/SHero'
import SiteLayout from '@/Layouts/SiteLayout'
import { CalendarCheck, Computer, Cpu, Printer, TabletSmartphone, Users2, Wrench } from 'lucide-react'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <SiteLayout>
      <SHero />
      <section className='container mx-auto grid grid-cols-4 gap-10 my-10'>
        <SBoxServices
          title="Lorem Ipsum"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus lectus, ultricies non purus nec, faucibus mattis ante. Aliquam porta vel lectus sit amet ullamcorper. Morbi sit amet tortor purus. Quisque vulputate metus a turpis porta, fringilla tincidunt lectus consectetur."
          icone={TabletSmartphone}
        />
        <SBoxServices
          title="Lorem Ipsum"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus lectus, ultricies non purus nec, faucibus mattis ante. Aliquam porta vel lectus sit amet ullamcorper. Morbi sit amet tortor purus. Quisque vulputate metus a turpis porta, fringilla tincidunt lectus consectetur."
          icone={Computer}
        />
        <SBoxServices
          title="Lorem Ipsum"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus lectus, ultricies non purus nec, faucibus mattis ante. Aliquam porta vel lectus sit amet ullamcorper. Morbi sit amet tortor purus. Quisque vulputate metus a turpis porta, fringilla tincidunt lectus consectetur."
          icone={Printer}
        />
        <SBoxServices
          title="Lorem Ipsum"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus lectus, ultricies non purus nec, faucibus mattis ante. Aliquam porta vel lectus sit amet ullamcorper. Morbi sit amet tortor purus. Quisque vulputate metus a turpis porta, fringilla tincidunt lectus consectetur."
          icone={Cpu}
        />
      </section>
      <section className='bg-white py-10'>
        <SBoxSolucao />
      </section>
    </SiteLayout>
  )
}

export default Home