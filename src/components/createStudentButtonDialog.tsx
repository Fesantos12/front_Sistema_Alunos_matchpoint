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
import { UserPlus } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const sexo = [
  { value: 'masculino', label: 'Masculino' },
  { value: 'feminino', label: 'Feminino' },
];

export const NewUserButtonDialog = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={
            <button className="w-10 h-10 flex items-center justify-center text-text-primary bg-button-background-secondary rounded-sm cursor-pointer hover:bg-cyan-900 transition-colors">
              <UserPlus />
            </button>
          }
        />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Novo Aluno(a)</DialogTitle>
            <DialogDescription>
              Preencha os dados do novo aluno(a) e clique em salvar.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="nameStudent-1">Nome do Aluno(a)</Label>
              <Input
                id="nameStudent-1"
                name="nameStudent"
                defaultValue="Nome do Aluno(a)"
              />
            </Field>
            <Field>
              <Label htmlFor="description-1">Idade</Label>
              <Input type="number" id="age" name="age" defaultValue="Idade" />
            </Field>
            <Field>
              <Label htmlFor="nameStudent-1">Sexo</Label>
              <Select items={sexo}>
                <SelectTrigger className="w-45">
                  <SelectValue placeholder="Selecione o sexo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {sexo.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label htmlFor="phonenumber">Celular</Label>
              <Input
                id="phone"
                name="phone"
                defaultValue="ex: (00) 00000-0000"
              />
            </Field>
            <Field>
              <Label htmlFor="nome-responsavel">Nome do Responsavel</Label>
              <Input
                id="parentName"
                name="parentName"
                defaultValue="Nome do Responsavel"
              />
            </Field>
            <Field>
              <Label htmlFor="celular-responsavel">
                Celular do Responsavel
              </Label>
              <Input
                id="parentPhone"
                name="parentPhone"
                defaultValue="ex: (00) 00000-0000"
              />
            </Field>
            <Field>
              <Label htmlFor="endereço">Endereço</Label>
              <Input id="address" name="address" defaultValue="Endereço" />
            </Field>
            <Field>
              <Label htmlFor="doenças">Doenças</Label>
              <Input
                id="diseases"
                name="diseases"
                defaultValue="ex: Diabetes, Hipertensão, etc."
              />
            </Field>
            <Field>
              <Label htmlFor="restrictions">Restrições</Label>
              <Input
                id="restrictions"
                name="restrictions"
                defaultValue="ex: Restrições Alimentares, Alergias, etc."
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
