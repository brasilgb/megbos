import { Copy, ImagePlus, Printer, Save } from "lucide-react"

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
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"

export function TDialogImage() {
  return (
    <Dialog>
      <DialogTrigger asChild>

        <Button title='Adicionar imagens as ordens' variant="addimg" size='icon'>
          <ImagePlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle><ImagePlus /></DialogTitle>
          <DialogDescription>
            Selecione as imagens a serem inseridas.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="img" className="sr-only">
              Imagens
            </Label>
            <Input
              type="file"
              id="img"
              readOnly
              multiple
            />
          </div>
        </div>
        <DialogFooter className="justify-end">
          <DialogClose asChild>
            <Button type="button" variant="add">
              <Save /> Salvar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
