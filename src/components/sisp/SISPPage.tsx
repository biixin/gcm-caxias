import { Scale, Users, Heart, Eye, Zap, Shield, FileText, BookOpen, BarChart2, Lock, Cpu, Search, ChevronRight, Map } from 'lucide-react';
import Footer from '../Footer';
import { MEDIA_URLS } from '../../constants/media';

const principles = [
  {
    numeral: 'Legalidade',
    icon: Scale,
    title: '',
    description: 'Atuação sempre conforme a lei, sem exceções ou desvios de conduta normativa.',
  },
  {
    numeral: 'Impessoalidade',
    icon: Users,
    title: '',
    description: 'Sem favorecimento ou prejuízo a qualquer pessoa, com tratamento equânime em todas as situações.',
  },
  {
    numeral: 'Moralidade',
    icon: Heart,
    title: '',
    description: 'Conduta ética, honesta e correta em todas as ações e procedimentos institucionais.',
  },
  {
    numeral: 'Publicidade',
    icon: Eye,
    title: '',
    description: 'Transparência nas ações, respeitando os limites legais de sigilo e confidencialidade.',
  },
  {
    numeral: 'Eficiência',
    icon: Zap,
    title: '',
    description: 'Uso adequado dos recursos disponíveis, buscando sempre os melhores resultados para a população.',
  },
  {
    numeral: 'Contraditório e Ampla Defesa',
    icon: Shield,
    title: '',
    description: 'Garantia de que todos possam se defender e apresentar sua versão dos fatos em qualquer procedimento.',
  },
  {
    numeral: 'Devido Processo Legal',
    icon: FileText,
    title: '',
    description: 'Respeito às normas e etapas legais em qualquer procedimento administrativo ou investigativo.',
  },
];

const competencies = [
  {
    icon: BookOpen,
    title: 'Assessoramento Estratégico',
    description:
      'Assessora o Secretário Municipal de Segurança Pública na implantação, execução, supervisão e aperfeiçoamento contínuo das atividades de inteligência.',
  },
  {
    icon: BarChart2,
    title: 'Produção de Conhecimento',
    description:
      'Produz conhecimentos de inteligência para subsidiar a tomada de decisões nos níveis operacional, tático e estratégico.',
  },
  {
    icon: Search,
    title: 'Diagnósticos e Prognósticos',
    description:
      'Realiza diagnósticos e prognósticos, acompanhando e compreendendo a evolução de situações relacionadas à segurança pública no município.',
  },
  {
    icon: Lock,
    title: 'Proteção Institucional',
    description:
      'Garante a segurança de dados e conhecimentos sigilosos, conforme a legislação vigente, incluindo segurança orgânica, ativa e de assuntos internos.',
  },
  {
    icon: Cpu,
    title: 'Tecnologia da Informação',
    description:
      'Acompanha as atividades de TIC, assegurando o cumprimento das políticas de segurança da informação e a integridade dos sistemas institucionais.',
  },
  {
    icon: FileText,
    title: 'Documentos de Inteligência',
    description:
      'Produz e difunde documentos de inteligência, garantindo que as informações sejam organizadas e compartilhadas de forma adequada e segura.',
  },
];

const internalActions = [
  'Fiscaliza o cumprimento das normas de inteligência',
  'Adota medidas relacionadas ao recrutamento administrativo',
  'Aplica medidas de segurança institucional: segurança orgânica, ativa e de assuntos internos',
];

export default function SISPPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Shield size={14} className="text-blue-400" />
              <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
                Lei nº 3563 / 2026
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Criação do SISP-DC
            </h1>
            <p className="text-slate-300 leading-relaxed text-lg font-light max-w-2xl">
              Sistema de Inteligência de Segurança Pública de Duque de Caxias — vinculado à Secretaria Municipal de Segurança Pública.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-white">

        {/* SEÇÃO 1 — Criação do SISP-DC */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 01
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Criação do SISP-DC
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Scale size={16} className="text-white" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Instrumento Legal</span>
                  </div>
                  <p className="text-slate-700 font-semibold text-base leading-relaxed">
                    Lei nº 3563, de 25 de fevereiro de 2026
                  </p>
                  <p className="text-slate-500 text-sm mt-1">
                    Institui o Sistema de Inteligência de Segurança Pública de Duque de Caxias.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">Sobre o Sistema</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    O SISP-DC é vinculado à <strong className="text-slate-800">Secretaria Municipal de Segurança Pública</strong> e
                    tem como finalidade apoiar o Poder Executivo na tomada de decisões, por meio do planejamento,
                    coordenação e execução de atividades de inteligência e contrainteligência.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Sua atuação é voltada à produção e proteção de informações estratégicas, com foco na
                    redução de vulnerabilidades, neutralização de ameaças e fortalecimento da segurança
                    da população e do patrimônio público.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    icon: Shield,
                    label: 'Vinculação',
                    value: 'Secretaria Municipal de Segurança Pública',
                    bg: 'bg-slate-50',
                    iconBg: 'bg-slate-200',
                    iconColor: 'text-slate-700',
                  },
                  {
                    icon: BarChart2,
                    label: 'Finalidade',
                    value: 'Apoio ao Poder Executivo na tomada de decisões',
                    bg: 'bg-blue-50',
                    iconBg: 'bg-blue-200',
                    iconColor: 'text-blue-700',
                  },
                  {
                    icon: Lock,
                    label: 'Foco Estratégico',
                    value: 'Redução de vulnerabilidades e neutralização de ameaças',
                    bg: 'bg-slate-50',
                    iconBg: 'bg-slate-200',
                    iconColor: 'text-slate-700',
                  },
                  {
                    icon: Users,
                    label: 'Beneficiários',
                    value: 'Segurança da população e do patrimônio público',
                    bg: 'bg-blue-50',
                    iconBg: 'bg-blue-200',
                    iconColor: 'text-blue-700',
                  },
                ].map(({ icon: Icon, label, value, bg, iconBg, iconColor }) => (
                  <div key={label} className={`${bg} rounded-xl p-4 flex items-start gap-4 border border-slate-100`}>
                    <div className={`${iconBg} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon size={18} className={iconColor} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">{label}</p>
                      <p className="text-sm font-semibold text-slate-700 leading-snug">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2 — Princípios */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-4">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 02
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Princípios do SISP-DC
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-5" />
              <p className="text-slate-500 leading-relaxed max-w-2xl">
                Os princípios orientam a atuação do Sistema de Inteligência de Segurança Pública,
                garantindo que suas atividades sejam realizadas de forma legal, ética e eficiente.
              </p>
            </div>

            {/* Image */}
            <div className="mb-12 flex justify-center">
              <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src={MEDIA_URLS.sisp.principles}
                  alt="Princípios do SISP-DC"
                  className="w-full h-auto object-contain bg-slate-50"
                />
              </div>
            </div>

            {/* Principles grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              {principles.slice(0, 4).map(({ numeral, icon: Icon, title, description }) => (
                <div key={numeral} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className="text-xs font-black text-blue-400 uppercase tracking-widest">{numeral}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm mb-2">{title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1">{description}</p>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {principles.slice(4).map(({ numeral, icon: Icon, title, description }) => (
                <div key={numeral} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className="text-xs font-black text-blue-400 uppercase tracking-widest">{numeral}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm mb-2">{title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 3 — Competências */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 03
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Competências do SISP-DC
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-5" />
              <p className="text-slate-600 leading-relaxed max-w-3xl">
                As competências do SISP-DC definem suas funções no apoio, organização e execução das
                atividades de inteligência no âmbito da segurança pública municipal.
              </p>
            </div>

            <div className="mb-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                <h3 className="text-base font-bold text-slate-700 uppercase tracking-wider">
                  Principais Atribuições
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {competencies.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-blue-100 hover:bg-white hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-11 h-11 bg-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">{title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal actions */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600/30 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield size={18} className="text-blue-300" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Atuação Interna</h3>
                  <p className="text-slate-400 text-xs">Responsabilidades institucionais do sistema</p>
                </div>
              </div>
              <ul className="space-y-3">
                {internalActions.map((action, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4 — Divisões Distritais de Inteligência */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 04
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Divisões Distritais de Inteligência
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-5" />
              <p className="text-slate-600 leading-relaxed max-w-3xl">
                O SISP-DC é dividido em quatro Divisões Distritais de Inteligência (DDINT), responsáveis pela produção de conhecimentos dentro de suas áreas de atuação. Cada divisão atua diretamente no seu distrito, com base nas necessidades locais, seguindo as normas da Assessoria de Inteligência de Segurança Pública Integrada (AISPI).
              </p>
            </div>

            {/* Map Image */}
            <div className="mb-6 flex justify-center">
              <div className="w-full max-w-3xl rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src={MEDIA_URLS.sisp.mapDc}
                  alt="Mapa das Divisões Distritais de Inteligência"
                  className="w-full h-auto object-contain bg-slate-50"
                />
              </div>
            </div>

            {/* Map Disclaimer */}
            <div className="mb-12 flex justify-center">
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 max-w-3xl">
                <p className="text-xs text-amber-700 text-center leading-relaxed">
                  <strong>Aviso:</strong> O mapa foi criado apenas como algo ilustrativo, podendo conter erros de divisões territoriais ou de português.
                </p>
              </div>
            </div>

            {/* DDINT Description */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100 mb-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Map size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Divisões Distritais de Inteligência</h3>
                  <p className="text-slate-500 text-sm">Composição do SISP-DC por distrito</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  { numeral: 'I', label: 'DDINT — 1º Distrito', location: 'Duque de Caxias' },
                  { numeral: 'II', label: 'DDINT — 2º Distrito', location: 'Jardim Primavera' },
                  { numeral: 'III', label: 'DDINT — 3º Distrito', location: 'Santa Cruz da Serra' },
                  { numeral: 'IV', label: 'DDINT — 4º Distrito', location: 'Xerém' },
                ].map(({ numeral, label, location }) => (
                  <li key={numeral} className="flex items-center gap-4 bg-white rounded-xl px-5 py-3.5 border border-blue-100 shadow-sm">
                    <span className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                      {numeral}
                    </span>
                    <span className="text-slate-800 text-sm font-semibold md:whitespace-nowrap">
                      <span className="hidden md:inline">{label}</span>
                      <span className="md:hidden">{numeral}º Distrito</span>
                    </span>
                    <span className="ml-auto text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-2 py-1 flex-shrink-0 truncate max-w-[120px] md:max-w-none md:px-3">
                      {location}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 text-sm leading-relaxed border-t border-blue-100 pt-5">
                As Divisões Distritais de Inteligência têm como principais atribuições mapear desordens e problemas nos bairros, identificar áreas de risco e locais sensíveis, atender às demandas da Assessoria de Inteligência de Segurança Pública Integrada (AISPI) e produzir informações objetivas e atualizadas, contribuindo diretamente para a tomada de decisões.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
