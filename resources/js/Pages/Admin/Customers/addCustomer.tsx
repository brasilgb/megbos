import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb';
import { Card } from '@/Components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router } from '@inertiajs/react';
import { Users2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod';

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
    router.post(route("users.store"), values);
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
                          <Input placeholder="" {...field} />
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
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
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
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid sm:grid-cols-4 mt-4 gap-2'>
                  <FormField
                    control={form.control}
                    name="database"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Nome do banco de dados</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} readOnly />
                        </FormControl>
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
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
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
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
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
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
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid sm:grid-cols-3 mt-4 gap-2'>
                  <FormField
                    control={form.control}
                    name="database"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Nome do banco de dados</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} readOnly />
                        </FormControl>
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
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
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
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
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid sm:grid-cols-4 mt-4 gap-2'>
                  <FormField
                    control={form.control}
                    name="database"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Nome do banco de dados</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} readOnly />
                        </FormControl>
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
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
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
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
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
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
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid sm:grid-cols-3 mt-4 gap-2'>
                  <FormField
                    control={form.control}
                    name="database"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Nome do banco de dados</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} readOnly />
                        </FormControl>
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
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
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
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
                        {/* {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>} */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
export default AddCustomer;