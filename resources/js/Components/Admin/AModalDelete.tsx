import { Copy, Trash2, TriangleAlert } from "lucide-react"

import { Button } from "@/Components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog"
import { Link, router } from "@inertiajs/react";

interface ModalDeleteProps {
    url: string;
    param: string;
    title: string;
    content: string;
}

const ModalDelete = ({ url, param, title, content }: ModalDeleteProps) => {
    console.log(url + '/' + param);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive" size="icon"><Trash2 className="h-5 w-5" /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md w-[95%]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                    Você realmente deseja excluir {content}?
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2 justify-center text-sm text-red-500">
                    <div className="flex items-center gap-2">
                    <TriangleAlert className="w-4 h-4" />Esta operação não poderá ser desfeita.
                    </div>
                    </div>
                </div>
                <DialogFooter className="flex flex-row justify-between">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Fechar
                        </Button>
                    </DialogClose>
                    <Button variant="destructive" asChild>
                        <Link
                            href={route(url, param)}
                            as="button"
                            method="delete"
                        >
                            Excluir
                        </Link>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default ModalDelete;