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
import { Plus, Search, ShoppingBasket, SquarePen, User2 } from 'lucide-react';
import moment from 'moment';

const TProducts = ({ products }: any) => {
  const { data, setData, post, get, processing, errors } = useForm({
    q: "",
  });
  const params = route().params.company;
  const { flash } = usePage().props as any;

  return (
    <TenantLayout>
      <Head title='Produtos' />
      <THeaderMain icon={ShoppingBasket} title="Produtos" >
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href={route('tdashboard', params)}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Produtos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </THeaderMain>
      <Card className='sm:p-4 p-2'>
        <CardHeader className='flex flex-row items-center justify-between px-0 py-0 pb-2 border-b'>
          <CardContent className='p-0 w-1/2'>
            <InputSearch placeholder={''} url={route('produtos.index', params)} />
          </CardContent>
          <CardContent className='p-0'>
            <Button
              asChild
              variant="add"
              size="icon"
            >
              <Link
                href={route('produtos.create', params)}
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
                  <TableHead>Descrição</TableHead>
                  <TableHead>Estoque</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Cadastro</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.data?.map((product: any) => (
                  <TableRow>
                    <TableCell className="font-medium">{product?.id}</TableCell>
                    <TableCell className="font-medium">{product?.descricao}</TableCell>
                    <TableCell className="font-medium">{12}</TableCell>
                    <TableCell className="font-medium">{product?.valvenda}</TableCell>
                    <TableCell>{moment(product?.created_at).format("DD/MM/YYYY")}</TableCell>
                    <TableCell className="flex items-center justify-end gap-2">
                      <Button variant='edit' size='icon' asChild>
                        <Link
                          href={route('produtos.edit', { 'produto': product.id, 'company': params })}
                        >
                          <SquarePen />
                        </Link>
                      </Button>
                      <ModalDelete
                        url="produtos.destroy"
                        param={{ 'produto': product.id, 'company': params }}
                        title='Excluir Produto'
                        content={`o produto ${product?.descricao}`}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        {products.total > products.per_page &&
          <CardFooter>
            <Pagination data={products} />
          </CardFooter>
        }
      </Card>
    </TenantLayout>
  )
}

export default TProducts;