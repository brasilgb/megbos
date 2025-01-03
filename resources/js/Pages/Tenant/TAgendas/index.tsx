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
import { statusAgendaByValue } from '@/Utils/functions';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { CalendarClock, Plus, SquarePen } from 'lucide-react';
import moment from 'moment';

const TAgendas = ({ agendas }: any) => {
  const { data, setData, post, get, processing, errors } = useForm({
    q: "",
  });
  const params = route().params.company;
  const { flash } = usePage().props as any;

  return (
    <TenantLayout>
      <Head title='Agendamentos' />
      <THeaderMain icon={CalendarClock} title="Agendamentos" >
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href={route('tdashboard', params)}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Agendamentos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </THeaderMain>
      <Card className='sm:p-4 p-2'>
        <CardHeader className='flex flex-row items-center justify-between px-0 py-0 pb-2 border-b'>
          <CardContent className='p-0 w-1/2'>
            <InputSearch placeholder={''} url={route('agendamentos.index', params)} />
          </CardContent>
          <CardContent className='p-0'>
            <Button
              asChild
              variant="add"
              size="icon"
            >
              <Link
                href={route('agendamentos.create', params)}
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
                  <TableHead>Cliente</TableHead>
                  <TableHead>Horário da visita</TableHead>
                  <TableHead>Técnico</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Cadastro</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agendas.data?.map((agenda: any) => (
                  <TableRow>
                    <TableCell className="font-medium">{agenda?.id}</TableCell>
                    <TableCell className="font-medium">{agenda?.cliente.nome}</TableCell>
                    <TableCell className="font-medium">
                      {moment(agenda.datahora).format(
                        "DD/MM/YYYY HH:mm:ss",
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{agenda?.tecnico}</TableCell>
                    <TableCell>{statusAgendaByValue(agenda?.status)}</TableCell>
                    <TableCell>{moment(agenda?.created_at).format("DD/MM/YYYY")}</TableCell>
                    <TableCell className="flex items-center justify-end gap-2">
                      <Button variant='edit' size='icon' asChild>
                        <Link
                          href={route('agendamentos.edit', { 'agendamento': agenda.id, 'company': params })}
                        >
                          <SquarePen />
                        </Link>
                      </Button>
                      <ModalDelete
                        url="agendamentos.destroy"
                        param={{ 'agendamento': agenda.id, 'company': params }}
                        title='Excluir Produto'
                        content={`o agendamento de ${agenda?.cliente.nome}`}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        {agendas.total > agendas.per_page &&
          <CardFooter>
            <Pagination data={agendas} />
          </CardFooter>
        }
      </Card>
    </TenantLayout>
  )
}

export default TAgendas;