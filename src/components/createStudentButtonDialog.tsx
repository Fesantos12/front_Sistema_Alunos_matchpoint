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
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const sexo = [
  { value: 'masculino', label: 'Masculino' },
  { value: 'feminino', label: 'Feminino' },
];

const formSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),

  age: z.string().min(1, 'Idade é obrigatória'),

  sexo: z.string().min(1, 'Selecione o sexo do aluno'),

  number: z
    .string()
    .min(1, 'Celular é obrigatório')
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Celular inválido'),

  nomeResponsavel: z.string().min(1, 'Nome do responsável é obrigatório'),

  celularResponsavel: z
    .string()
    .min(1, 'Celular do responsável é obrigatório')
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Celular inválido'),

  endereco: z.string().min(1, 'Endereço é obrigatório'),

  doencas: z.string().optional(),

  restricoes: z.string().optional(),
});

export const NewUserButtonDialog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    console.log('Aluno(a) criado com sucesso!');
  };

  return (
    <Dialog>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <Label htmlFor="name">Nome do Aluno(a)</Label>
              <Input
                id="name"
                defaultValue="Nome do Aluno(a)"
                {...register('name')}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </Field>
            <Field>
              <Label htmlFor="age">Idade</Label>
              <Input id="age" {...register('age', { valueAsNumber: true })} />
              {errors.age && (
                <span className="text-red-500">{errors.age.message}</span>
              )}
            </Field>
            <Field>
              <Label htmlFor="sexo">Sexo</Label>
              <Select
                items={sexo}
                onValueChange={(value) => console.log(value)}
                {...register('sexo')}
              >
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
              {errors.sexo && (
                <span className="text-red-500">{errors.sexo.message}</span>
              )}
            </Field>
            <Field>
              <Label htmlFor="number">Celular</Label>
              <Input
                id="number"
                defaultValue="ex: (00) 00000-0000"
                {...register('number')}
              />
              {errors.number && (
                <span className="text-red-500">{errors.number.message}</span>
              )}
            </Field>
            <Field>
              <Label htmlFor="nomeResponsavel">Nome do Responsavel</Label>
              <Input
                id="nomeResponsavel"
                defaultValue="Nome do Responsavel"
                {...register('nomeResponsavel')}
              />
              {errors.nomeResponsavel && (
                <span className="text-red-500">
                  {errors.nomeResponsavel.message}
                </span>
              )}
            </Field>
            <Field>
              <Label htmlFor="celularResponsavel">Celular do Responsavel</Label>
              <Input
                id="celularResponsavel"
                defaultValue="ex: (00) 00000-0000"
                {...register('celularResponsavel')}
              />
              {errors.celularResponsavel && (
                <span className="text-red-500">
                  {errors.celularResponsavel.message}
                </span>
              )}
            </Field>
            <Field>
              <Label htmlFor="endereco">Endereço</Label>
              <Input
                id="endereco"
                defaultValue="endereco"
                {...register('endereco')}
              />
              {errors.endereco && (
                <span className="text-red-500">{errors.endereco.message}</span>
              )}
            </Field>
            <Field>
              <Label htmlFor="doencas">Doenças</Label>
              <Input
                id="doencas"
                defaultValue="ex: Diabetes, Hipertensão, etc."
                {...register('doencas')}
              />
              {errors.doencas && (
                <span className="text-red-500">{errors.doencas.message}</span>
              )}
            </Field>
            <Field>
              <Label htmlFor="restricoes">Restrições</Label>
              <Input
                id="restricoes"
                defaultValue="ex: Restrições Alimentares, Alergias, etc."
                {...register('restricoes')}
              />
              {errors.restricoes && (
                <span className="text-red-500">
                  {errors.restricoes.message}
                </span>
              )}
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
