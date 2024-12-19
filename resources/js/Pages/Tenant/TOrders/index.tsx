import ModalDelete from '@/Components/Admin/AModalDelete';
import FlashMessage from '@/Components/FlashMessage';
import InputSearch from '@/Components/InputSearch';
import Pagination from '@/Components/Pagination';
import THeaderMain from '@/Components/Tenant/THeaderMain';
import { Badge } from '@/Components/ui/badge';
import { BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import TenantLayout from '@/Layouts/TenantLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Plus, Search, SquarePen, User2, Wrench } from 'lucide-react';
import moment from 'moment';

const TOrders = ({ orders }: any) => {
  const { data, setData, post, get, processing, errors } = useForm({
    q: "",
  });
  const params = route().params.company;
  const { flash } = usePage().props as any;

  return (
    <TenantLayout>
      <Head title='Ordens' />
      <THeaderMain icon={Wrench} title="Ordens" >
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href={route('tdashboard', params)}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Ordens</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </THeaderMain>
      <Card className='sm:p-4 p-2'>
        <CardHeader className='flex flex-row items-center justify-between px-0 py-0 pb-2 border-b'>
          <CardContent className='p-0 w-1/2'>
            <InputSearch placeholder={''} url={route('ordens.index', params)} />
          </CardContent>
          <CardContent className='p-0'>
            <Button
              asChild
              variant="add"
              size="icon"
            >
              <Link
                href={route('ordens.create', params)}
              >
                <Plus />
              </Link>
            </Button>
          </CardContent>
        </CardHeader>
        <CardContent>
          <div className='sm:w-full w-[300px] overflow-auto mt-4'>
            {flash?.message && <FlashMessage message={flash?.message} />}
            <Table className=' w-full mt-4'>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">#Ordem</TableHead>
                  <TableHead className="w-[190px]">Nome do cliente</TableHead>
                  <TableHead>CPF</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Cadastro</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.data?.map((order: any) => (
                  <TableRow>
                    <TableCell className="font-medium">{order?.id}</TableCell>
                    <TableCell className="font-medium">{order.cliente.nome}</TableCell>
                    <TableCell className="font-medium">{order?.cpf}</TableCell>
                    <TableCell className="font-medium">{order?.telefone}</TableCell>
                    <TableCell>{moment(order?.created_at).format("DD/MM/YYYY")}</TableCell>
                    <TableCell className="flex items-center justify-end gap-2">
                      <Button variant='edit' size='icon' asChild>
                        <Link
                          href={route('ordens.edit', { 'ordem': order.id, 'company': params })}
                        >
                          <SquarePen />
                        </Link>
                      </Button>
                      <ModalDelete
                        url="ordens.destroy"
                        param={{ 'ordem': order.id, 'company': params }}
                        title='Excluir Ordem'
                        content={`a ordem do cliente ${order?.cliente.nome}`}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        {orders.total > orders.per_page &&
          <CardFooter>
            <Pagination data={orders} />
          </CardFooter>
        }
      </Card>
    </TenantLayout>
  )
}

export default TOrders;