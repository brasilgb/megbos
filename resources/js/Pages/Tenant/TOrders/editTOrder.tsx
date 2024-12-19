import THeaderMain from '@/Components/Tenant/THeaderMain'
import { BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb'
import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/Components/ui/card'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/Components/ui/command'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form'
import { Input } from '@/Components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/Components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select'
import { Textarea } from '@/Components/ui/textarea'
import TenantLayout from '@/Layouts/TenantLayout'
import { cn } from '@/lib/utils'
import { Head, Link, router, usePage } from '@inertiajs/react'
import { ArrowLeft, Check, ChevronsUpDown, Save, Wrench } from 'lucide-react'
import { useState } from 'react'
import { useForm } from "react-hook-form"

type Props = {}

const editTOrder = ({ order, customers }: any) => {
    const params = route().params.company;
    const { errors } = usePage().props as any;
    const clientes = customers.map((customer: any) => ({ label: customer.nome, value: customer.id }));
    const [open, setOpen] = useState<boolean>(false)

    const form = useForm({
        defaultValues: {
            id: order.id,
            cliente_id: order.cliente_id,
            equipamento: order.equipamento,
            modelo: order.modelo,
            senha: order.senha,
            defeito: order.defeito,
            estado: order.estado,
            acessorios: order.acessorios,
            previsao: order.previsao,
            descorcamento: order.descorcamento,
            valorcamento: "0",
            pecas: order.pecas,
            valpecas: order.valpecas,
            valservico: order.valservico,
            custo: order.custo,
            status: order.status,
            tecnico: order.tecnico,
            servico: order.servico,
            dtentrega: order.dtentrega,
            obs: order.obs,
        }
    });

    function onSubmit(values: any) {
        router.patch(route("ordens.update", { 'ordem': order?.id, 'company': params }), values);
    }

    return (
        <TenantLayout>
            <Head title='Alterar Ordem de serviço' />
            <THeaderMain icon={Wrench} title="Ordens">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link href={route('tdashboard', params)}>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <Link href={route('ordens.index', params)}>Ordens</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Alterar Ordem</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </THeaderMain>
            <Card className='sm:p-4 p-2'>
                <CardHeader className='p-0'>
                    <CardContent className='p-0 px-4'>
                        <div className='bg-blue-600 hover:bg-blue-600/80 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md'>
                            <Link
                                className=' '
                                href={route('ordens.index', params)}
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
                            <div className='grid sm:grid-cols-5 sm:gap-4'>
                                <FormField
                                    control={form.control}
                                    name="id"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>N° Ordem</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.id}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cliente_id"
                                    render={({ field }) => (
                                        <FormItem className='sm:col-span-2'>
                                            <FormLabel>Nome do cliente</FormLabel>
                                            <FormControl>
                                                <Popover open={open} onOpenChange={setOpen}>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button
                                                                variant="outline"
                                                                role="combobox"
                                                                className={cn(
                                                                    "w-full justify-between",
                                                                    !field.value && "text-muted-foreground"
                                                                )}
                                                            >
                                                                {field.value
                                                                    ? clientes.find(
                                                                        (cliente: any) => cliente.value === field.value
                                                                    )?.label
                                                                    : "Selecione o cliente"}
                                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                                                        <Command>
                                                            <CommandInput placeholder="Localize cliente..." />
                                                            <CommandList>
                                                                <CommandEmpty>Cliente não encontrado.</CommandEmpty>
                                                                <CommandGroup>
                                                                    {clientes.map((cliente: any) => (
                                                                        <CommandItem
                                                                            value={cliente.label}
                                                                            key={cliente.value}
                                                                            onSelect={() => {
                                                                                form.setValue("cliente_id", cliente.value)
                                                                                setOpen(false)
                                                                            }}
                                                                        >
                                                                            {cliente.label}
                                                                            <Check
                                                                                className={cn(
                                                                                    "ml-auto",
                                                                                    cliente.value === field.value
                                                                                        ? "opacity-100"
                                                                                        : "opacity-0"
                                                                                )}
                                                                            />
                                                                        </CommandItem>
                                                                    ))}
                                                                </CommandGroup>
                                                            </CommandList>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                            </FormControl>
                                            <FormMessage >{errors.cliente_id}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="equipamento"
                                    render={({ field }) => (
                                        <FormItem className="sm:col-span-2">
                                            <FormLabel>Tipo de Equipamento</FormLabel>
                                            <FormControl>
                                                <Select {...field} onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Selecione o equipamento" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="mobile">Mobile</SelectItem>
                                                        <SelectItem value="notebook">Notebook</SelectItem>
                                                        <SelectItem value="pc">PC</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage >{errors.equipamento}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='grid sm:grid-cols-4 sm:gap-4 mt-6'>
                                <FormField
                                    control={form.control}
                                    name="modelo"
                                    render={({ field }) => (
                                        <FormItem className="sm:col-span-2">
                                            <FormLabel>Modelo do Dquipamento</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.modelo}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="senha"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Senha</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.senha}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="previsao"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Previsão de entrega</FormLabel>
                                            <FormControl>
                                                <Input type='date' placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.previsao}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='grid sm:grid-cols-3 sm:gap-4 mt-6'>
                                <FormField
                                    control={form.control}
                                    name="defeito"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Defeito relatado</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.defeito}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="estado"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Estado do equipamento</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.estado}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="acessorios"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Acessorios</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.acessorios}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='grid sm:grid-cols-4 sm:gap-4 mt-6'>
                                <FormField
                                    control={form.control}
                                    name="descorcamento"
                                    render={({ field }) => (
                                        <FormItem className='sm:col-span-2'>
                                            <FormLabel>Descrição do pré-orçamento</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.descorcamento}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="valorcamento"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Valor orçamento</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.valorcamento}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="status"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Status do orçamento</FormLabel>
                                            <FormControl>
                                                <Select {...field} onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Selecione o status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="3">Orçamento Gerado</SelectItem>
                                                        <SelectItem value="4">Orçamento Aprovado</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage >{errors.status}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='mt-6'>
                                <FormField
                                    control={form.control}
                                    name="obs"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Observações</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.obs}</FormMessage>
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

export default editTOrder