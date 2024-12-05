
import THeaderMain from '@/Components/Tenant/THeaderMain'
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb'
import { Card } from '@/Components/ui/card'
import { useTenantContext } from '@/Contexts/TenantContext'
import TenantLayout from '@/Layouts/TenantLayout'
import { Home } from 'lucide-react'
import React from 'react'

type Props = {}

const TDashboard = (props: Props) => {
  return (
    <TenantLayout>
      <THeaderMain icon={Home} title={''} >
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </THeaderMain>
      <Card>
        dffdsf
      </Card>
    </TenantLayout>
  )
}

export default TDashboard