import SBoxServices from '@/Components/Site/SBoxServices'
import SHero from '@/Components/Site/SHero'
import SiteLayout from '@/Layouts/SiteLayout'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <SiteLayout>
      <SHero />
      <section className='container mx-auto grid grid-cols-3 gap-10 mt-10'>
      <SBoxServices />
      <SBoxServices />
      <SBoxServices />
      </section>
    </SiteLayout>
  )
}

export default Home