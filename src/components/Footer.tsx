import { Shield, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-700/30 flex items-center justify-center">
              <Shield size={18} className="text-blue-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Guarda Municipal de Duque de Caxias</p>
              <p className="text-slate-500 text-xs">Setor de Inteligência e Análise de Dados</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="flex items-center gap-1.5 justify-center md:justify-end text-xs text-slate-500 mb-1">
              <Lock size={11} />
              <span>Documento de Estudo — Uso Educacional</span>
            </div>
            <p className="text-xs text-slate-600">
              Relatório de Análise de Dados · Exercício 2026
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600">
          <p>
            Os dados apresentados neste relatório possuem caráter analítico e são baseados em fontes públicas, com finalidade exclusivamente educacional e institucional
          </p>
          <p className="flex-shrink-0">Duque de Caxias — RJ · 2024</p>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>Site desenvolvido por <span className="text-slate-400 font-medium">Matheus Almeida</span> · Pesquisa e elaboração de conteúdo: <span className="text-slate-400 font-medium">Eduardo Miguel</span></p>
        </div>
      </div>
    </footer>
  );
}
