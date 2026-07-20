import { useState } from 'react';
import Logo from './assets/LogoMatchTransparent2_resizedbanner 1.png';
import Background from './assets/backgroundmp.png';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router';

export function App() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <header className="h-20 bg-background-primary flex items-center justify-between px-9 shrink-0">
        <img src={Logo} alt="Logo" />
        <span className="text-text-primary text-2xl font-bold">Login</span>
      </header>

      {/* Main Content */}
      <main className="relative flex-1 overflow-hidden flex items-center justify-center py-10 px-10">
        <img
          src={Background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover blur-[3px] brightness-50 scale-105"
        />

        <div className="relative z-10 w-225 h-150 bg-background-primary rounded-[20px] flex flex-col gap-4 opacity-90 shadow-2xl shadow-black hover:opacity-95 transition-opacity max-md:w-100">
          {/* Login Form */}
          <form
            action=""
            className="flex flex-col w-full h-full gap-4 py-8 px-40 items-center justify-center max-md:px-10"
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/dashboard');
            }}
          >
            <h1 className="text-text-primary text-[64px] font-bold">Login</h1>

            <div className="flex flex-col gap-2 w-full">
              <span className="text-text-secondary text-[20px] font-normal">
                Email
              </span>
              <input
                type="email"
                className="w-full h-10 rounded-[10px] bg-text-secondary text-background-primary px-3 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-text-secondary text-[20px] font-normal">
                Senha
              </span>
              <div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full h-10 rounded-[10px] bg-text-secondary text-background-primary px-3 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-42 top-98 transform -translate-y-1/2 text-text-secondary cursor-pointer max-md:right-12"
                >
                  {showPassword ? (
                    <EyeOff className="text-background-primary" />
                  ) : (
                    <Eye className="text-background-primary" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 rounded-[10px] bg-button-background-primary text-text-primary font-bold text-[20px] hover:bg-cyan-950 transition-colors cursor-pointer"
            >
              Entrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
