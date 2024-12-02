import ModalDelete from '@/Components/Admin/AModalDelete';
import FlashMessage from '@/Components/FlashMessage';
import { Badge } from '@/Components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/Components/ui/breadcrumb';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { Plus, Search, SquarePen, User } from 'lucide-react';
import moment from 'moment';

const AUsers = ({ ausers }: any) => {
  const { flash } = usePage().props as any;

  return (
    <AdminLayout>
      <Head title="Usuários" />
      <div className='flex flex-col gap-4 my-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-start justify-start px-6 gap-2 text-gray-600'>
            <User className='h-6 w-6' /> <span className='text-xl font-bold'>Usuários</span>
          </div>
          <div className='px-6'>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Usuários</BreadcrumbLink>
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
                    href={route('users.create')}
                  >
                    <Plus />
                  </Link>
                </Button>
              </CardContent>
            </CardHeader>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">#</TableHead>
                  <TableHead className="w-[100px]">Usuário</TableHead>
                  <TableHead>E-mail</TableHead>
                  <TableHead>Função</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Cadastro</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ausers?.data?.map((user: any) => (
                  <TableRow>
                    <TableCell className="font-medium">{user?.id}</TableCell>
                    <TableCell className="font-medium">{user?.name}</TableCell>
                    <TableCell className="font-medium">{user?.email}</TableCell>
                    <TableCell>{user?.roles}</TableCell>
                    <TableCell className="font-medium"><Badge variant={`${user?.status == "active" ? "active" : "destructive"}`} >{user?.status}</Badge></TableCell>
                    <TableCell>{moment(user?.created_at).format("DD/MM/YYYY")}</TableCell>
                    <TableCell className="flex items-center justify-end gap-2">
                      <Button variant='edit' size='icon' asChild>
                        <Link
                          href={route('users.edit', user.id)}
                        >
                          <SquarePen />
                        </Link>
                      </Button>
                      <ModalDelete
                        url="users.destroy"
                        param={user?.id}
                        title='Excluir Cliente'
                        content={`o cliente ${user?.name}`}
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

export default AUsers;