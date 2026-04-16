import { ShieldCheck, Eye, Zap, BarChart2, ChevronRight } from 'lucide-react';

const recommendations = [
  {
    priority: 'Alta',
    priorityColor: 'bg-red-100 text-red-700 border-red-200',
    icon: ShieldCheck,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    title: 'Reforço em Áreas Críticas',
    actions: [
      'Aumentar a frequência de rondas no Centro e Parque Duque, especialmente nos intervalos 10h–13h e 17h–21h',
      'Redistribuir frações de serviço para cobrir os horários de maior incidência nas zonas de risco elevado',
      'Criar postos de observação fixos ou semifixos em locais com histórico recorrente de ocorrências',
      'Estabelecer protocolos de resposta rápida para as regiões de Jardim Primavera com acionamento priorizado',
    ],
  },
  {
    priority: 'Média',
    priorityColor: 'bg-amber-100 text-amber-700 border-amber-200',
    icon: Zap,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    title: 'Ações Preventivas',
    actions: [
      'Implementar operações de visibilidade em locais comerciais de alta frequência antes dos horários de pico',
      'Promover ações de educação e prevenção em comunidades com índices de vulnerabilidade elevados',
      'Firmar parcerias com o comércio local para sistemas compartilhados de vigilância eletrônica',
      'Desenvolver programas de aproximação comunitária para ampliar a rede de informação voluntária',
    ],
  },
  {
    priority: 'Estratégica',
    priorityColor: 'bg-blue-100 text-blue-700 border-blue-200',
    icon: Eye,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-700',
    title: 'Monitoramento Estratégico',
    actions: [
      'Implantar sistema de georeferenciamento de ocorrências para atualização contínua dos mapas de risco',
      'Criar rotina mensal de análise de dados com elaboração de boletins de inteligência para a chefia',
      'Desenvolver indicadores de desempenho (KPIs) para monitorar a efetividade das ações preventivas',
      'Integrar os dados da Guarda Municipal com as bases de dados das Delegacias e CISP da região',
    ],
  },
  {
    priority: 'Contínua',
    priorityColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    icon: BarChart2,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    title: 'Inteligência Preditiva',
    actions: [
      'Estruturar banco de dados histórico para alimentar modelos de análise preditiva da criminalidade local',
      'Capacitar agentes de inteligência em técnicas de análise criminal e uso de ferramentas de geoprocessamento',
      'Elaborar calendário de operações especiais baseado em sazonalidades identificadas nos dados históricos',
      'Produzir relatórios trimestrais de acompanhamento para fundamentar decisões de gestão de recursos',
    ],
  },
];

export default function Recommendations() {
  return (
    <section id="section-4" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            Seção 05
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Projeções e Recomendações
          </h2>
          <div className="w-14 h-1 bg-blue-600 rounded mb-6" />
          <p className="text-slate-600 leading-relaxed max-w-3xl">
            Com base nos padrões identificados e na análise interpretativa dos dados, as
            recomendações a seguir visam orientar a atuação da Guarda Municipal de forma
            estratégica, preventiva e baseada em evidências.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {recommendations.map(({ priority, priorityColor, icon: Icon, iconBg, iconColor, title, actions }) => (
            <div key={title} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="p-6 border-b border-slate-50">
                <div className="flex items-center gap-3 mb-1">
                  <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={17} className={iconColor} />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base">{title}</h3>
                  <span className={`ml-auto flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full border ${priorityColor}`}>
                    {priority}
                  </span>
                </div>
              </div>
              <ul className="p-5 space-y-2.5">
                {actions.map((action, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <ChevronRight size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-relaxed">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to action / closing */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 md:p-10 text-white">
          <div className="max-w-3xl">
            <h3 className="text-xl font-bold mb-3">
              A Inteligência como Ferramenta de Transformação
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              A adoção sistemática da análise de dados na Guarda Municipal de Duque de Caxias
              representa uma evolução institucional significativa. A capacidade de agir antes do
              problema acontecer — e não apenas após a ocorrência — é o diferencial que define
              uma corporação de segurança pública verdadeiramente moderna.
            </p>
            <p className="text-blue-300 leading-relaxed text-sm">
              Este relatório deve ser atualizado trimestralmente com novos dados operacionais,
              garantindo que as recomendações permaneçam alinhadas com a realidade criminal em
              constante evolução do município.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
