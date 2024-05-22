import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'
import { PageProps } from '@/types';

type Props = {}

const Home = ({ auth }: PageProps) => {
  return (
    <Authenticated user={auth.user}>Home</Authenticated>
  )
}

export default Home