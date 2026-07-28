import { useNavigate } from 'react-router';
import { LogOut, UserPlus, FunnelPlus } from 'lucide-react';
import Background from '../assets/backgroundmp.png';
import logoGrande from '../assets/LogoMatchTransparent2_resizedbanner 1@2x.png';
import { TurmaCard } from '../components/turmaCard';

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* header */}
      <header className="h-20 bg-background-primary flex items-center justify-between px-9 shrink-0">
        <button
          onClick={() => navigate('/')}
          className="w-10 h-10 flex items-center justify-center text-text-primary bg-button-red rounded-sm cursor-pointer hover:bg-red-800 transition-colors"
        >
          <LogOut />
        </button>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center text-text-primary bg-button-background-primary rounded-sm cursor-pointer hover:bg-cyan-950 transition-colors">
              <FunnelPlus />
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-text-primary bg-button-background-secondary rounded-sm cursor-pointer hover:bg-cyan-900 transition-colors">
              <UserPlus />
            </button>
          </div>
          <span className="text-text-primary text-2xl font-bold">
            Prof° Fellipe
          </span>
        </div>
      </header>

      {/* main content */}
      <main className="w-full h-full relative flex-1 overflow-hidden px-10 py-10">
        <img
          src={Background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover blur-[3px] brightness-50 scale-105"
        />

        <div className="relative z-10 w-full- h-full flex flex-col items-center justify-between gap-10 mt-10">
          <img src={logoGrande} alt="Logo Grande" className="relative z-10" />
          <h2 className="text-5xl font-semibold text-text-primary">Turmas</h2>
          <div className="w-full h-full flex flex-col gap-4">
            <div className="w-full flex justify-between">
              <span className="font-medium text-3xl text-text-primary">
                Bem vindo professor Fellipe
              </span>
              <span className="font-medium text-3xl text-text-primary">
                Total de alunos: 34
              </span>
            </div>
            <div className="w-full h-100 bg-text-secondary/20 rounded-3xl shadow-2xl flex items-center justify-center gap-10 flex-wrap">
              <TurmaCard />
              <TurmaCard />
              <TurmaCard />
              <TurmaCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
