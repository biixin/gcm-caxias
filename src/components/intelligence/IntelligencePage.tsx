import { Brain, ChevronRight, Shield, Target, Zap, TrendingUp } from 'lucide-react';
import Introduction from '../Introduction';
import Footer from '../Footer';

const introParagraphs = [
  'A inteligência, no contexto da segurança pública, é a atividade responsável pela produção e difusão de conhecimentos estratégicos sobre fatos, eventos e situações que possam impactar a ordem pública e a atuação dos órgãos de segurança.',
  'Essa atividade envolve a coleta, análise e interpretação de dados e informações, permitindo compreender cenários, identificar padrões de criminalidade e acompanhar a evolução de fenômenos que representem risco ou oportunidade para a atuação estatal.',
  'Os conhecimentos produzidos pela inteligência são utilizados para subsidiar a tomada de decisões nos níveis operacional, tático e estratégico, orientando ações mais eficientes e direcionadas por parte das instituições de segurança pública.',
  'Além disso, a inteligência possibilita a antecipação de ameaças, contribuindo para a prevenção de crimes, a redução de vulnerabilidades e o planejamento de ações integradas entre diferentes órgãos.',
  'No âmbito da segurança pública municipal, a inteligência atua como um instrumento essencial para organizar informações, apoiar a gestão e aumentar a efetividade das ações voltadas à proteção da população e do patrimônio público.',
];

const highlights = [
  { label: 'Nível Operacional', description: 'Suporte direto às ações em campo com informações táticas precisas e atualizadas.' },
  { label: 'Nível Tático', description: 'Planejamento de operações e alocação de recursos com base em dados analíticos.' },
  { label: 'Nível Estratégico', description: 'Visão de longo prazo para políticas institucionais e cooperação interorganizacional.' },
];

const operationalRules = [
  {
    title: 'Adequabilidade',
    description: 'Técnicas e meios compatíveis com o objetivo',
  },
  {
    title: 'Imprescindibilidade',
    description: 'Uso apenas do que for realmente necessário',
  },
  {
    title: 'Proporcionalidade',
    description: 'Aplicação no limite estritamente necessário',
  },
];

const intelligenceClassifications = [
  {
    title: 'Inteligência de Base',
    desc: 'Destinada à compreensão ampla e contextual dos temas acompanhados. Envolve levantamento de dados históricos, atores, relações e variáveis relevantes, constituindo um referencial sólido que sustenta análises futuras.',
    icon: Brain,
  },
  {
    title: 'Inteligência Estratégica',
    desc: 'Voltada à análise de fenômenos com potencial de impactar interesses fundamentais do Estado. Busca identificar tendências, cenários, riscos e oportunidades.',
    icon: Target,
  },
  {
    title: 'Inteligência Tática',
    desc: 'Direcionada ao assessoramento da implementação de políticas e ações governamentais. Foca em situações concretas, analisando atores e capacidades envolvidas.',
    icon: Zap,
  },
  {
    title: 'Inteligência Operacional',
    desc: 'Focada no apoio direto à execução de ações no terreno. Produz conhecimento de curto prazo, baseado em fatos e eventos em curso.',
    icon: TrendingUp,
  },
];

export default function IntelligencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Brain size={14} className="text-blue-400" />
              <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
                Fundamentos
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Inteligência
            </h1>
            <p className="text-slate-300 leading-relaxed text-lg font-light max-w-2xl">
              Conceitos, fundamentos e aplicação prática da inteligência no contexto da segurança pública.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-white">
        {/* Conceptual intro section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Conceito
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                O que é Inteligência?
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded" />
            </div>

            <div className="space-y-8">
              {/* Main text */}
              <div className="space-y-5">
                {introParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm w-full md:w-2/3">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/niveis.png?alt=media&token=f91ca727-9a34-4e54-8289-b9da48824ac8"
                  alt="Níveis de Inteligência"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Highlights */}
              <div className="bg-slate-50 rounded-2xl border border-slate-100 shadow-sm p-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
                  Níveis de Aplicação
                </h3>
                <ul className="space-y-4">
                  {highlights.map(({ label, description }) => (
                    <li key={label} className="flex items-start gap-3">
                      <ChevronRight size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-slate-900 mb-0.5">{label}</p>
                        <p className="text-xs text-slate-600 leading-relaxed">{description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote Card */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 text-white">
                <Brain size={28} className="text-blue-300 mb-4" />
                <p className="text-base font-light text-blue-100 leading-relaxed italic">
                  "A inteligência transforma dados brutos em conhecimento acionável, permitindo que as instituições de segurança pública atuem de forma preventiva e estratégica."
                </p>
              </div>
              
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-slate-100" />

        {/* Introduction component (Ciclo de Inteligência etc.) */}
        <Introduction />

        {/* SEÇÃO 2 — Definição Aprofundada */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 02
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Definição e Dimensão Analítica
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
            </div>

            <div className="space-y-8">
              {/* Definição Conceitual */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Definição Conceitual</h3>
                <p className="text-slate-600 leading-relaxed">
                  <strong className="text-slate-900">Inteligência é o mesmo que segredo ou informação secreta.</strong> No contexto governamental, refere-se à produção de conhecimento sobre questões que afetam a segurança nacional, estadual e municipal. Ela compreende o conjunto de atividades destinadas a identificar, analisar e comunicar informações críticas para a tomada de decisão em assuntos de segurança.
                </p>
              </div>

              {/* Diferencial Analítico */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Diferencial Analítico</h3>
                <p className="text-slate-600 leading-relaxed">
                  A diferença entre análises de inteligência e outras análises governamentais está nos seus fins: <strong className="text-slate-900">aumentar o grau de conhecimento sobre adversários e problemas de segurança</strong>, produzindo "situational awareness" — compreensão profunda do cenário operacional.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Enquanto análises técnicas podem ser descritivas, as análises de inteligência são estratégicas e orientadas para proteger interesses estatais, municipais e nacionais contra ameaças identificadas e potenciais.
                </p>
              </div>

              {/* Características Essenciais */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Características Essenciais da Inteligência</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-600 bg-blue-50 p-4 rounded-r-lg">
                    <p className="font-bold text-slate-900 text-sm mb-1">Foco em Relações Adversariais</p>
                    <p className="text-sm text-slate-700">Serviços de inteligência buscam compreender relacionamentos conflitivos e adversariais para antecipar ameaças e oportunidades.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 bg-blue-50 p-4 rounded-r-lg">
                    <p className="font-bold text-slate-900 text-sm mb-1">Estudo do "Outro"</p>
                    <p className="text-sm text-slate-700">Procura elucidar situações nas quais as informações mais relevantes são potencialmente manipuladas ou escondidas por adversários.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 bg-blue-50 p-4 rounded-r-lg">
                    <p className="font-bold text-slate-900 text-sm mb-1">Contra a Desinformação</p>
                    <p className="text-sm text-slate-700">Há esforço organizado por parte de um adversário para desinformar, tornar turvo o entendimento e negar conhecimento.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 bg-blue-50 p-4 rounded-r-lg">
                    <p className="font-bold text-slate-900 text-sm mb-1">Seletividade Temática</p>
                    <p className="text-sm text-slate-700">Quanto mais públicas as fontes de informação e menos conflitivos os temas, menos as análises de inteligência têm a contribuir para o processo decisório.</p>
                  </div>
                </div>
              </div>

              {/* Citação Shulsky */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 mt-8">
                <blockquote className="border-l-4 border-blue-600 pl-6">
                  <p className="text-lg italic text-slate-700 font-light mb-4">
                    "A inteligência se preocupa com o componente da luta entre as nações que lida com a informação. A inteligência busca aprender tudo o que puder sobre o mundo. Mas a inteligência jamais pode esquecer que a obtenção da verdade envolve uma luta contra um inimigo humano que também luta, e que a verdade não é o objetivo final, mas apenas um meio para alcançar a vitória."
                  </p>
                  <p className="text-sm text-slate-600 font-semibold">— Shulsky</p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-slate-100" />

        {/* SEÇÃO 3 — Controle e Ética */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 03
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Controle e Conduta Ética
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                A atividade de inteligência deve estar sujeita a controle rigoroso com máxima transparência possível.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
                    Controle e Legitimidade
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm mb-4">
                    A atividade de inteligência deve estar sujeita a <strong className="text-slate-900">controle interno e externo</strong>, com o máximo de transparência possível.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    A <strong className="text-slate-900">conduta ética</strong> garante a legitimidade e o desempenho adequado das operações, garantindo conformidade com as normas legais e valores institucionais.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-4">
                    Regras Operacionais
                  </h4>
                  <div className="space-y-3">
                    {operationalRules.map((rule) => (
                      <div key={rule.title} className="pb-3 border-b border-blue-200 last:border-0 last:pb-0">
                        <p className="text-xs font-bold text-blue-700 mb-1">{rule.title}</p>
                        <p className="text-xs text-slate-700">{rule.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-50 rounded-2xl border border-slate-100 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Brain size={20} className="text-blue-700" />
                    </div>
                    <h4 className="font-bold text-slate-900">Análise</h4>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                    Responsabilidade Primária
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    Responsável por produzir conhecimento de inteligência. Reúne dados, informações e conhecimentos, realiza o processamento e interpretação dos insumos e elabora relatórios para subsidiar a tomada de decisão.
                  </p>
                  <p className="text-xs text-slate-600 font-semibold">
                    Quando necessário, demanda ao elemento operacional a obtenção de informações indisponíveis.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl border border-slate-100 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield size={20} className="text-blue-700" />
                    </div>
                    <h4 className="font-bold text-slate-900">Operações</h4>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                    Responsabilidade Executiva
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    Responsável por executar ações especializadas e sigilosas. Atua na obtenção de dados não acessíveis por meios convencionais, neutralização de ameaças e criação de condições favoráveis aos interesses do Estado.
                  </p>
                  <p className="text-xs text-slate-600 font-semibold">
                    Vinculada aos objetivos definidos pela análise.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={20} className="text-blue-200" />
                <h3 className="font-bold text-white">Integração Análise-Operações</h3>
              </div>
              <p className="text-sm text-blue-100 leading-relaxed">
                A atividade de inteligência integra análise e operações, podendo atuar em inteligência e contrainteligência, com o objetivo de apoiar decisões estratégicas e proteger interesses nacionais.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-slate-100" />

        {/* SEÇÃO 4 — Classificação */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                Seção 04
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Classificação da Inteligência por Propósito
              </h2>
              <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                A produção de conhecimento de inteligência pode ser organizada conforme seu propósito, permitindo maior especialização analítica e melhor adequação às necessidades do decisor.
              </p>
            </div>

            {/* Image */}
            <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/ChatGPT%20Image%2010%20de%20mai.%20de%202026%2C%2018_17_16.png?alt=media&token=33479fe9-ec11-49f7-90af-4178de172057"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/ChatGPT%20Image%2010%20de%20mai.%20de%202026%2C%2018_16_32.png?alt=media&token=b8b4d25a-87db-4f84-9fb0-118f5474864b"
                  alt="Classificação da Inteligência"
                  className="w-full h-auto object-contain"
                />
              </picture>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {intelligenceClassifications.map(({ title, desc, icon: Icon }, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-bold text-white text-base">{title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-slate-700 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
