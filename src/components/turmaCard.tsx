import { Trash2, Pencil, UsersRound } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface turmaCardProps {
  turmaName: string;
  turmaDescription: string;
  turmaStudentsNumber: number;
}

export const TurmaCard = ({
  turmaName,
  turmaDescription,
  turmaStudentsNumber,
}: turmaCardProps) => {
  return (
    <div className="w-100 h-75 bg-background-primary rounded-[20px] shadow-2xl p-4 flex flex-col">
      {/* Botões */}
      <div className="flex justify-end gap-2">
        <button className="w-8 h-8 flex items-center justify-center text-text-primary bg-button-background-secondary rounded-sm hover:bg-button-background-primary cursor-pointer">
          <Pencil size={18} />
        </button>

        <AlertDialog>
          <AlertDialogTrigger
            render={
              <button className="w-8 h-8 flex items-center justify-center text-text-primary bg-button-red rounded-sm hover:bg-red-800 cursor-pointer">
                <Trash2 size={18} />
              </button>
            }
          ></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação não pode ser desfeita. Isso excluirá permanentemente a
                turma.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="cursor-pointer">
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction className="bg-destructive text-text-primary hover:bg-destructive/90 cursor-pointer">
                Deletar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-text-secondary">
            {turmaName}
          </h2>

          <p className="text-text-secondary font-light">{turmaDescription}</p>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <div className="w-17.5 h-17.5 rounded-[10px] bg-background-secondary flex items-center justify-center">
            <UsersRound size={42} className="text-text-secondary" />
          </div>

          <span className="text-[40px] font-semibold text-text-secondary">
            {turmaStudentsNumber}
          </span>
        </div>
      </div>
    </div>
  );
};
