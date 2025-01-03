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
import { statusAgenda, tiposProdutos, unidadesProdutos } from '@/Utils/dataSelect'
import { Head, Link, router, usePage } from '@inertiajs/react'
import { ArrowLeft, CalendarClock, Check, ChevronsUpDown, Save } from 'lucide-react'
import { useState } from 'react'
import { useForm } from "react-hook-form"

const editTAgenda
    = ({ agendamento, customers, tecnicos }: any) => {
        const params = route().params;
        const { errors } = usePage().props as any;
        const clientes = customers.map((customer: any) => ({ label: customer.nome, value: customer.id }));
        const [open, setOpen] = useState<boolean>(false);

        const form = useForm({
            defaultValues: {
                cliente_id: agendamento?.cliente_id,
                datahora: agendamento?.datahora,
                servico: agendamento?.servico,
                detalhes: agendamento?.detalhes,
                tecnico: agendamento?.tecnico,
                status: `${agendamento?.status}`,
                obs: agendamento?.obs,
            }
        });

        function onSubmit(values: any) {
            router.post(route("agendamentos.store", params), values);
        }

        return (
            <TenantLayout>
                <Head title='Adicionar Agendamento' />
                <THeaderMain icon={CalendarClock} title="Agendamentos">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link href={route('tdashboard', params)}>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <Link href={route('agendamentos.index', params)}>Agendamentos</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Cadastrar Agendamento</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </THeaderMain>
                <Card className='sm:p-4 p-2'>
                    <CardHeader className='p-0'>
                        <CardContent className='p-0 px-4'>
                            <div className='bg-blue-600 hover:bg-blue-600/80 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md'>
                                <Link
                                    className=''
                                    href={route('agendamentos.index', params)}
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
                                <div className='grid sm:grid-cols-2 sm:gap-4'>
                                    <FormField
                                        control={form.control}
                                        name="cliente_id"
                                        render={({ field }) => (
                                            <FormItem className=''>
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
                                                                                    form.setValue("cliente_id", cliente.label)
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
                                        name="datahora"
                                        render={({ field }) => (
                                            <FormItem className="">
                                                <FormLabel>Horário da visita</FormLabel>
                                                <FormControl>
                                                    <Input type='datetime-local' placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage >{errors.datahora}</FormMessage>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="servico"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel>Serviço requisitado</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.servico}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="detalhes"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel>Detalhes do serviço</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.detalhes}</FormMessage>
                                        </FormItem>
                                    )}
                                />

                                <div className='grid sm:grid-cols-2 sm:gap-4'>
                                    <FormField
                                        control={form.control}
                                        name="tecnico"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Técnico Responsável</FormLabel>
                                                <FormControl>
                                                    <Select {...field} onValueChange={field.onChange} defaultValue={field.value} >
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Selecione o técnico" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {tecnicos?.map((tecnico: any, tx: number) => (
                                                                <SelectItem key={tx} value={tecnico.name}>{tecnico.name}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage >{errors.tecnico}</FormMessage>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem className=''>
                                                <FormLabel>Status de Agenda</FormLabel>
                                                <FormControl>
                                                    <Select {...field} onValueChange={field.onChange} defaultValue={field.value} >
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Selecione o status" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {statusAgenda?.map((stat: any, sdx: number) => (
                                                                <SelectItem key={sdx} value={stat.value}>{stat.label}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage >{errors.status}</FormMessage>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="obs"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel>Observações</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.obs}</FormMessage>
                                        </FormItem>
                                    )}
                                />
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

export default editTAgenda
