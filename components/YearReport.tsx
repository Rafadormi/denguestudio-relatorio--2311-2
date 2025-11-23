import React from 'react';
import A4Page from './ui/A4Page';
import { DadosAno } from '../types';
import { METADATA, ANALYSIS_TEXT } from '../data';
import { 
  IndicatorsChart, EpidemicCurveChart, MonthlyChart, 
  SexDistributionChart, PyramidChart, LiraaChart, 
  InfoDengueChart, CostDistributionChart 
} from './charts/Charts';

interface YearReportProps {
  year: string;
  data: DadosAno;
}

const ReportHeader = () => {
  return (
    <header className="border-b-2 border-gray-800 pb-4 mb-8 flex justify-between items-start">
      <div className="flex items-center">
        <img src="https://i.postimg.cc/tYfYXzSv/brasao-municipio.png" alt="Logo" className="w-[60px] mr-4" />
        <div>
          <h1 className="font-serif text-lg font-bold text-principal">Prefeitura Municipal de Perobal</h1>
          <p className="text-sm text-cinza-escuro">Secretaria Municipal de Saúde | Vigilância em Saúde</p>
        </div>
      </div>
      <div className="text-right text-sm text-cinza-escuro pt-2">
        {/* Date removed as per instruction */}
      </div>
    </header>
  );
};

const Section: React.FC<{ children: React.ReactNode, title: string, id: string }> = ({ children, title, id }) => (
  <section className="mb-8 pb-4 border-b border-dashed border-gray-300 last:border-0" id={id}>
    <h2 className="font-serif text-xl font-bold text-principal border-b border-secundaria pb-1 mt-6 mb-4">{title}</h2>
    {children}
  </section>
);

const AnalysisBox: React.FC<{ text: string }> = ({ text }) => (
  <div className="bg-[#e8f4f8] border-l-4 border-principal p-4 my-4 rounded-r shadow-sm">
    <strong className="text-gray-900 block mb-1">Análise da Equipe:</strong>
    <div className="text-sm text-gray-800 leading-relaxed italic" dangerouslySetInnerHTML={{ __html: text }} />
  </div>
);

const Caption: React.FC<{ text: string }> = ({ text }) => (
  <p className="text-xs text-cinza-escuro text-center mt-1 mb-4">{text}</p>
);

const YearReport: React.FC<YearReportProps> = ({ year, data }) => {
  const meta = METADATA[year];
  const texts = ANALYSIS_TEXT[year];

  return (
    <A4Page>
      <ReportHeader />
      
      <div className="bg-slate-50 border-l-4 border-principal p-6 mb-8 rounded shadow-sm">
        <h2 className="text-2xl font-bold text-principal mb-2">{meta.title}</h2>
        <p className="text-lg text-cinza-escuro">{meta.subtitle}</p>
      </div>

      <Section title="MÓDULO 2: Análise Epidemiológica Descritiva" id={`mod2-${year}`}>
        <h3 className="font-serif text-lg font-bold text-secundaria mt-4 mb-2">Seção 2.1: Caracterização da Situação Epidemiológica</h3>
        
        <h4 className="font-serif text-base font-bold text-cinza-escuro mt-3">2.1.1. Análise de Magnitude e Risco Populacional</h4>
        <AnalysisBox text={texts.magnitude} />
        <IndicatorsChart data={data} />
        <Caption text={`Gráfico 2.1: Indicadores Epidemiológicos Consolidados - Perobal, ${year}`} />

        <h4 className="font-serif text-base font-bold text-cinza-escuro mt-3">2.1.2. Análise da Dinâmica Temporal</h4>
        <AnalysisBox text={texts.temporal} />
        <EpidemicCurveChart data={data} />
        <Caption text={`Gráfico 2.2: Casos Notificados e Confirmados por Semana Epidemiológica - ${year}`} />
        
        <MonthlyChart data={data} />
        <Caption text={`Gráfico 2.3: Casos Confirmados por Mês - ${year}`} />

        <h3 className="font-serif text-lg font-bold text-secundaria mt-6 mb-2">Seção 2.2: Perfil Demográfico e Clínico</h3>
        <AnalysisBox text={texts.demografica} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <SexDistributionChart data={data} />
            <Caption text={`Gráfico 2.4: Distribuição dos Casos por Sexo - ${year}`} />
          </div>
          <div>
            <PyramidChart data={data} />
            <Caption text={`Gráfico 2.5: Pirâmide Etária - ${year}`} />
          </div>
        </div>
      </Section>

      <div className="break-before-page" /> {/* Force print break usually between major modules */}
      
      <Section title="MÓDULO 3: Análise Integrada e Inteligência Estratégica" id={`mod3-${year}`}>
        <h3 className="font-serif text-lg font-bold text-secundaria mt-4 mb-2">Seção 3.1: Vigilância Entomológica (LIRAa)</h3>
        <AnalysisBox text={texts.entomologica} />
        <LiraaChart data={data} />
        <Caption text={`Gráfico 3.1: Resultados do LIRAa - Perobal, ${year}`} />

        <h3 className="font-serif text-lg font-bold text-secundaria mt-6 mb-2">Seção 3.2: Fatores Preditivos e Alertas (InfoDengue)</h3>
        <AnalysisBox text={texts.infodengue} />
        <InfoDengueChart data={data} />
        <Caption text={`Gráfico 3.2: Alertas do Sistema InfoDengue vs Casos Reais - ${year}`} />

        <h3 className="font-serif text-lg font-bold text-secundaria mt-6 mb-2">Seção 3.3: Impacto Socioeconômico</h3>
        <AnalysisBox text={texts.economica} />

        <div className="bg-gradient-to-br from-principal to-[#2c6cb0] text-white p-6 rounded-lg text-center my-6 shadow-md print:bg-principal print:text-white">
            <h3 className="text-xl font-bold mb-2">Impacto Econômico Total</h3>
            <div className="text-3xl font-extrabold mb-2">
              R$ {data.impactoEconomico.total.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </div>
            <p className="text-sm opacity-90">Custo estimado para o município de Perobal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div>
             <CostDistributionChart data={data} />
             <Caption text="Gráfico 3.3: Distribuição dos Custos" />
           </div>
        </div>
      </Section>
    </A4Page>
  );
};

export default YearReport;