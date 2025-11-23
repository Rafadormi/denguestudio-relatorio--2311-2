import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, ComposedChart, Area, PieChart, Pie, Cell, ReferenceDot, Label, LabelList
} from 'recharts';
import { DadosAno } from '../../types';

const COLORS = {
  principal: '#1f4e79', secundaria: '#f79646', sucesso: '#70ad47',
  alerta: '#c55a5a', feminino: '#d46e9f', masculino: '#69a0d4', cinza: '#a0a0a0'
};
const labelStyle = { fill: '#000', fontSize: 10, fontWeight: 'bold' };
const legendStyle = { fontSize: '11px', color: '#333', paddingTop: '5px' };

interface ChartProps { data: DadosAno; }

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
        <BarChart layout="vertical" data={chartData} margin={{ top: 5, right: 40, left: 40, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" width={100} style={{ fontSize: '10px', fontWeight: 'bold' }} />
          <Tooltip />
          <Legend wrapperStyle={legendStyle} />
          <Bar dataKey="value" name="Quantidade" barSize={30} radius={[0, 4, 4, 0]}>
             <LabelList dataKey="value" position="right" style={labelStyle} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const EpidemicCurveChart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.casosPorSemana.semanas.map((s, i) => ({
    semana: `SE ${s}`, notificados: data.casosPorSemana.notificados[i], confirmados: data.casosPorSemana.confirmados[i],
  }));
  const maxConfirmados = Math.max(...data.casosPorSemana.confirmados);
  const peakIndex = data.casosPorSemana.confirmados.indexOf(maxConfirmados);
  const peakWeek = `SE ${data.casosPorSemana.semanas[peakIndex]}`;

  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={chartData} margin={{ top: 25, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="semana" style={{ fontSize: '9px' }} interval={3} angle={-45} textAnchor="end" height={50} />
          <YAxis style={{ fontSize: '10px' }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} wrapperStyle={legendStyle}/>
          <Area type="monotone" dataKey="notificados" name="Notificações" fill={COLORS.principal} stroke={COLORS.principal} fillOpacity={0.1} />
          <Line type="monotone" dataKey="confirmados" name="Casos Confirmados" stroke={COLORS.alerta} strokeWidth={2} dot={false} />
          {maxConfirmados > 0 && (
            <ReferenceDot x={peakWeek} y={maxConfirmados} r={5} fill={COLORS.alerta} stroke="white" strokeWidth={2}>
              <Label value={`Pico: ${maxConfirmados}`} position="top" fill={COLORS.alerta} fontSize={11} fontWeight="bold" offset={10} className="bg-white"/>
            </ReferenceDot>
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export const MonthlyChart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.casosPorMes.meses.map((m, i) => ({ mes: m, casos: data.casosPorMes.casos[i] }));
  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="mes" style={{ fontSize: '11px' }} />
          <YAxis style={{ fontSize: '10px' }} />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={legendStyle} />
          <Bar dataKey="casos" name="Casos por Mês" fill={COLORS.principal}>
            <LabelList dataKey="casos" position="top" style={labelStyle} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const SexDistributionChart: React.FC<ChartProps> = ({ data }) => {
  const fem = data.piramideEtaria.feminino.reduce((a, b) => a + b, 0);
  const masc = data.piramideEtaria.masculino.reduce((a, b) => a + b, 0);
  const chartData = [{ name: 'Feminino', value: fem }, { name: 'Masculino', value: masc }];
  const PIE_COLORS = [COLORS.feminino, COLORS.masculino];
  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={chartData} cx="50%" cy="50%" innerRadius={40} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value" label={({name, value, percent}) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`} style={{ fontSize: '10px', fontWeight: 'bold' }}>
            {chartData.map((entry, index) => (<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" wrapperStyle={legendStyle} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const PyramidChart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.piramideEtaria.faixas.map((faixa, i) => ({
    faixa, male: -data.piramideEtaria.masculino[i], female: data.piramideEtaria.feminino[i],
    maleAbs: data.piramideEtaria.masculino[i], femaleAbs: data.piramideEtaria.feminino[i]
  }));
  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={chartData} stackOffset="sign" margin={{left: 10, right: 10, top: 20}}>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" tickFormatter={(val) => Math.abs(val).toString()} hide />
          <YAxis dataKey="faixa" type="category" width={70} style={{ fontSize: '9px', fontWeight: 'bold' }} interval={0} />
          <Tooltip formatter={(value: number) => Math.abs(value)} />
          <Legend verticalAlign="top" wrapperStyle={legendStyle}/>
          <Bar dataKey="male" name="Masculino" fill={COLORS.masculino} stackId="a">
            <LabelList dataKey="maleAbs" position="left" style={{...labelStyle, fill: COLORS.masculino}} />
          </Bar>
          <Bar dataKey="female" name="Feminino" fill={COLORS.feminino} stackId="a">
            <LabelList dataKey="femaleAbs" position="right" style={{...labelStyle, fill: COLORS.feminino}} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const LiraaChart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.liraa.ciclos.map((c, i) => ({ ciclo: c, iip: data.liraa.iip[i] }));
  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="ciclo" style={{ fontSize: '10px' }} />
          <YAxis domain={[0, 'auto']} style={{ fontSize: '10px' }} />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={legendStyle} />
          <Line type="monotone" dataKey="iip" name="IIP (%)" stroke={COLORS.principal} strokeWidth={3}>
            <LabelList dataKey="iip" position="top" style={labelStyle} formatter={(v:any) => `${v}%`} />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export const InfoDengueChart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.infoDengue.semanas.map((s, i) => ({ semana: `SE ${s}`, reais: data.infoDengue.casosReais[i], alerta: data.infoDengue.alertas[i] || 0 }));
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="semana" style={{ fontSize: '10px' }} interval={4} />
          <YAxis style={{ fontSize: '10px' }} />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={legendStyle} />
          <Bar dataKey="reais" name="Casos Reais" fill={COLORS.principal}>
            <LabelList dataKey="reais" position="top" style={{...labelStyle, fontSize: 8}} />
          </Bar>
          <Line type="monotone" dataKey="alerta" name="Projeção InfoDengue" stroke={COLORS.alerta} strokeWidth={3} dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export const CostDistributionChart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.impactoEconomico.categorias.map((cat, i) => ({ name: cat, value: data.impactoEconomico.valores[i], percent: data.impactoEconomico.percentuais[i] }));
  const PIE_COLORS = [COLORS.principal, COLORS.secundaria, COLORS.alerta];
  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={chartData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({percent}) => `${(percent * 100).toFixed(1)}%`} style={{ fontSize: '10px', fontWeight: 'bold' }}>
             {chartData.map((entry, index) => (<Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />))}
          </Pie>
          <Tooltip formatter={(value: number) => `R$ ${value.toLocaleString('pt-BR')}`} />
          <Legend wrapperStyle={legendStyle} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

interface MacroComparisonProps {
  data: { ano: string, perobal: number, parana: number, brasil: number }[];
}

export const MacroComparisonChart: React.FC<MacroComparisonProps> = ({ data }) => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="ano" style={{ fontSize: '10px' }} />
          <YAxis style={{ fontSize: '10px' }} label={{ value: 'Incidência / 100k hab.', angle: -90, position: 'insideLeft', fontSize: 10 }} />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={legendStyle} />
          <Bar dataKey="brasil" name="Brasil" fill={COLORS.sucesso}>
             <LabelList dataKey="brasil" position="top" style={{fontSize: 8}} />
          </Bar>
          <Bar dataKey="parana" name="Paraná" fill={COLORS.secundaria}>
             <LabelList dataKey="parana" position="top" style={{fontSize: 8}} />
          </Bar>
          <Bar dataKey="perobal" name="Perobal" fill={COLORS.alerta}>
             <LabelList dataKey="perobal" position="top" style={{fontSize: 8}} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
