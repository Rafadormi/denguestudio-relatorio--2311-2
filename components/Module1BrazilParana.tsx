
import React from 'react';
import A4Page from './ui/A4Page';
import { CONTEXTO_MACRO } from '../data';
import { MacroComparisonChart } from './charts/Charts';

const ReportHeader = () => (
  <header className="border-b-2 border-gray-800 pb-4 mb-8 flex justify-between items-start">
    <div className="flex items-center">
      <img src="https://i.postimg.cc/tYfYXzSv/brasao-municipio.png" alt="Logo" className="w-[60px] mr-4" />
      <div>
        <h1 className="font-serif text-lg font-bold text-principal">Prefeitura Municipal de Perobal</h1>
        <p className="text-sm text-cinza-escuro">Secretaria Municipal de Saúde | Vigilância em Saúde</p>
      </div>
    </div>
  </header>
);

const Module1BrazilParana: React.FC = () => {
  return (
    <A4Page>
      <ReportHeader />
      
      <div className="bg-slate-50 border-l-4 border-principal p-6 mb-8 rounded shadow-sm">
        <h2 className="text-2xl font-bold text-principal mb-2">MÓDULO 1: SITUAÇÃO EPIDEMIOLÓGICA BRASIL E PARANÁ</h2>
        <p className="text-lg text-cinza-escuro">Contextualização do cenário macroepidemiológico (2020-2025)</p>
      </div>

      <section className="mb-8">
        <h3 className="font-serif text-lg font-bold text-secundaria mt-4 mb-2">6.1. Cenário Nacional (Brasil)</h3>
        <div className="bg-[#e8f4f8] border-l-4 border-principal p-4 my-4 rounded-r shadow-sm">
          <div className="text-sm text-gray-800 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: CONTEXTO_MACRO.brasil }} />
        </div>
      </section>

      <section className="mb-8">
        <h3 className="font-serif text-lg font-bold text-secundaria mt-4 mb-2">6.2. Cenário Estadual (Paraná)</h3>
        <div className="bg-[#e8f4f8] border-l-4 border-principal p-4 my-4 rounded-r shadow-sm">
          <div className="text-sm text-gray-800 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: CONTEXTO_MACRO.parana }} />
        </div>
      </section>

      <section className="mb-8">
        <h3 className="font-serif text-lg font-bold text-secundaria mt-4 mb-2">6.3. Análise Comparativa de Incidência</h3>
        <p className="text-sm text-cinza-escuro mb-4 text-justify">
          O gráfico abaixo demonstra que a incidência de dengue em Perobal superou sistematicamente as médias estaduais e nacionais nos anos epidêmicos (2020 e 2024), indicando uma vulnerabilidade local exacerbada.
        </p>
        <MacroComparisonChart data={CONTEXTO_MACRO.comparativoData} />
        <p className="text-xs text-cinza-escuro text-center mt-2">Gráfico 1.1: Comparativo de Incidência (Casos/100.000 hab) - Brasil, Paraná e Perobal (2020-2024)</p>
      </section>

      <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg mt-8">
        <h4 className="font-bold text-orange-800 mb-2 text-sm">Ponto de Atenção:</h4>
        <p className="text-xs text-orange-900 leading-relaxed">
            A alta incidência local em comparação aos cenários macro sugere a existência de determinantes locais específicos (densidade vetorial, comportamentos de risco, falhas na coleta de resíduos) que amplificam a transmissão viral, exigindo estratégias municipais intensificadas para além das diretrizes estaduais genéricas.
        </p>
      </div>

    </A4Page>
  );
};

export default Module1BrazilParana;
