import { CreateClassButtonDialog } from '#components/createClassButtonDIalog';
import { NewUserButtonDialog } from '#components/createStudentButtonDialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';
import Background from '../assets/backgroundmp.png';

const alunos = [
  {
    nome: 'João Silva',
    idade: 12,
    sexo: 'Masculino',
    telefone: '(11) 98765-4321',
    presença: 'Presente',
    suspensão: 'Não',
  },
  {
    nome: 'Maria Oliveira',
    idade: 13,
    sexo: 'Feminino',
    telefone: '(11) 98765-4322',
    presença: 'Presente',
    suspensão: 'Não',
  },
  {
    nome: 'Pedro Santos',
    idade: 14,
    sexo: 'Masculino',
    telefone: '(11) 98765-4323',
    presença: 'Ausente',
    suspensão: 'Sim',
  },
  {
    nome: 'Alberto Santos',
    idade: 14,
    sexo: 'Masculino',
    telefone: '(11) 98765-4323',
    presença: 'Ausente',
    suspensão: 'Sim',
  },
  {
    nome: 'Pedro Santos',
    idade: 14,
    sexo: 'Masculino',
    telefone: '(11) 98765-4323',
    presença: 'Ausente',
    suspensão: 'Sim',
  },
  {
    nome: 'Pedro Santos',
    idade: 14,
    sexo: 'Masculino',
    telefone: '(11) 98765-4323',
    presença: 'Ausente',
    suspensão: 'Sim',
  },
  {
    nome: 'Pedro Santos',
    idade: 14,
    sexo: 'Masculino',
    telefone: '(11) 98765-4323',
    presença: 'Ausente',
    suspensão: 'Sim',
  },
  {
    nome: 'Pedro Santos',
    idade: 14,
    sexo: 'Masculino',
    telefone: '(11) 98765-4323',
    presença: 'Ausente',
    suspensão: 'Sim',
  },
  {
    nome: 'Pedro Santos',
    idade: 14,
    sexo: 'Masculino',
    telefone: '(11) 98765-4323',
    presença: 'Ausente',
    suspensão: 'Sim',
  },
];

export const Turma = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="h-20 bg-background-primary flex items-center justify-between px-9 shrink-0">
        <button
          onClick={() => navigate('/dashboard')}
          className="w-10 h-10 flex items-center justify-center text-text-primary bg-button-red rounded-sm cursor-pointer hover:bg-red-800 transition-colors"
        >
          <LogOut />
        </button>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <CreateClassButtonDialog />
            <NewUserButtonDialog />
          </div>
          <span className="text-text-primary text-2xl font-bold">
            Prof° Fellipe
          </span>
        </div>
      </header>
      <main className="w-full h-full relative flex-1 overflow-hidden flex flex-col justify-center gap-4">
        <img
          src={Background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover blur-[3px] brightness-50 scale-105"
        />
        <h2 className="z-10 text-5xl font-semibold text-text-primary">
          Turma 1
        </h2>
        <Table className="relative z-10 w-full h-full bg-background-primary text-text-secondary">
          <TableHeader>
            <TableRow>
              <TableHead className="text-text-primary">Nome</TableHead>
              <TableHead className="text-text-primary">Idade</TableHead>
              <TableHead className="text-text-primary">Sexo</TableHead>
              <TableHead className="text-text-primary">Telefone</TableHead>
              <TableHead className="text-text-primary">presença</TableHead>
              <TableHead className="text-text-primary">suspenção</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alunos.map((aluno) => (
              <TableRow key={aluno.nome}>
                <TableCell className="font-medium">{aluno.nome}</TableCell>
                <TableCell>{aluno.idade}</TableCell>
                <TableCell>{aluno.sexo}</TableCell>
                <TableCell>{aluno.telefone}</TableCell>
                <TableCell
                  className={
                    aluno.presença === 'Presente'
                      ? 'bg-green-500 w-2 rounded-2xl'
                      : 'bg-red-500 w-2 rounded-2xl'
                  }
                >
                  {aluno.presença}
                </TableCell>
                <TableCell>{aluno.suspensão}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
};
