import { ShieldCheck, ChevronDown } from 'lucide-react';
import { MEDIA_URLS } from '../../constants/media';

interface HeroBannerProps {
  onNavigate: (page: string) => void;
}

export default function HeroBanner({ onNavigate }: HeroBannerProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-8 pb-20 sm:py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6 sm:mb-8">
          <ShieldCheck size={14} className="text-blue-400" />
          <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
            Guarda Municipal de Duque de Caxias
          </span>
        </div>

        <div className="mb-8 flex justify-center">
          <img
            src={MEDIA_URLS.logos.siteLogo}
            alt="Logo GCM Inteligência"
            className="h-64 w-auto object-contain"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Núcleo de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Inteligência
          </span>{' '}
          Aplicada
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10 font-light">
          Uma plataforma de capacitação e integração em inteligência com foco regional, que promove cooperação interinstitucional e produção de conhecimento aplicado, com acesso controlado e foco em resultados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('explore')}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40 hover:shadow-blue-700/40 hover:-translate-y-0.5"
          >
            Explorar Conteúdos
          </button>
          <button
            onClick={() => {
              document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Conheça a Plataforma
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-slate-500" />
      </div>
    </section>
  );
}
