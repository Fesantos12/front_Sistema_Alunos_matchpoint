import { Trash2, Pencil } from 'lucide-react';

interface turmaCardProps {}
export const TurmaCard = ({}: turmaCardProps) => {
  return (
    <div className="w-100 h-75 bg-background-primary rounded-[20px] opacity-100 shadow-2xl">
      <div className="flex gap-2 ml-4 mt-4">
        <button className="w-10 h-10 flex items-center justify-center text-text-primary bg-button-background-secondary rounded-sm cursor-pointer hover:bg-button-background-primary transition-colors">
          <Pencil />
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-text-primary bg-button-red rounded-sm cursor-pointer hover:bg-red-800 transition-colors">
          <Trash2 />
        </button>
      </div>
    </div>
  );
};
