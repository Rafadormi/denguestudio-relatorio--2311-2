import React from 'react';
import A4Page from './ui/A4Page';
import { METADATA } from '../data';

interface ReportCoverProps {
  year: string;
}

const ReportCover: React.FC<ReportCoverProps> = ({ year }) => {
  const meta = METADATA[year] || { title: `DENGUE EM PEROBAL/PR - ${year}`, subtitle: "" };
  const date = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <A4Page isCover>
      <div className="flex flex-col h-full justify-between items-center text-center p-12 bg-gradient-to-br from-slate-50 to-white h-[29.7cm]">
        <div className="mt-12 mb-8">
          <img src="https://i.postimg.cc/tYfYXzSv/brasao-municipio.png" alt="Brasão" className="w-[120px] mx-auto" />
        </div>

        <div className="my-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-principal uppercase mb-4 leading-tight">
            RELATÓRIO<br/>EPIDEMIOLÓGICO
          </h1>
          <h2 className="font-serif text-2xl text-cinza-escuro font-normal mb-8">
            {meta.title}
          </h2>
        </div>

        <p className="font-serif text-lg text-cinza-escuro leading-relaxed max-w-2xl mx-auto mb-auto">
          Análise Descritiva, Impacto Socioeconômico e <br />
          Recomendações Estratégicas para o Fortalecimento <br />
          da Vigilância em Saúde
        </p>

        <div className="w-full pb-8">
          <p className="text-xl font-bold text-principal mb-2">Secretaria Municipal de Saúde<br />Vigilância em Saúde</p>
          <p className="text-lg text-cinza-escuro">Perobal/PR, {date}</p>
        </div>
      </div>
    </A4Page>
  );
};

export default ReportCover;