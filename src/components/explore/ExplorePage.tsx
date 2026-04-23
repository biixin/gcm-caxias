import { ArrowRight, Home, BarChart2, Shield, Brain, Database, ShieldOff, MapPin, Zap } from 'lucide-react';
import Footer from '../Footer';

interface ExplorePageProps {
  onNavigate: (page: string) => void;
}

const pages = [
  {
    id: 'home',
    icon: Home,
    title: 'Página Inicial',
    description:
      'Apresentação institucional da plataforma, integração entre órgãos de segurança pública e metodologia de capacitação aplicada à Baixada Fluminense.',
    tag: 'Institucional',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
    accentColor: 'border-t-blue-500',
  },
  {
    id: 'intelligence',
    icon: Brain,
    title: 'Inteligência',
    description:
      'Fundamentos da inteligência na segurança pública, ciclo de inteligência e sua aplicação prática no contexto da Guarda Municipal de Duque de Caxias.',
    tag: 'Fundamentos',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
    accentColor: 'border-t-blue-600',
  },
  {
    id: 'counterintelligence',
    icon: ShieldOff,
    title: 'Contrainteligência',
    description:
      'O ramo da inteligência voltado à proteção do Estado contra ameaças externas e internas. Conceitos, lógica operacional e aplicação prática na Baixada Fluminense.',
    tag: 'Proteção',
    tagColor: 'bg-slate-100 text-slate-700 border-slate-200',
    accentColor: 'border-t-slate-600',
  },
  {
    id: 'analytics',
    icon: BarChart2,
    title: 'Análise de Dados',
    description:
      'Relatório completo de inteligência com gráficos interativos, painel de dados, análise interpretativa e recomendações estratégicas para a Guarda Municipal de Duque de Caxias.',
    tag: 'Relatório',
    tagColor: 'bg-slate-100 text-slate-700 border-slate-200',
    accentColor: 'border-t-slate-500',
  },
  {
    id: 'sisp',
    icon: Shield,
    title: 'Criação do SISP-DC',
    description:
      'Lei nº 3563/2026 que institui o Sistema de Inteligência de Segurança Pública de Duque de Caxias. Conheça os princípios, competências e atribuições do sistema vinculado à Secretaria Municipal de Segurança Pública.',
    tag: 'Legislação',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
    accentColor: 'border-t-blue-700',
  },
  {
    id: 'test',
    icon: Database,
    title: 'Dados Estatísticos',
    description:
      'Registros consolidados de ocorrências anuais em Duque de Caxias (2023–2025), extraídos do portal ISP Dados do Instituto de Segurança Pública do Rio de Janeiro.',
    tag: 'Base de Dados',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
    accentColor: 'border-t-blue-400',
  },
  {
    id: 'psyop',
    icon: Zap,
    title: 'PSYOP',
    description:
      'Operações psicológicas, estratégias de comunicação institucional e aplicações no contexto da segurança pública da Baixada Fluminense.',
    tag: 'Estratégia',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
    accentColor: 'border-t-amber-600',
  },
  {
    id: 'risp',
    icon: MapPin,
    title: 'Divisão Territorial (RISP)',
    description:
      'Estrutura territorial da segurança pública do RJ, organização em CISP, AISP e RISP, e análise detalhada da divisão em Duque de Caxias.',
    tag: 'Territorialidade',
    tagColor: 'bg-red-50 text-red-700 border-red-200',
    accentColor: 'border-t-red-600',
  },
];

export default function ExplorePage({ onNavigate }: ExplorePageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
              Conteúdos da Plataforma
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Explorar Conteúdos
            </h1>
            <p className="text-slate-300 leading-relaxed text-lg font-light">
              Navegue pelas seções disponíveis na plataforma. Novos módulos serão adicionados progressivamente.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-slate-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-lg font-bold text-slate-700 uppercase tracking-wider mb-1">
              Páginas disponíveis
            </h2>
            <div className="w-10 h-0.5 bg-blue-600 rounded" />
          </div>

          <ul className="space-y-5">
            {pages.map(({ id, icon: Icon, title, description, tag, tagColor, accentColor }) => (
              <li key={id}>
                <button
                  onClick={() => onNavigate(id)}
                  className={`w-full text-left bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border-t-4 ${accentColor} group`}
                >
                  <div className="p-6 flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-100 group-hover:bg-blue-50 rounded-xl flex items-center justify-center transition-colors duration-200">
                      <Icon size={22} className="text-slate-600 group-hover:text-blue-700 transition-colors duration-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <h3 className="font-bold text-slate-900 text-base leading-snug">{title}</h3>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${tagColor}`}>
                          {tag}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
                    </div>
                    <div className="flex-shrink-0 self-center ml-2">
                      <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-200">
                        <ArrowRight size={16} className="text-slate-400 group-hover:text-white transition-colors duration-200" />
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-14 bg-blue-950 rounded-2xl p-8 text-white text-center">
            <p className="text-blue-300 text-sm font-medium uppercase tracking-widest mb-2">Em breve</p>
            <h3 className="text-xl font-bold mb-3">Novos módulos em desenvolvimento</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
              A plataforma está em crescimento contínuo. Novos módulos de capacitação, análise territorial e produção de inteligência serão incorporados progressivamente.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
