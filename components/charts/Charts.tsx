
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, ComposedChart, Area, PieChart, Pie, Cell, ReferenceDot, Label, LabelList
} from 'recharts';
import { DadosAno } from '../../types';

const COLORS = {
  principal: '#1f4e79',
  secundaria: '#f79646',
  sucesso: '#70ad47',
  alerta: '#c55a5a',
  feminino: '#d46e9f',
  masculino: '#69a0d4',
  cinza: '#a0a0a0'
};

interface ChartProps {
  data: DadosAno;
}

export const IndicatorsChart: React.FC<ChartProps> = ({ data }) => {
  const chartData = [
    { name: 'Notificações', value: data.indicadores.notificacoes, fill: COLORS.principal },
    { name: 'Confirmados', value: data.indicadores.confirmados, fill: COLORS.secundaria },
    { name: 'Descartados', value: data.indicadores.descartados, fill: COLORS.sucesso },
    { name: 'Investigação', value: data.indicadores.inconclusivos, fill: COLORS.cinza },
    { name: 'Graves', value: data.indicadores.graves, fill: COLORS.alerta },
    { name: 'Óbitos', value: data.indicadores.obitos, fill: '#000000' },
  ];

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={chartData} margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={100} style={{ fontSize: '10px', fontWeight: 'bold' }} />
          <Tooltip />
          <Bar dataKey="value" barSize={30} label={{ position: 'right', fill: '#000', fontSize: 10 }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const EpidemicCurveChart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.casosPorSemana.semanas.map((s, i) => ({
    semana: `SE ${s}`,
    notificados: data.casosPorSemana.notificados[i],
    confirmados: data.casosPorSemana.confirmados[i],
  }));

  // Calculate peak for annotation
  const maxConfirmados = Math.max(...data.casosPorSemana.confirmados);
  const peakIndex = data.casosPorSemana.confirmados.indexOf(maxConfirmados);
  const peakWeek = `SE ${data.casosPorSemana.semanas[peakIndex]}`;

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="semana" style={{ fontSize: '10px' }} interval={3} />
          <YAxis style={{ fontSize: '10px' }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Area type="monotone" dataKey="notificados" fill={COLORS.principal} stroke={COLORS.principal} fillOpacity={0.1} />
          <Line type="monotone" dataKey="confirmados" stroke={COLORS.alerta} strokeWidth={2} dot={false} />
          {maxConfirmados > 0 && (
            <ReferenceDot x={peakWeek} y={maxConfirmados} r={5} fill={COLORS.alerta} stroke="white" strokeWidth={2}>
              <Label value={`Pico: ${maxConfirmados}`} position="top" fill={COLORS.alerta} fontSize={11} fontWeight="bold" offset={10} />
            </ReferenceDot>
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export const MonthlyChart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.casosPorMes.meses.map((m, i) => ({
    mes: m,
    casos: data.casosPorMes.casos[i]
  }));

  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="mes" style={{ fontSize: '11px' }} />
          <YAxis style={{ fontSize: '10px' }} />
          <Tooltip />
          <Bar dataKey="casos" fill={COLORS.principal} label={{ position: 'top', fill: '#000', fontSize: 10 }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const SexDistributionChart: React.FC<ChartProps> = ({ data }) => {
  const fem = data.piramideEtaria.feminino.reduce((a, b) => a + b, 0);
  const masc = data.piramideEtaria.masculino.reduce((a, b) => a + b, 0);
  
  const chartData = [
    { name: 'Feminino', value: fem },
    { name: 'Masculino', value: masc },
  ];

  const PIE_COLORS = [COLORS.feminino, COLORS.masculino];

  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const PyramidChart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.piramideEtaria.faixas.map((faixa, i) => ({
    faixa,
    male: -data.piramideEtaria.masculino[i], // Negative for left side
    female: data.piramideEtaria.feminino[i],
    maleAbs: data.piramideEtaria.masculino[i] // For tooltip
  }));

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={chartData} stackOffset="sign" margin={{left: 20, right: 20}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tickFormatter={(val) => Math.abs(val).toString()} />
          <YAxis dataKey="faixa" type="category" width={70} style={{ fontSize: '10px' }} />
          <Tooltip formatter={(value: number) => Math.abs(value)} />
          <Legend verticalAlign="top"/>
          <Bar dataKey="male" name="Masculino" fill={COLORS.masculino} stackId="a" />
          <Bar dataKey="female" name="Feminino" fill={COLORS.feminino} stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const LiraaChart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.liraa.ciclos.map((c, i) => ({
    ciclo: c,
    iip: data.liraa.iip[i]
  }));

  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="ciclo" style={{ fontSize: '10px' }} />
          <YAxis domain={[0, 'auto']} style={{ fontSize: '10px' }} />
          <Tooltip />
          <Line type="monotone" dataKey="iip" stroke={COLORS.principal} strokeWidth={2} label={{ position: 'top', fontSize: 10, formatter: (v:any) => `${v}%` }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export const InfoDengueChart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.infoDengue.semanas.map((s, i) => ({
    semana: `SE ${s}`,
    reais: data.infoDengue.casosReais[i],
    alerta: data.infoDengue.alertas[i] || 0
  }));

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="semana" style={{ fontSize: '10px' }} interval={4} />
          <YAxis style={{ fontSize: '10px' }} />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Bar dataKey="reais" name="Casos Reais" fill={COLORS.principal} label={{ position: 'top', fill: '#000', fontSize: 10 }} />
          <Line type="monotone" dataKey="alerta" name="Projeção InfoDengue" stroke={COLORS.alerta} strokeWidth={3} dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export const CostDistributionChart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.impactoEconomico.categorias.map((cat, i) => ({
    name: cat,
    value: data.impactoEconomico.valores[i],
    percent: data.impactoEconomico.percentuais[i]
  }));
  const PIE_COLORS = [COLORS.principal, COLORS.secundaria, COLORS.alerta];

  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label={({percent}) => `${(percent * 100).toFixed(1)}%`}
          >
             {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `R$ ${value.toLocaleString('pt-BR')}`} />
          <Legend style={{ fontSize: '10px' }}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
