import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pencil } from 'lucide-react';

export const EditClassButtonDialog = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={
            <button className="w-8 h-8 flex items-center justify-center text-text-primary bg-button-background-secondary rounded-sm hover:bg-button-background-primary cursor-pointer">
              <Pencil size={18} />
            </button>
          }
        />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Editar Turma</DialogTitle>
            <DialogDescription>
              Faça as alterações necessárias na turma e clique em salvar.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="nameClass-1">Nome da Turma</Label>
              <Input
                id="nameClass-1"
                name="nameClass"
                defaultValue="Nome da Turma"
              />
            </Field>
            <Field>
              <Label htmlFor="description-1">Descrição</Label>
              <Input
                id="description-1"
                name="description"
                defaultValue="Descrição da turma"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose
              render={
                <Button variant="outline" className="cursor-pointer">
                  Cancelar
                </Button>
              }
            />
            <Button type="submit" className="cursor-pointer">
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
