import React from 'react';
import A4Page from './ui/A4Page';
import { EXTRA_SECTIONS, GLOSSARY_DATA } from '../data';

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

export const TableOfContents: React.FC = () => (
  <A4Page>
    <h1 className="font-serif text-4xl font-bold text-principal border-b-4 border-principal pb-2 mb-8">SUMÁRIO</h1>
    <div className="space-y-2 text-sm font-medium text-gray-700">
        <div className="flex justify-between border-b border-gray-200 py-1"><span>1. RESUMO EXECUTIVO</span><span>3</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1"><span>2. ÍNDICE DE FIGURAS E TABELAS</span><span>4</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1"><span>3. GLOSSÁRIO</span><span>5</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1"><span>4. OBJETIVOS</span><span>6</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1"><span>5. CONTEXTUALIZAÇÃO HISTÓRICA</span><span>7</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1 pl-4"><span>5.1. História do Aedes aegypti</span><span>7</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1 pl-4"><span>5.2. História da Dengue no Brasil</span><span>8</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1 pl-4"><span>5.3. História de Perobal</span><span>9</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1"><span>6. MÓDULO 1: SITUAÇÃO BRASIL/PARANÁ</span><span>10</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1"><span>7. MÓDULO 2: ANÁLISE EPIDEMIOLÓGICA (2020-2025)</span><span>12</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1 pl-4"><span>7.1. 2020 - Ano Epidêmico Histórico</span><span>12</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1 pl-4"><span>7.2. 2021 - Ano de Baixa Transmissão</span><span>13</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1 pl-4"><span>7.3. 2022 - Surto Epidêmico Moderado</span><span>14</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1 pl-4"><span>7.4. 2023 - Transmissão com Padrão Atípico</span><span>15</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1 pl-4"><span>7.5. 2024 - Novo Patamar Epidêmico</span><span>16</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1 pl-4"><span>7.6. 2025 - Dados Preliminares</span><span>17</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1"><span>8. MÓDULO 5: CONCLUSÕES E ACHADOS</span><span>18</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1"><span>9. MÓDULO 6: PLANEJAMENTO 2026</span><span>19</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1"><span>10. MÓDULO 7: PROPOSTA DE LEGISLAÇÃO</span><span>20</span></div>
        <div className="flex justify-between border-b border-gray-200 py-1"><span>11. REFERÊNCIAS BIBLIOGRÁFICAS</span><span>21</span></div>
    </div>
  </A4Page>
);

export const ExecutiveSummary: React.FC = () => {
  const { title, period, municipio, populacao, findings, economicImpact, recommendations } = EXTRA_SECTIONS.executiveSummary;
  return (
    <A4Page>
      <ReportHeader />
      <h1 className="font-serif text-2xl font-bold text-principal border-b-4 border-principal pb-2 mb-6">{title}</h1>
      
      <div className="bg-slate-50 border-l-4 border-principal p-4 mb-6 rounded shadow-sm text-sm">
        <p><strong>Período Analisado:</strong> {period}</p>
        <p><strong>Município:</strong> {municipio}</p>
        <p><strong>População Alvo:</strong> {populacao}</p>
      </div>

      <h3 className="font-serif text-lg font-bold text-secundaria mt-6 mb-2">Principais Achados</h3>
      <ul className="list-disc pl-5 text-sm space-y-2 mb-6">
        {findings.map((f, idx) => (
          <li key={idx}><strong className="text-principal">{f.year}:</strong> {f.text}</li>
        ))}
      </ul>

      <h3 className="font-serif text-lg font-bold text-secundaria mt-6 mb-2">Impacto Econômico Acumulado</h3>
      <p className="text-sm mb-6">Total estimado: <strong className="text-alerta">{economicImpact}</strong> em custos diretos e indiretos</p>

      <h3 className="font-serif text-lg font-bold text-secundaria mt-6 mb-2">Recomendações Estratégicas</h3>
      <ul className="list-disc pl-5 text-sm space-y-2">
        {recommendations.map((r, idx) => <li key={idx}>{r}</li>)}
      </ul>
    </A4Page>
  );
};

export const Glossary: React.FC = () => (
  <A4Page>
    <ReportHeader />
    <h1 className="font-serif text-2xl font-bold text-principal border-b-4 border-principal pb-2 mb-6">3. GLOSSÁRIO</h1>
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <thead className="bg-principal text-white">
          <tr>
            <th className="p-3 text-left w-1/3 font-bold">Termo Técnico</th>
            <th className="p-3 text-left font-bold">Definição</th>
          </tr>
        </thead>
        <tbody>
          {GLOSSARY_DATA.map((item, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="p-3 font-bold text-principal border-b border-gray-100 align-top">{item.term}</td>
              <td className="p-3 text-gray-700 border-b border-gray-100 align-top leading-relaxed">{item.definition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </A4Page>
);

export const Objectives: React.FC = () => {
  const { general, specific } = EXTRA_SECTIONS.objectives;
  return (
    <A4Page>
      <ReportHeader />
      <h1 className="font-serif text-2xl font-bold text-principal border-b-4 border-principal pb-2 mb-6">4. OBJETIVOS</h1>
      
      <h2 className="font-serif text-xl font-bold text-principal border-b border-secundaria pb-1 mt-6 mb-4">OBJETIVO GERAL</h2>
      <p className="text-sm text-justify mb-6 leading-relaxed">{general}</p>

      <h2 className="font-serif text-xl font-bold text-principal border-b border-secundaria pb-1 mt-6 mb-4">OBJETIVOS ESPECÍFICOS</h2>
      <ul className="space-y-3 text-sm">
        {specific.map((obj, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-secundaria mr-2 font-bold">•</span>
            <span className="text-justify">{obj}</span>
          </li>
        ))}
      </ul>
    </A4Page>
  );
};

export const History: React.FC = () => {
  const { aedes, dengueBrazil, perobal } = EXTRA_SECTIONS.history;
  return (
    <A4Page>
      <ReportHeader />
      <h1 className="font-serif text-2xl font-bold text-principal border-b-4 border-principal pb-2 mb-6">5. CONTEXTUALIZAÇÃO HISTÓRICA</h1>

      <h2 className="font-serif text-xl font-bold text-principal border-b border-secundaria pb-1 mt-6 mb-4">5.1. História do Aedes aegypti</h2>
      <div className="ml-4 border-l-2 border-principal pl-6 space-y-6 mb-8">
        {aedes.map((item, idx) => (
          <div key={idx} className="relative">
            <span className="absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-secundaria border-2 border-white"></span>
            <h4 className="font-bold text-sm text-gray-800 mb-1">{item.year}</h4>
            <p className="text-xs text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <h2 className="font-serif text-xl font-bold text-principal border-b border-secundaria pb-1 mt-6 mb-4">5.2. História da Dengue no Brasil</h2>
      <div className="ml-4 border-l-2 border-principal pl-6 space-y-6 mb-8">
        {dengueBrazil.map((item, idx) => (
          <div key={idx} className="relative">
            <span className="absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-secundaria border-2 border-white"></span>
            <h4 className="font-bold text-sm text-gray-800 mb-1">{item.year}: {item.title}</h4>
            <p className="text-xs text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <h2 className="font-serif text-xl font-bold text-principal border-b border-secundaria pb-1 mt-6 mb-4">5.3. História de Perobal</h2>
      <table className="w-full text-sm border border-gray-200 mb-4">
        <tbody>
          {Object.entries(perobal).map(([key, value], idx) => (
            <tr key={key} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="p-2 font-bold text-principal capitalize border-b border-gray-200 w-1/4">{key}</td>
              <td className="p-2 text-gray-700 border-b border-gray-200">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </A4Page>
  );
};

export const Legislation: React.FC = () => {
  const { title, articles } = EXTRA_SECTIONS.legislation;
  return (
    <A4Page>
      <ReportHeader />
      <h1 className="font-serif text-2xl font-bold text-principal border-b-4 border-principal pb-2 mb-6">{title}</h1>
      <div className="space-y-6">
        {articles.map((art, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded p-4 shadow-sm">
            <h4 className="font-bold text-principal border-b border-gray-200 pb-2 mb-2 text-sm">{art.title}</h4>
            <p className="text-sm text-justify text-gray-700 leading-relaxed">{art.text}</p>
          </div>
        ))}
      </div>
    </A4Page>
  );
};

export const References: React.FC = () => {
  const refs = EXTRA_SECTIONS.references;
  return (
    <A4Page>
      <ReportHeader />
      <h1 className="font-serif text-2xl font-bold text-principal border-b-4 border-principal pb-2 mb-6">11. REFERÊNCIAS BIBLIOGRÁFICAS</h1>
      <div className="space-y-4 text-sm text-justify">
        {refs.map((ref, idx) => (
          <p key={idx} className="pl-8 -indent-8 leading-relaxed text-gray-800">{ref}</p>
        ))}
      </div>
    </A4Page>
  );
};