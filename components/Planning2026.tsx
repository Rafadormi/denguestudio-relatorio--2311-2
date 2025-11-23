import React from 'react';
import A4Page from './ui/A4Page';
import { PLANNING_2026 } from '../data';

const Planning2026: React.FC = () => {
  const { title, cenarios, eixos, cronograma, orcamento } = PLANNING_2026;

  return (
    <A4Page>
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
        <p className="text-lg text-cinza-escuro">Estratégias para o próximo ciclo epidemiológico</p>
      </div>

      {/* 10.1 Scenarios */}
      <section className="mb-8">
        <h3 className="font-serif text-lg font-bold text-secundaria mt-4 mb-4">6.1. Análise de Cenários</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cenarios.map((cenario, idx) => {
            let borderColor = 'border-l-4 border-gray-300';
            let bgTitle = 'bg-gray-100 text-gray-800';
            if (cenario.cor === 'sucesso') { borderColor = 'border-l-4 border-sucesso'; bgTitle = 'bg-green-50 text-green-800'; }
            if (cenario.cor === 'secundaria') { borderColor = 'border-l-4 border-secundaria'; bgTitle = 'bg-orange-50 text-orange-800'; }
            if (cenario.cor === 'alerta') { borderColor = 'border-l-4 border-alerta'; bgTitle = 'bg-red-50 text-red-800'; }

            return (
              <div key={idx} className={`bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden ${borderColor}`}>
                <div className={`p-3 font-bold text-xs uppercase tracking-wider ${bgTitle}`}>
                  {cenario.titulo}
                </div>
                <div className="p-4 text-xs space-y-2">
                  <p><strong>Probabilidade:</strong> {cenario.probabilidade}</p>
                  <p><strong>Características:</strong> {cenario.caracteristicas}</p>
                  <p><strong>Condições:</strong> {cenario.condicoes}</p>
                  <p className="mt-2 pt-2 border-t border-gray-100"><strong>Ações Prioritárias:</strong> {cenario.acoes}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10.2 Axes */}
      <section className="mb-8">
        <h3 className="font-serif text-lg font-bold text-secundaria mt-4 mb-4">6.2. Eixos Estratégicos</h3>
        <div className="space-y-4">
          {eixos.map((eixo, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-principal text-sm mb-1">{eixo.eixo}</h4>
              <p className="text-xs text-gray-600 italic mb-2">{eixo.objetivo}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <strong className="text-secundaria block mb-1">Metas 2026:</strong>
                  <p>{eixo.metas}</p>
                </div>
                <div>
                  <strong className="text-gray-700 block mb-1">Ações Propostas:</strong>
                  <p>{eixo.acoes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10.3 Timeline */}
      <section className="mb-8 break-inside-avoid">
        <h3 className="font-serif text-lg font-bold text-secundaria mt-4 mb-4">6.3. Cronograma Trimestral</h3>
        <div className="relative border-l-2 border-gray-200 ml-3 space-y-6">
          {cronograma.map((item, idx) => (
            <div key={idx} className="mb-6 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-principal rounded-full -left-3 ring-4 ring-white">
                <span className="text-white text-[10px] font-bold">{idx + 1}</span>
              </span>
              <h4 className="flex items-center mb-1 text-sm font-semibold text-gray-900">{item.trimestre}</h4>
              <p className="mb-1 text-xs font-normal text-gray-500"><span className="font-bold text-secundaria">Foco:</span> {item.foco}</p>
              <p className="text-xs font-normal text-gray-500">{item.acoes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10.4 Budget */}
      <section className="mb-4 break-inside-avoid">
        <h3 className="font-serif text-lg font-bold text-secundaria mt-4 mb-4">6.4. Recursos Necessários</h3>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="min-w-full text-xs text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">Item / Área</th>
                <th scope="col" className="px-6 py-3 text-right">Valor Estimado (R$)</th>
              </tr>
            </thead>
            <tbody>
              {orcamento.map((item, idx) => (
                <tr key={idx} className={`bg-white border-b ${idx === orcamento.length - 1 ? 'font-bold bg-gray-50 text-gray-900' : ''}`}>
                  <td className="px-6 py-3">{item.item}</td>
                  <td className="px-6 py-3 text-right">{item.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </A4Page>
  );
};

export default Planning2026;
