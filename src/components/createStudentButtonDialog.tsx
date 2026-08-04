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
import { useForm, Controller } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { toast } from '@/components/ui/toast';

const sexo = [
  { value: 'masculino', label: 'Masculino' },
  { value: 'feminino', label: 'Feminino' },
];

const formSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),

  age: z.string().min(1, 'Idade deve ser no mínimo 12'),

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
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      age: '',
      sexo: '',
      number: '',
      nomeResponsavel: '',
      celularResponsavel: '',
      endereco: '',
      doencas: '',
      restricoes: '',
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    console.log('Aluno(a) criado com sucesso!');
    if (
      data.name &&
      data.age &&
      data.sexo &&
      data.number &&
      data.nomeResponsavel &&
      data.celularResponsavel &&
      data.endereco &&
      data.doencas &&
      data.restricoes
    ) {
      reset();
      setOpen(false);
      toast.add({
        type: 'success',
        description: 'Aluno Criado com sucesso!',
      });
    }
  };
  const onError = (errors: unknown) => {
    console.log('ERROS');
    console.log(errors);
    toast.add({
      type: 'error',
      description: 'Por favor, preencha todos os campos obrigatórios.',
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        id="new_user_form"
        className=""
      >
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
          <FieldGroup className="grid grid-cols-1 gap-4 py-4">
            <Field>
              <Label htmlFor="name">Nome do Aluno(a)</Label>
              <Input
                id="name"
                placeholder="Nome do Aluno(a)"
                {...register('name')}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </Field>
            <Field>
              <Label htmlFor="age">Idade</Label>
              <Input id="age" {...register('age')} placeholder="ex: 18" />
              {errors.age && (
                <span className="text-red-500">{errors.age.message}</span>
              )}
            </Field>
            <Field>
              <Label htmlFor="sexo">Sexo</Label>

              <Controller
                name="sexo"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
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
                )}
              />

              {errors.sexo && (
                <span className="text-red-500">{errors.sexo.message}</span>
              )}
            </Field>
            <Field>
              <Label htmlFor="number">Celular</Label>
              <Input
                id="number"
                placeholder="ex: (00) 00000-0000"
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
                placeholder="Nome do Responsavel"
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
                placeholder="ex: (00) 00000-0000"
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
                placeholder="ex: Rua, Número, Bairro"
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
                placeholder="ex: Diabetes, Hipertensão, etc."
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
                placeholder="ex: Restrições Alimentares, Alergias, etc."
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
                <Button
                  variant="outline"
                  className="cursor-pointer"
                  onClick={() => reset()}
                >
                  Cancelar
                </Button>
              }
            />
            <Button
              type="submit"
              className="cursor-pointer"
              form="new_user_form"
              onClick={() => console.log('clicou')}
            >
              Criar
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
