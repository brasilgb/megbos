import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb';
import { Card, CardFooter } from '@/Components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Save, Users2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod';
import { Button } from '@/Components/ui/button';
import { maskCpfCnpj, normalize, unMask } from '@/Utils/mask';

const formSchema = z.object({
  name: z.string().min(1, { message: "Nome para o domínio" }),
  domain: z.string(),
  database: z.string(),
  customer: z.string().min(1, { message: "Digite o nome do cliente" }),
  cpfcnpj: z.string().min(1, { message: "Digite o CPF/CNPJ" }),
  cep: z.string().min(1, { message: "Selecione o CEP" }),
  state: z.string().min(1, { message: "Digite o estado" }),
  city: z.string().min(1, { message: "Digite a cidade" }),
  district: z.string().min(1, { message: "Digite o bairro" }),
  street: z.string().min(1, { message: "Digite o logradouro" }),
  number: z.string().min(1, { message: "Digite o numero" }),
  complement: z.string().min(1, { message: "Digite o complemento" }),
  email: z.string().min(1, { message: "Digite o amail" }),
  telephone: z.string().min(1, { message: "Digite o telefone" }),
  whatsapp: z.string().min(1, { message: "Digite o Whatapp" }),
  status: z.string().min(1, { message: "Selecione o status" }),
  payment: z.string().min(1, { message: "Selecione o agamento" })
});

const AddCustomer = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "name": "",
      "domain": "",
      "database": "",
      "customer": "",
      "cpfcnpj": "",
      "cep": "",
      "state": "",
      "city": "",
      "district": "",
      "street": "",
      "number": "",
      "complement": "",
      "email": "",
      "telephone": "",
      "whatsapp": "",
      "status": "",
      "payment": "",
    }
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.post(route("clientes.store"), values);
  }

  const handleDomainData = (value: any) => {
    form.setValue('name', value);
    form.setValue('domain', value+'.megbos.test');
    form.setValue('database', value);
  }

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
                  <BreadcrumbLink href="/components">Clientes</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Adicionar cliente</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
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
                          <Input placeholder="" {...field} onChange={(e) => handleDomainData(e.target.value)} value={normalize(field.value)}/>
                        </FormControl>
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
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
                          <Input placeholder="" {...field} />
                        </FormControl>
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
                          <Input placeholder="" {...field} />
                        </FormControl>
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
                          <Input placeholder="" {...field} />
                        </FormControl>
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
                          <Input placeholder="" {...field} />
                        </FormControl>
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
                          <Input placeholder="" {...field} />
                        </FormControl>
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
export default AddCustomer;