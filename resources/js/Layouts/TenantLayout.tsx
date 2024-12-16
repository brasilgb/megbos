import Loading from '@/Components/loading';
import TFooter from '@/Components/Tenant/TFooter';
import THeader from '@/Components/Tenant/THeader';
import TSidebar from '@/Components/Tenant/TSidebar';
import { router, usePage } from '@inertiajs/react';
import React, { ReactNode } from 'react'

type TenantLayoutProps = {
  children: ReactNode;
}

const TenantLayout = ({ children }: TenantLayoutProps) => {
  const { user } = usePage().props.auth;

  if (user === null) {
    router.get('/');
  }

  return (
    <>
      {user === null && (<Loading />)}
      {user !== null && (
        <div className='flex items-start justify-start bg-gray-200'>
          <div className='bg-blue-primary sm:border-r sm:border-r-white shadow sm:min-h-screen'>
            <TSidebar />
          </div>
          <div className='bg-gray-100 flex flex-col min-h-screen flex-1'>
            <THeader />
            <main className='flex-grow sm:p-6 p-2'>
              {children}
            </main>
            <TFooter />
          </div>
        </div>
      )}

    </>

  )
}

export default TenantLayout;