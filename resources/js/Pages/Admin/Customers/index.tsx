import ModalDelete from '@/Components/Admin/AModalDelete';
import FlashMessage from '@/Components/FlashMessage';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Plus, Search, SquarePen, Trash2, Users2 } from 'lucide-react';
import moment from 'moment';

const Customers = ({ customers }: any) => {
  const { flash } = usePage().props as any;

  return (
    <AdminLayout>
      <Head title="Clientes" />
      <div className='flex flex-col gap-4 my-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-start justify-start px-6 gap-2 text-gray-600'>
            <Users2 className='h-6 w-6' /> <span className='text-xl font-bold'>Clientes</span>
          </div>
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
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        {flash?.message && <FlashMessage message={flash?.message} />}
        <div className='px-6'>
          <Card className="">
            <CardHeader className='flex flex-row items-center justify-between px-6 py-2 border-b'>
              <CardContent className='p-0'>
                <div className='relative'>
                  <Input type="email" placeholder="Email" />
                  <Search className='absolute right-1 top-2 text-gray-500' />
                </div>
              </CardContent>
              <CardContent className='p-0'>
                <Button
                  asChild
                  variant="add"
                  size="icon"
                >
                  <Link
                    href={route('customers.create')}
                  >
                    <Plus />
                  </Link>
                </Button>
              </CardContent>
            </CardHeader>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Cliente</TableHead>
                  <TableHead>Nome do dominio</TableHead>
                  <TableHead>Financeiro</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Cadastro</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer: any) => (
                  <TableRow>
                    <TableCell className="font-medium">{customer.customer}</TableCell>
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell className="font-medium">Active</TableCell>
                    <TableCell>{moment().format("DD/MM/YYYY")}</TableCell>
                    <TableCell className="flex items-center justify-end gap-2">
                      <Button variant='edit' size='icon' asChild>
                        <Link
                          href={route('customers.edit', customer.id)}
                        >
                          <SquarePen />
                        </Link>
                      </Button>
                      <ModalDelete
                        url="customers.destroy"
                        param={customer?.id}
                        title='Excluir Cliente'
                        content={`o cliente ${customer?.name}`}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
export default Customers;