import TenantLayout from '@/Layouts/TenantLayout';
import { Link } from '@inertiajs/react';
import React from 'react'

type Props = {}

const TCustomers = (props: Props) => {
  return (
    <TenantLayout>
      Customers<Link href='/tcustomers/create'
      >
        Ir
      </Link>
      </TenantLayout>
  )
}

export default TCustomers;