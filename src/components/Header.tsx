import { MEDIA_URLS } from '../constants/media';

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={MEDIA_URLS.logos.intelligenceLogo}
              alt="Logo Inteligência"
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Title block */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              Relatório de Análise de Dados para Apoio à Inteligência
            </h1>
            <p className="text-blue-200 text-lg font-light leading-relaxed max-w-2xl">
              Aplicação prática no contexto da Guarda Municipal de Duque de Caxias
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
