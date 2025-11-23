
import React from 'react';
import { Printer } from 'lucide-react';
import ReportCover from './components/ReportCover';
import YearReport from './components/YearReport';
import ConsolidatedConclusions from './components/ConsolidatedConclusions';
import Planning2026 from './components/Planning2026';
import Module1BrazilParana from './components/Module1BrazilParana';
import { TableOfContents, ExecutiveSummary, Glossary, Objectives, History, Legislation, References } from './components/ReportSections';
import { DADOS } from './data';

const App: React.FC = () => {
  const years = Object.keys(DADOS);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Controls - Hidden on Print */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 print:hidden">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-end items-center gap-4">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-principal hover:bg-sky-800 text-white px-4 py-2 rounded shadow transition-colors"
          >
            <Printer size={18} />
            Imprimir Relatório Completo
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 print:pt-0">
        <div className="print:break-after-page">
          <ReportCover year="2020" /> {/* Using 2020 metadata as base for main cover, can be adjusted */}
        </div>
        
        <div className="mt-8 print:mt-0 print:break-before-page">
          <TableOfContents />
        </div>

        <div className="mt-8 print:mt-0 print:break-before-page">
          <ExecutiveSummary />
        </div>

        {/* New Glossary Module */}
        <div className="mt-8 print:mt-0 print:break-before-page">
          <Glossary />
        </div>

        <div className="mt-8 print:mt-0 print:break-before-page">
          <Objectives />
        </div>

        <div className="mt-8 print:mt-0 print:break-before-page">
          <History />
        </div>

        {/* Module 1: Brazil/Parana Context */}
        <div className="mt-8 print:mt-0 print:break-before-page">
          <Module1BrazilParana />
        </div>
        
        {/* Module 2: Year Reports */}
        {years.map((year) => (
          <div key={year} className="mt-8 print:mt-0 print:break-before-page">
             <YearReport year={year} data={DADOS[year]} />
          </div>
        ))}

        {/* Module 5 */}
        <div className="mt-8 print:mt-0 print:break-before-page">
          <ConsolidatedConclusions />
        </div>

        {/* Module 6 */}
        <div className="mt-8 print:mt-0 print:break-before-page">
          <Planning2026 />
        </div>

        {/* Module 7 */}
        <div className="mt-8 print:mt-0 print:break-before-page">
          <Legislation />
        </div>

        {/* References */}
        <div className="mt-8 print:mt-0 print:break-before-page">
          <References />
        </div>
      </div>

      {/* Floating Print Button (Mobile/Quick Access) - Hidden on Print */}
      <button 
        onClick={handlePrint}
        className="fixed bottom-6 right-6 w-14 h-14 bg-principal text-white rounded-full shadow-lg flex items-center justify-center hover:bg-sky-800 transition-transform hover:scale-105 print:hidden z-40"
        title="Imprimir"
      >
        <Printer size={24} />
      </button>
    </div>
  );
};

export default App;
