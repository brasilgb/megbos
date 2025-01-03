import ModalDelete from '@/Components/Admin/AModalDelete';
import FlashMessage from '@/Components/FlashMessage';
import InputSearch from '@/Components/InputSearch';
import Pagination from '@/Components/Pagination';
import THeaderMain from '@/Components/Tenant/THeaderMain';
import { BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/Components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import TenantLayout from '@/Layouts/TenantLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { MessageCircleMore, Plus, SquarePen } from 'lucide-react';
import moment from 'moment';

const TMessages = ({ messages }: any) => {
  const { data, setData, post, get, processing, errors } = useForm({
    q: "",
  });
  const params = route().params.company;
  const { flash } = usePage().props as any;

  return (
    <TenantLayout>
      <Head title='Mensagens' />
      <THeaderMain icon={MessageCircleMore} title="Mensagens" >
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href={route('tdashboard', params)}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Mensagens</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </THeaderMain>
      <Card className='sm:p-4 p-2'>
        <CardHeader className='flex flex-row items-center justify-between px-0 py-0 pb-2 border-b'>
          <CardContent className='p-0 w-1/2'>
            <InputSearch placeholder={''} url={route('mensagens.index', params)} />
          </CardContent>
          <CardContent className='p-0'>
            <Button
              asChild
              variant="add"
              size="icon"
            >
              <Link
                href={route('mensagens.create', params)}
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
                  <TableHead className="w-[40px]">#ID</TableHead>
                  <TableHead>Remetente</TableHead>
                  <TableHead>Destinatário</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Envio</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messages.data?.map((message: any) => (
                  <TableRow>
                    <TableCell className="font-medium">{message?.id}</TableCell>
                    <TableCell className="font-medium">{message?.remetente}</TableCell>
                    <TableCell className="font-medium">{message?.destinatario}</TableCell>
                    <TableCell className="font-medium">{message?.status}</TableCell>
                    <TableCell>{moment(message?.created_at).format("DD/MM/YYYY")}</TableCell>
                    <TableCell className="flex items-center justify-end gap-2">
                      <Button variant='edit' size='icon' asChild>
                        <Link
                          href={route('mensagens.edit', { 'mensagem': message.id, 'company': params })}
                        >
                          <SquarePen />
                        </Link>
                      </Button>
                      <ModalDelete
                        url="mensagens.destroy"
                        param={{ 'mensagem': message.id, 'company': params }}
                        title='Excluir Produto'
                        content={`a mensagem de ${message?.remetente}`}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        {messages.total > messages.per_page &&
          <CardFooter>
            <Pagination data={messages} />
          </CardFooter>
        }
      </Card>
    </TenantLayout>
  )
}

export default TMessages;