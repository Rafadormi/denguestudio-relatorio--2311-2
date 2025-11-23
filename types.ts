export interface Indicadores {
  notificacoes: number;
  confirmados: number;
  descartados: number;
  inconclusivos: number;
  graves: number;
  obitos: number;
  taxaAtaque: number;
  taxaConfirmacao: number;
  proporcaoGraves: number;
  taxaLetalidade: number;
  populacao: number;
}

export interface CasosPorSemana {
  semanas: number[];
  notificados: number[];
  confirmados: number[];
}

export interface CasosPorMes {
  meses: string[];
  casos: number[];
}

export interface PiramideEtaria {
  faixas: string[];
  feminino: number[];
  masculino: number[];
}

export interface Liraa {
  ciclos: string[];
  iip: number[];
  classificacao: string[];
}

export interface ImpactoEconomico {
  total: number;
  categorias: string[];
  valores: number[];
  percentuais: number[];
}

export interface InfoDengue {
  semanas: number[];
  casosReais: number[];
  alertas: (number | null)[];
}

export interface DadosAno {
  indicadores: Indicadores;
  casosPorSemana: CasosPorSemana;
  casosPorMes: CasosPorMes;
  piramideEtaria: PiramideEtaria;
  liraa: Liraa;
  impactoEconomico: ImpactoEconomico;
  infoDengue: InfoDengue;
}

export interface DadosCollection {
  [key: string]: DadosAno;
}

export interface YearMeta {
  title: string;
  subtitle: string;
}