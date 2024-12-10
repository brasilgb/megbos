import THeaderMain from '@/Components/Tenant/THeaderMain'
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb'
import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/Components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form'
import { Input } from '@/Components/ui/input'
import TenantLayout from '@/Layouts/TenantLayout'
import { maskCep, maskCpfCnpj, maskDate, maskPhone } from '@/Utils/mask'
import { Head, Link, router, usePage } from '@inertiajs/react'
import { ArrowLeft, Save, User2 } from 'lucide-react'
import React from 'react'
import { useForm } from "react-hook-form"

type Props = {}

const addTCustomer = ({ cliente, errors }: any) => {
    const params = route().params.company;

    const form = useForm({
        defaultValues: {
            id: cliente?.id,
            cpf: cliente?.cpf,
            nascimento: cliente?.nascimento,
            nome: cliente?.nome,
            email: cliente?.email,
            cep: cliente?.cep,
            uf: cliente?.uf,
            cidade: cliente?.cidade,
            bairro: cliente?.bairro,
            logradouro: cliente?.logradouro,
            numero: cliente?.numero,
            complemento: cliente?.complemento,
            telefone: cliente?.telefone,
            whatsapp: cliente?.whatsapp,
            contato: cliente?.contato,
            telcontato: cliente?.telcontato,
            obs: cliente?.obs,
        }
    });

    function onSubmit(values: any) {
        router.patch(route("clientes.update", {'cliente': cliente?.id, 'company': params}), values);
    }

    return (
        <TenantLayout>
            <Head title='Adiciona Cliente' />
            <THeaderMain icon={User2} title="Clientes">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link href={route('tdashboard', params)}>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <Link href={route('clientes.index', params)}>Clientes</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </THeaderMain>
            <Card className='sm:p-4 p-2'>
                <CardHeader className='p-0'>
                    <CardContent className='p-0 px-4'>
                        <div className='bg-blue-600 hover:bg-blue-600/80 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md'>
                            <Link
                                className=' '
                                href={route('clientes.index', params)}
                            >
                                <ArrowLeft className='w-6 h-6' />
                            </Link>
                        </div>
                    </CardContent>
                    <CardContent></CardContent>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" autoComplete='off'>
                            <div className='grid sm:grid-cols-6 sm:gap-4'>
                                <FormField
                                    control={form.control}
                                    name="cpf"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>CPF/CNPJ</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} value={maskCpfCnpj(field.value)} maxLength={18} />
                                            </FormControl>
                                            <FormMessage >{errors.cpf}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="nascimento"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nascimento</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} value={maskDate(field.value)} maxLength={10} />
                                            </FormControl>
                                            <FormMessage >{errors.nascimento}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="nome"
                                    render={({ field }) => (
                                        <FormItem className="sm:col-span-2">
                                            <FormLabel>Nome</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.nome}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="sm:col-span-2">
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.email}</FormMessage>
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
                                                <Input placeholder="" {...field} value={maskCep(field.value)} maxLength={9} />
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
                                        <FormItem className='sm:col-span-2'>
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
                                        <FormItem className='sm:col-span-2'>
                                            <FormLabel>Bairro</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.bairro}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='grid sm:grid-cols-5 sm:gap-4'>
                                <FormField
                                    control={form.control}
                                    name="logradouro"
                                    render={({ field }) => (
                                        <FormItem className='col-span-2'>
                                            <FormLabel>Logradouro</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.logradouro}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="numero"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Número</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.numero}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="complemento"
                                    render={({ field }) => (
                                        <FormItem className='col-span-2'>
                                            <FormLabel>Complemento</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.complemento}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='grid sm:grid-cols-5 sm:gap-4'>
                                <FormField
                                    control={form.control}
                                    name="telefone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Telefone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} value={maskPhone(field.value)} maxLength={15} />
                                            </FormControl>
                                            <FormMessage >{errors.telefone}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="whatsapp"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Whatsapp(Ex: 5551985471163)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} maxLength={14} />
                                            </FormControl>
                                            <FormMessage >{errors.whatsapp}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="contato"
                                    render={({ field }) => (
                                        <FormItem className='sm:col-span-2'>
                                            <FormLabel>Nome do contato</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.contato}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="telcontato"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Telefone do contato</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} value={maskPhone(field.value)} maxLength={15} />
                                            </FormControl>
                                            <FormMessage >{errors.telcontato}</FormMessage>
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

export default addTCustomer