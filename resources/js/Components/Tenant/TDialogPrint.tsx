import { Copy, Printer, PrinterIcon } from "lucide-react"

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
import { Link } from "@inertiajs/react"

export function TDialogPrint() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button title='Imprimir recibos e relatórios' variant="print" size='icon'>
                    <Printer />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader className="border-b pb-2">
                    <DialogTitle>
                        <PrinterIcon />
                    </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center gap-4">
                    <Button type="button" size="lg" variant="print" asChild>
                        <Link
                            className="w-full shadow-md"
                            href={""}
                        >
                            Recibo de entrada de equipamento
                        </Link>
                    </Button>
                    <Button type="button" size="lg" variant="print" asChild>
                        <Link
                            className="w-full shadow-md"
                            href={""}
                        >
                            Orçamento de serviços
                        </Link>
                    </Button>
                    <Button type="button" size="lg" variant="print" asChild>
                        <Link
                            className="w-full shadow-md"
                            href={""}
                        >
                            Recibo de entrega de equipamento
                        </Link>
                    </Button>
                    <Button type="button" size="lg" variant="print" asChild>
                        <Link
                            className="w-full shadow-md"
                            href={""}
                        >
                            Checklist de entrada de equipamento
                        </Link>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
