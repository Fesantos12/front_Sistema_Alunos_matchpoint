import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { App } from './App.tsx';
import { Dashboard } from './pages/Dashboard.tsx';
import { Toaster } from '@/components/ui/toast.tsx';
import { Turma } from './pages/Turma.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/turma/:id" element={<Turma />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  </StrictMode>,
);
