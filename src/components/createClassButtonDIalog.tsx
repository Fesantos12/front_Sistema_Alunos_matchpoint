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
import { FunnelPlus } from 'lucide-react';

export const CreateClassButtonDialog = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={
            <button className="w-10 h-10 flex items-center justify-center text-text-primary bg-button-background-primary rounded-sm cursor-pointer hover:bg-cyan-950 transition-colors">
              <FunnelPlus />
            </button>
          }
        />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Criar Turma</DialogTitle>
            <DialogDescription>
              Preencha os campos abaixo para criar uma nova turma.
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
              Criar
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
