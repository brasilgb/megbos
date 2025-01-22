import FlashMessage from '@/Components/FlashMessage'
import THeaderMain from '@/Components/Tenant/THeaderMain'
import { BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb'
import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/Components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form'
import { Input } from '@/Components/ui/input'
import TenantLayout from '@/Layouts/TenantLayout'
import { Head, Link, router, usePage } from '@inertiajs/react'
import { ArrowLeft, Building2, Save } from 'lucide-react'
import { useForm } from 'react-hook-form'

const TCompany = ({ company }: any) => {
    console.log(company);

    const params = route().params.company;
    const { flash, errors } = usePage().props as any;

    const form = useForm({
        defaultValues: {
            empresa: company.empresa,
            razao: company.razao,
            cnpj: company.cnpj,
            logo: '',
            endereco: company.endereco,
            bairro: company.bairro,
            uf: company.uf,
            cidade: company.cidade,
            cep: company.cep,
            telefone: company.telefone,
            site: company.site,
            email: company.email
        }
    });

    function onSubmit(values: any) {
        router.post(route("empresa.update", { 'empresa': company?.id, 'company': params }), {
        // router.post(`empresa/${company.id}`, {
            _method: "put",
            ...values,
        });
    }

    return (
        <TenantLayout>
            <Head title='Adiciona Produto' />
            <THeaderMain icon={Building2} title="Empresa">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link href={route('tdashboard', params)}>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Dados da empresa</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </THeaderMain>
            <Card className='sm:p-4 p-2'>
                <CardHeader className='p-0'>
                    <CardContent className='p-0 px-4'>
                        <div className='bg-blue-600 hover:bg-blue-600/80 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md'>
                            <Link
                                className=''
                                href={route('produtos.index', params)}
                            >
                                <ArrowLeft className='w-6 h-6' />
                            </Link>
                        </div>
                    </CardContent>
                    <CardContent></CardContent>
                </CardHeader>
                {flash?.message && <FlashMessage message={flash?.message} />}
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" autoComplete='off'>
                            <div className='grid sm:grid-cols-4 sm:gap-4'>
                                <FormField
                                    control={form.control}
                                    name="logo"
                                    render={({ field: { value, onChange, ...fieldProps } }) => (
                                        <FormItem>
                                            <FormLabel>Logotipo</FormLabel>
                                            <FormControl>
                                                <Input type="file" {...fieldProps}
                                                    onChange={(event) =>
                                                        onChange(event.target.files && event.target.files[0])
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage >{errors.logo}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="empresa"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nome Curto da Empresa</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.empresa}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="razao"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Razão Social</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.razao}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cnpj"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>CNPJ</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.cnpj}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='grid sm:grid-cols-6 sm:gap-4'>
                                <FormField
                                    control={form.control}
                                    name="cep"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>CEP</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.cep}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="uf"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>UF</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.uf}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cidade"
                                    render={({ field }) => (
                                        <FormItem className='col-span-2'>
                                            <FormLabel>Cidade</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.cidade}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="bairro"
                                    render={({ field }) => (
                                        <FormItem className='col-span-2'>
                                            <FormLabel>Bairro</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.bairro}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='grid sm:grid-cols-4 sm:gap-4'>
                                <FormField
                                    control={form.control}
                                    name="endereco"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Endereço</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.endereco}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="telefone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Telefone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.telefone}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="site"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Site</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.site}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.email}</FormMessage>
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
                </CardContent>
            </Card>
        </TenantLayout>
    )
}

export default TCompany