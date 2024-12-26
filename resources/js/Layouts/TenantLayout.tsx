import Loading from '@/Components/loading';
import TFooter from '@/Components/Tenant/TFooter';
import THeader from '@/Components/Tenant/THeader';
import TSidebar from '@/Components/Tenant/TSidebar';
import { useTenantContext } from '@/Contexts/TenantContext';
import { router, usePage } from '@inertiajs/react';
import React, { ReactNode } from 'react'

type TenantLayoutProps = {
  children: ReactNode;
}

const TenantLayout = ({ children }: TenantLayoutProps) => {
  const { user } = usePage().props.auth;
  const { colapseSideBar } = useTenantContext();

  if (user === null) {
    router.get('/');
  }

  return (
    <>
      {user === null && (<Loading />)}
      {user !== null && (
        <div className='flex items-start'>
          <TSidebar />
          <div className={`bg-gray-100 justify-start flex flex-col sm:min-h-screen w-full`}>
            <THeader />
            <main className={`${colapseSideBar ? 'md:ml-[16rem]' : 'md:ml-16 ml-0'} sm:p-6 p-2 flex-grow duration-300`}>
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