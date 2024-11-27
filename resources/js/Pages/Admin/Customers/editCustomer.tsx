import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb';
import { Card, CardFooter } from '@/Components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Save, Users2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod';
import { Button } from '@/Components/ui/button';
import { maskCep, maskCpfCnpj, maskPhone, normalize, unMask } from '@/Utils/mask';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select"
import FlashMessage from '@/Components/FlashMessage';
// const formSchema = z.object({
//   name: z.string().min(1, { message: "Nome para o domínio" }),
//   domain: z.string(),
//   database: z.string(),
//   customer: z.string().min(1, { message: "Digite o nome do cliente" }),
//   cpfcnpj: z.string().min(1, { message: "Digite o CPF/CNPJ" }),
//   cep: z.string().min(1, { message: "Selecione o CEP" }),
//   state: z.string().min(1, { message: "Digite o estado" }),
//   city: z.string().min(1, { message: "Digite a cidade" }),
//   district: z.string().min(1, { message: "Digite o bairro" }),
//   street: z.string().min(1, { message: "Digite o logradouro" }),
//   number: z.string().min(1, { message: "Digite o numero" }),
//   complement: z.string().min(1, { message: "Digite o complemento" }),
//   email: z.string().min(1, { message: "Digite o amail" }),
//   telephone: z.string().min(1, { message: "Digite o telefone" }),
//   whatsapp: z.string().min(1, { message: "Digite o Whatapp" }),
//   status: z.string().min(1, { message: "Selecione o status" }),
//   payment: z.string().min(1, { message: "Selecione o agamento" })
// });

const EditCustomer = ({ customer, errors }: any) => {
  const { flash } = usePage().props as any;

  const form = useForm({
    defaultValues: {
      "name": customer?.name,
      "domain": customer?.domain,
      "database": customer?.database,
      "customer": customer?.customer,
      "cpfcnpj": customer?.cpfcnpj,
      "cep": customer?.cep,
      "state": customer?.state,
      "city": customer?.city,
      "district": customer?.district,
      "street": customer?.street,
      "number": customer?.number,
      "complement": customer?.complement,
      "email": customer?.email,
      "telephone": customer?.telephone,
      "whatsapp": customer?.whatsapp,
      "status": customer?.status,
      "payment": customer?.payment,
    }
  });

  function onSubmit(values: any) {
    router.patch(route("customers.update", customer?.id), values);
  }

  const handleDomainData = (value: any) => {
    form.setValue('name', value);
    form.setValue('domain', value + '.megbos.test');
    form.setValue('database', value);
  }
  const getCep = (cep: any) => {
    const cleanCep = unMask(cep);
    fetch(`https://viacep.com.br/ws/${cleanCep}/json/`)
      .then((response: any) => response.json())
      .then((result: any) => {
        form.setValue('state', result.uf);
        form.setValue('city', result.localidade);
        form.setValue('district', result.bairro);
        form.setValue('street', result.logradouro);
        form.setValue('complement', result.complemento);
      })
      .catch((error) => console.error(error));
  };
  return (
    <AdminLayout>
      <Head title="Dashboard" />
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
                  <Link href={route('customers.index')}>Clientes</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Editar cliente</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        {flash?.message && <FlashMessage message={flash?.message} />}
        <div className='px-6'>
          <Card className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" autoComplete="off">
                <div className="grid sm:grid-cols-3 gap-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Nome para o domínio</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} onChange={(e) => handleDomainData(e.target.value)} value={normalize(field.value)} />
                        </FormControl>
                        {errors.name && <div className="text-red-600 text-sm font-medium">{errors.name}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="domain"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Domínio</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} readOnly />
                        </FormControl>
                        {errors.domain && <div className="text-red-600 text-sm font-medium">{errors.domain}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="database"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Nome do banco de dados</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} readOnly />
                        </FormControl>
                        {errors.database && <div className="text-red-600 text-sm font-medium">{errors.database}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid sm:grid-cols-4 mt-4 gap-2'>
                  <FormField
                    control={form.control}
                    name="customer"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Nome do cliente</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        {errors.customer && <div className="text-red-600 text-sm font-medium">{errors.customer}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cpfcnpj"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>CPF/CNPJ</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} value={field.value ? maskCpfCnpj(field.value) : ''} maxLength={18} />
                        </FormControl>
                        {errors.cpfcnpj && <div className="text-red-600 text-sm font-medium">{errors.cpfcnpj}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cep"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>CEP</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} value={field.value ? maskCep(field.value) : ''} maxLength={9} onBlur={(e) => getCep(e.target.value)} />
                        </FormControl>
                        {errors.cep && <div className="text-red-600 text-sm font-medium">{errors.cep}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>UF</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        {errors.state && <div className="text-red-600 text-sm font-medium">{errors.state}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid sm:grid-cols-3 mt-4 gap-2'>
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Cidade</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        {errors.city && <div className="text-red-600 text-sm font-medium">{errors.city}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Bairro</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        {errors.district && <div className="text-red-600 text-sm font-medium">{errors.district}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Logradouro</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        {errors.street && <div className="text-red-600 text-sm font-medium">{errors.street}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid sm:grid-cols-4 mt-4 gap-2'>
                  <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Número</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        {errors.number && <div className="text-red-600 text-sm font-medium">{errors.number}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="complement"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Complemento</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        {errors.complement && <div className="text-red-600 text-sm font-medium">{errors.complement}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        {errors.email && <div className="text-red-600 text-sm font-medium">{errors.email}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telephone"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} value={field.value ? maskPhone(field.value) : ''} maxLength={15} />
                        </FormControl>
                        {errors.telephone && <div className="text-red-600 text-sm font-medium">{errors.telephone}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid sm:grid-cols-3 mt-4 gap-2'>
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Whatsapp</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        {errors.whatsapp && <div className="text-red-600 text-sm font-medium">{errors.whatsapp}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Status</FormLabel>
                        <FormControl>
                          <Select {...field} onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Selecione o status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="active">Ativo</SelectItem>
                                <SelectItem value="inactive">Inativo</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        {errors.status && <div className="text-red-600 text-sm font-medium">{errors.status}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="payment"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Pagamento</FormLabel>
                        <FormControl>
                          <Select {...field} onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Selecine o pagamento" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="paid">Pago</SelectItem>
                                <SelectItem value="pending">Pendente</SelectItem>
                                <SelectItem value="expired">Vencido</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        {errors.payment && <div className="text-red-600 text-sm font-medium">{errors.payment}</div>}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <CardFooter className='flex justify-end border-t border-gray-200 py-4 pb-0 px-0'>
                  <Button
                    variant="add"
                    size="default"
                    disabled={!form.formState.isDirty && !form.formState.isValid}
                  >
                    <Save /><span>Salvar</span>
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
export default EditCustomer;