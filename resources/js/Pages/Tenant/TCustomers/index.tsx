import ModalDelete from '@/Components/Admin/AModalDelete';
import THeaderMain from '@/Components/Tenant/THeaderMain';
import { Badge } from '@/Components/ui/badge';
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import TenantLayout from '@/Layouts/TenantLayout';
import { Head, Link } from '@inertiajs/react';
import { Plus, Search, SquarePen, User2 } from 'lucide-react';
import moment from 'moment';
import React from 'react'

const TCustomers = ({ customers }: any) => {
  const params = route().params;
  return (
    <TenantLayout>
      <Head title='Clientes' />
      <THeaderMain icon={User2} title="Clientes" >
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href={route('tdashboard', params)}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Clientes</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </THeaderMain>
      <Card className='sm:p-4 p-2'>
        <CardHeader className='flex flex-row items-center justify-between px-0 py-0 pb-2 border-b'>
          <CardContent className='p-0 w-1/2'>
            <div className='relative w-full'>
              <Input type="email" placeholder="Nome ou CPF/CNPJ" className='sm:w-full' />
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
                href={route('tcustomers.create', params)}
              >
                <Plus />
              </Link>
            </Button>
          </CardContent>
        </CardHeader>
        <div className='sm:w-full w-[300px] overflow-auto'>
          <Table className=' w-full'>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40px]">#ID</TableHead>
                <TableHead className="w-[190px]">Nome do cliente</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>CPF</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Cadastro</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.data?.map((customer: any) => (
                <TableRow>
                  <TableCell className="font-medium">{customer?.id}</TableCell>
                  <TableCell className="font-medium">{customer?.nome}</TableCell>
                  <TableCell className="font-medium">{customer?.email}</TableCell>
                  <TableCell className="font-medium">{customer?.telefone}</TableCell>
                  <TableCell>{moment(customer?.created_at).format("DD/MM/YYYY")}</TableCell>
                  <TableCell className="flex items-center justify-end gap-2">
                    <Button variant='edit' size='icon' asChild>
                      <Link
                        href={route('customers.edit', customer?.id)}
                      >
                        <SquarePen />
                      </Link>
                    </Button>
                    <ModalDelete
                      url="customers.destroy"
                      param={customer?.id}
                      title='Excluir Cliente'
                      content={`o cliente ${customer?.nome}`}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </TenantLayout>
  )
}

export default TCustomers;