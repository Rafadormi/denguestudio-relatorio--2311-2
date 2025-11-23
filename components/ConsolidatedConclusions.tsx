import React from 'react';
import A4Page from './ui/A4Page';
import { CONSOLIDATED_ANALYSIS } from '../data';

const ConsolidatedConclusions: React.FC = () => {
  const { title, sections } = CONSOLIDATED_ANALYSIS;

  return (
    <A4Page>
      {/* Report Header duplicated to avoid refactoring YearReport significantly */}
      <header className="border-b-2 border-gray-800 pb-4 mb-8 flex justify-between items-start">
        <div className="flex items-center">
          <img src="https://i.postimg.cc/tYfYXzSv/brasao-municipio.png" alt="Logo" className="w-[60px] mr-4" />
          <div>
            <h1 className="font-serif text-lg font-bold text-principal">Prefeitura Municipal de Perobal</h1>
            <p className="text-sm text-cinza-escuro">Secretaria Municipal de Saúde | Vigilância em Saúde</p>
          </div>
        </div>
      </header>

      <div className="bg-slate-50 border-l-4 border-principal p-6 mb-8 rounded shadow-sm">
        <h2 className="text-2xl font-bold text-principal mb-2">{title}</h2>
        <p className="text-lg text-cinza-escuro">Análise Integrada do Período 2020-2025</p>
      </div>

      {/* 9.1 Analysis */}
      <section className="mb-8">
        <h3 className="font-serif text-lg font-bold text-secundaria mt-4 mb-2">9.1. Análise Consolidada 2020-2025</h3>
        <div className="bg-[#e8f4f8] border-l-4 border-principal p-4 my-4 rounded-r shadow-sm">
          <div className="text-sm text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: sections.analiseConsolidada }} />
        </div>
      </section>

      {/* 9.2 Conclusions */}
      <section className="mb-8">
        <h3 className="font-serif text-lg font-bold text-secundaria mt-4 mb-4">9.2. Conclusões Principais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.conclusoes.map((conclusao, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-principal mb-2 text-sm">{idx + 1}. {conclusao.titulo}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{conclusao.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9.3 Factors */}
      <section className="mb-8">
        <h3 className="font-serif text-lg font-bold text-secundaria mt-4 mb-2">9.3. Fatores Determinantes</h3>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-principal text-white">
              <tr>
                <th className="p-3 text-left w-1/3">Fator</th>
                <th className="p-3 text-left">Descrição e Impacto Local</th>
              </tr>
            </thead>
            <tbody>
              {sections.fatores.map((fator, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-3 font-bold text-gray-700 border-b border-gray-100">{fator.fator}</td>
                  <td className="p-3 text-gray-600 border-b border-gray-100">{fator.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 9.4 Lessons Learned */}
      <section className="mb-4">
        <h3 className="font-serif text-lg font-bold text-secundaria mt-4 mb-2">9.4. Lições Aprendidas</h3>
        <div className="bg-green-50 border-l-4 border-sucesso p-4 my-4 rounded-r shadow-sm">
          <strong className="text-green-800 block mb-1">Síntese Estratégica:</strong>
          <div className="text-sm text-gray-800 leading-relaxed italic" dangerouslySetInnerHTML={{ __html: sections.licoes }} />
        </div>
      </section>

    </A4Page>
  );
};

export default ConsolidatedConclusions;
