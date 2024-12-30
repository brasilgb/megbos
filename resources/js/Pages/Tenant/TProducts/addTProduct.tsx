import THeaderMain from '@/Components/Tenant/THeaderMain'
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb'
import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/Components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form'
import { Input } from '@/Components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select'
import TenantLayout from '@/Layouts/TenantLayout'
import { tiposProdutos, unidadesProdutos } from '@/Utils/dataSelect'
import { maskCep, maskCpfCnpj, maskDate, maskPhone } from '@/Utils/mask'
import { Head, Link, router, usePage } from '@inertiajs/react'
import { ArrowLeft, Save, ShoppingBasket, User2 } from 'lucide-react'
import { useForm } from "react-hook-form"

type Props = {}

const addTProduct
 = ({ customer }: any) => {
    const params = route().params;
    const { errors } = usePage().props as any;

    const form = useForm({
        defaultValues: {
            codbarra: "",
            descricao: "",
            partnumber: "",
            valcompra: "",
            valvenda: "",
            unidade: "",
            quantidade: "",
            estmaximo: "",
            estminimo: "",
            tipo: "",
        }
    });


    function onSubmit(values: any) {
        router.post(route("produtos.store", params), values);
    }

    return (
        <TenantLayout>
            <Head title='Adiciona Produto' />
            <THeaderMain icon={ShoppingBasket} title="produtos">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link href={route('tdashboard', params)}>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <Link href={route('produtos.index', params)}>Clientes</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Cadastrar Produto</BreadcrumbPage>
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
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" autoComplete='off'>
                            <div className='grid sm:grid-cols-2 sm:gap-4'>
                                <FormField
                                    control={form.control}
                                    name="descricao"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Descrição</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.descricao}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="partnumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Número da peça(PN)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='grid sm:grid-cols-3 sm:gap-4'>
                                <FormField
                                    control={form.control}
                                    name="valcompra"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel>Valor da compra</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.valcompra}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="valvenda"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel>Valor da Venda</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.valvenda}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="quantidade"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel>Quantidade</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.quantidade}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='grid sm:grid-cols-4 sm:gap-4'>
                                <FormField
                                    control={form.control}
                                    name="unidade"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Unidade de Medida</FormLabel>
                                            <FormControl>
                                                <Select {...field} onValueChange={field.onChange} defaultValue={field.value} >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Selecione a medida" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {unidadesProdutos?.map((un: any, udx: number) => (
                                                            <SelectItem key={udx} value={un.value}>{un.label}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage >{errors.unidade}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="estmaximo"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Estoque Máximo</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.estmaximo}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="estminimo"
                                    render={({ field }) => (
                                        <FormItem className=''>
                                            <FormLabel>Estoque Mínimo</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage >{errors.estminimo}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="tipo"
                                    render={({ field }) => (
                                        <FormItem className=''>
                                            <FormLabel>Tipo de Produto</FormLabel>
                                            <FormControl>
                                            <Select {...field} onValueChange={field.onChange} defaultValue={field.value} >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Selecione o tipo" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {tiposProdutos?.map((tp: any, tdx: number) => (
                                                            <SelectItem key={tdx} value={tp.value}>{tp.label}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage >{errors.tipo}</FormMessage>
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

export default addTProduct
