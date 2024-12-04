import FlashMessage from '@/Components/FlashMessage'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/Components/ui/breadcrumb'
import { Button } from '@/Components/ui/button'
import { Card, CardFooter } from '@/Components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form'
import { Input } from '@/Components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select'
import AdminLayout from '@/Layouts/AdminLayout'
import { maskPhone } from '@/Utils/mask'
import { Head, Link, router, usePage } from '@inertiajs/react'
import { Eye, EyeOff, Save, User } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const editUser = ({ user }: any) => {

    const { errors, flash } = usePage().props as any;
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const form = useForm({
        defaultValues: {
            name: user?.name,
            email: user?.email,
            roles: user?.roles,
            status: user?.status,
            telephone: user?.telephone,
            whatsapp: user?.whatsapp,
            password: '',
            password_confirmation: ''
        }
    });

    function onSubmit(values: any) {
        router.patch(route("users.update", user?.id), values);
    }

    return (
        <AdminLayout>
            <Head title="Usuários" />
            <div className='flex flex-col gap-4 my-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-start justify-start px-6 gap-2 text-gray-600'>
                        <User className='h-6 w-6' /> <span className='text-xl font-bold'>Clientes</span>
                    </div>
                    <div className='px-6'>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <Link href={route('dashboard')}>Home</Link>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <Link href={route('users.index')}>Usuários</Link>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Adicionar usuário</BreadcrumbPage>
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
                                                <FormLabel>Nome</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                {errors.name && <div className="text-red-600 text-sm font-medium">{errors.name}</div>}
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
                                                    <Input placeholder="" {...field} maxLength={15} value={maskPhone(field.value)} />
                                                </FormControl>
                                                {errors.telephone && <div className="text-red-600 text-sm font-medium">{errors.telephone}</div>}
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-2">
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>Senha</FormLabel>
                                                <div className="relative">
                                                    <FormControl>
                                                        <Input type={passwordVisibility ? 'text' : 'password'} placeholder="" {...field} />
                                                    </FormControl>
                                                    <Button
                                                        type="button"
                                                        className="absolute right-0.5 top-0.5"
                                                        onClick={() => setPasswordVisibility(!passwordVisibility)}
                                                        size="icon"
                                                        variant="link"
                                                    >
                                                        {passwordVisibility ? <EyeOff /> : <Eye />}
                                                    </Button>
                                                </div>
                                                {errors.password && <div className="text-red-600 text-sm font-medium">{errors.password}</div>}
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password_confirmation"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>Confirme a senha</FormLabel>
                                                <div className="relative">
                                                    <FormControl>
                                                        <Input type={passwordVisibility ? 'text' : 'password'} placeholder="" {...field} />
                                                    </FormControl>
                                                    <Button
                                                        type="button"
                                                        className="absolute right-0.5 top-0.5"
                                                        onClick={() => setPasswordVisibility(!passwordVisibility)}
                                                        size="icon"
                                                        variant="link"
                                                    >
                                                        {passwordVisibility ? <EyeOff /> : <Eye />}
                                                    </Button>
                                                </div>
                                                {errors.password_confirmation && <div className="text-red-600 text-sm font-medium">{errors.password_confirmation}</div>}
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid sm:grid-cols-3 gap-2">
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
                                        name="roles"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>Função</FormLabel>
                                                <FormControl>
                                                    <Select {...field} onValueChange={field.onChange} value={field.value}>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Selecione a função" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectItem value="admin">Administrador</SelectItem>
                                                                <SelectItem value="user">Operador</SelectItem>
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
        </AdminLayout >
    )
}

export default editUser