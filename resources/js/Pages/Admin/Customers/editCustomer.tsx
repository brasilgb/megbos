import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb';
import { Card } from '@/Components/ui/card';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

const Customers = ({ customers }: any) => {
  console.log(customers);
  
  return (
    <AdminLayout>
      <Head title="Dashboard" />
      <div className='flex flex-col gap-4 my-4'>
        <div className='px-6'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Clientes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Editar cliente</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className='px-6'>
          <div className='grid grid-cols-4'>
            <Card className="">
              edit
            </Card>
          </div>
        </div>
      </div>

    </AdminLayout>
  );
}
export default Customers;