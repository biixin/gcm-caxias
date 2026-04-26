import { Globe, Search, TrendingUp, AlertCircle, Zap, Target, CheckCircle, ArrowRight, Database, BookOpen } from 'lucide-react';
import Footer from '../Footer';
import { MEDIA_URLS } from '../../constants/media';

const characteristics = [
  'Utiliza fontes abertas e legalmente acessíveis',
  'Possui baixo custo de obtenção de dados',
  'Permite grande volume de coleta de informações',
  'Depende de análise qualificada para gerar valor',
];

const limitations = [
  'Alto consumo de tempo na pesquisa',
  'Necessidade de atualização constante',
  'Exige domínio de ferramentas e técnicas de coleta',
  'Grande volume de dados pode gerar ruído informacional',
];

const mainSources = [
  {
    category: 'Internet',
    icon: Globe,
    items: ['Sites de busca', 'Redes sociais', 'Blogs, fóruns e wikis', 'Deep Web'],
  },
  {
    category: 'Mídia',
    icon: BookOpen,
    items: ['Jornais', 'Televisão', 'Revistas', 'Rádio'],
  },
  {
    category: 'Fontes Governamentais',
    icon: Database,
    items: ['Portais públicos', 'Bases de dados oficiais', 'Transparência pública'],
  },
  {
    category: 'Produção Acadêmica e Eventos',
    icon: Target,
    items: ['Artigos científicos', 'Conferências', 'Bibliotecas', 'Trabalhos técnicos'],
  },
];

const applications = [
  { icon: Search, title: 'Segurança Pública', desc: 'Combate a ameaças e crimes' },
  { icon: AlertCircle, title: 'Investigação e Análise', desc: 'Análise de risco e ameaças' },
  { icon: TrendingUp, title: 'Inteligência Corporativa', desc: 'Marketing e análise de mercado' },
  { icon: CheckCircle, title: 'Proteção de Propriedade', desc: 'Proteção de propriedade intelectual' },
];

const osintProcess = [
  {
    step: '01',
    title: 'Reconhecimento',
    desc: 'Definição do problema e entendimento do cenário',
  },
  {
    step: '02',
    title: 'Identificação de Fontes',
    desc: 'Seleção dos canais mais relevantes',
  },
  {
    step: '03',
    title: 'Coleta de Dados',
    desc: 'Obtenção das informações disponíveis',
  },
  {
    step: '04',
    title: 'Processamento',
    desc: 'Organização e tratamento dos dados coletados',
  },
  {
    step: '05',
    title: 'Análise',
    desc: 'Interpretação e correlação das informações',
  },
  {
    step: '06',
    title: 'Produção de Inteligência',
    desc: 'Geração de conhecimento útil para apoio à decisão',
  },
];

export default function OSINTPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Globe size={14} className="text-blue-400" />
              <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
                Ramo da Inteligência
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              OSINT — Inteligência de Fontes Abertas
            </h1>
            <p className="text-slate-300 leading-relaxed text-lg font-light max-w-2xl">
              O processo de obter, selecionar, tratar e analisar informações provenientes de fontes públicas, com o objetivo de produzir conhecimento útil para a tomada de decisão.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-white">

        {/* SEÇÃO 1 — Definição e Essência */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 01
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Definição e Essência do OSINT
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed text-base">
                  OSINT (Open Source Intelligence), ou <strong className="text-slate-800">Inteligência de Fontes Abertas</strong>, é o processo de obter, selecionar, tratar e analisar informações provenientes de fontes públicas, com o objetivo de produzir conhecimento útil para a tomada de decisão.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Esse modelo de inteligência se baseia em <strong className="text-slate-800">dados acessíveis a qualquer pessoa</strong> — ainda que, em alguns casos, o acesso possa exigir pagamento — e se destaca pelo <strong className="text-slate-800">baixo custo operacional</strong>, especialmente quando comparado a operações de campo.
                </p>

                <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-4">
                    Vantagens Principais
                  </p>
                  <div className="space-y-3">
                    {characteristics.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-blue-600/40 border border-blue-500/50 rounded-xl flex items-center justify-center">
                      <Globe size={18} className="text-blue-200" />
                    </div>
                    <h3 className="font-bold text-lg">Princípio Central</h3>
                  </div>
                  <p className="text-base font-light leading-relaxed italic text-blue-100">
                    "Usar o que é público para produzir conhecimento estratégico."
                  </p>
                  <p className="text-sm text-blue-200 mt-4 leading-relaxed">
                    O OSINT transforma dados abertos em inteligência de valor, oferecendo uma alternativa eficiente e econômica para coleta e análise informacional.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                    Características Distintivas
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: 'Legalidade', value: 'Fontes públicas e legais' },
                      { label: 'Custo', value: 'Baixo a mínimo' },
                      { label: 'Volume', value: 'Grande escala de coleta' },
                      { label: 'Análise', value: 'Requer expertise' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3 pb-3 border-b border-slate-200 last:border-0 last:pb-0">
                        <span className="text-xs font-bold text-slate-500 min-w-fit">{item.label}</span>
                        <span className="text-sm text-slate-700">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2 — Limitações */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 02
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Limitações e Desafios
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                Apesar das vantagens, o OSINT apresenta desafios que devem ser considerados na sua aplicação.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {limitations.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 mb-2">Atenção:</p>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    O sucesso do OSINT depende diretamente da qualidade da análise e da experiência de quem interpreta os dados. Um grande volume de informações sem análise qualificada pode levar a conclusões equivocadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3 — Principais Fontes */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-green-600 mb-3">
                Seção 03
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Principais Fontes de OSINT
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                A coleta de dados pode ser realizada em diversas fontes públicas e acessíveis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {mainSources.map((source, idx) => {
                const Icon = source.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center">
                        <Icon size={22} className="text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg">{source.category}</h3>
                    </div>
                    <div className="space-y-3">
                      {source.items.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-1.5" />
                          <span className="text-sm text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEÇÃO 4 — Aplicações */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-green-600 mb-3">
                Seção 04
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Aplicações do OSINT
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                O uso do OSINT é amplo e pode apoiar diferentes áreas e contextos organizacionais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {applications.map(({ icon: Icon, title, desc }, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-base mb-1">{title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 5 — Fluxogramas */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 05
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Fluxogramas de Investigação OSINT
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                Processo passo a passo que orienta a análise de cada etapa da investigação, utilizando a metodologia OSINT para transformar informações de fontes abertas em conhecimento útil e aplicável.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/fluxoosint.png?alt=media&token=9a2a225e-4e58-4bdc-a6b7-a16ddea155fe"
                alt="Fluxograma de Investigação OSINT"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* SEÇÃO 6 — Processo de Aplicação */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 06
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Processo de Aplicação do OSINT
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                A produção de inteligência por meio de fontes abertas segue um fluxo estruturado e metodológico.
              </p>
            </div>

            <div className="space-y-4">
              {osintProcess.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 p-6">
                    <div className="w-16 flex-shrink-0 flex items-center justify-center">
                      <span className="inline-flex items-center justify-center w-14 h-14 bg-blue-700 text-white font-black text-lg rounded-xl">
                        {item.step}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                    {idx < osintProcess.length - 1 && (
                      <ArrowRight size={20} className="text-slate-400 hidden md:block flex-shrink-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600/40 border border-blue-500/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target size={18} className="text-blue-200" />
                </div>
                <h3 className="font-bold text-white text-base">Ciclo Contínuo</h3>
              </div>
              <p className="text-sm text-blue-100 leading-relaxed">
                O OSINT não é um processo linear único, mas um ciclo contínuo de refinamento. À medida que novas informações surgem, o processo pode retornar a etapas anteriores para validação e atualização, garantindo a produção de inteligência sempre atual e relevante.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 7 — Síntese Final */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 07
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Síntese Final
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded" />
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-5">
                <p className="text-slate-600 leading-relaxed text-base">
                  O OSINT é um <strong className="text-slate-800">instrumento fundamental para a inteligência moderna</strong>, permitindo que organizações produzam conhecimento de valor a partir de dados disponíveis publicamente.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Seu diferencial reside na <strong className="text-slate-800">combinação de acessibilidade, custo-efetividade e amplitude de fontes</strong>, tornando-o especialmente relevante para contextos onde recursos financeiros são limitados.
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  No entanto, o valor real do OSINT depende da <strong className="text-slate-800">qualidade da análise e da expertise de quem interpreta</strong> os dados coletados.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { label: 'Alcance', value: 'Global' },
                    { label: 'Custo', value: 'Mínimo' },
                    { label: 'Legalidade', value: 'Plena' },
                    { label: 'Escala', value: 'Massiva' },
                  ].map((item) => (
                    <div key={item.label} className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                      <p className="text-[10px] text-slate-500 mb-1 uppercase tracking-widest font-bold">{item.label}</p>
                      <p className="text-base font-black text-blue-700">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600/30 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Search size={18} className="text-blue-300" />
                  </div>
                  <h3 className="font-bold text-white text-base">OSINT em Segurança Pública</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Monitoramento de ameaças públicas e comunicações',
                    'Análise de tendências criminais e comportamentos',
                    'Investigação de personas e redes de interesse',
                    'Prevenção e inteligência operacional',
                    'Apoio à tomada de decisão estratégica',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
