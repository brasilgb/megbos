import THeaderMain from '@/Components/Tenant/THeaderMain'
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb'
import { Button } from '@/Components/ui/button'
import { Card } from '@/Components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form'
import { Input } from '@/Components/ui/input'
import TenantLayout from '@/Layouts/TenantLayout'
import { maskCep, maskCpfCnpj, maskDate, maskPhone } from '@/Utils/mask'
import { Head, Link, router, usePage } from '@inertiajs/react'
import { User2 } from 'lucide-react'
import React from 'react'
import { useForm } from "react-hook-form"

type Props = {}

const addTCustomer = ({customer}:any) => {
    const params = route().params;
    const { errors } = usePage().props as any;

    console.log(customer !== null ? customer + 1 : 1);
    const form = useForm({
        defaultValues: {
            id: customer !== null ? customer.id + 1 : 1,
            cpf: "",
            nascimento: "",
            nome: "",
            email: "",
            cep: "",
            uf: "",
            cidade: "",
            bairro: "",
            logradouro: "",
            numero: "",
            complemento: "",
            telefone: "",
            whatsapp: "",
            contato: "",
            telcontato: "",
            obs: "",
        }
    });


    function onSubmit(values: any) {
        router.post(route("tcustomers.store", params), values);
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
                        <Link href={route('tcustomers.index', params)}>Clientes</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </THeaderMain>
            <Card className='sm:p-4 p-2'>
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

                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </Card>
        </TenantLayout>
    )
}

export default addTCustomer