
import { DadosCollection, YearMeta } from './types';

export const METADATA: Record<string, YearMeta> = {
  "2020": { title: "2020 - ANO EPIDÊMICO HISTÓRICO", subtitle: "Maior epidemia já registrada no município" },
  "2021": { title: "2021 - ANO DE BAIXA TRANSMISSÃO", subtitle: "Cenário de endemicidade basal" },
  "2022": { title: "2022 - SURTO EPIDÊMICO MODERADO", subtitle: "Transmissão intensa com controle efetivo" },
  "2023": { title: "2023 - TRANSMISSÃO MODERADA COM PADRÃO ATÍPICO", subtitle: "Quebra da sazonalidade tradicional" },
  "2024": { title: "2024 - NOVO PATAMAR EPIDÊMICO HISTÓRICO", subtitle: "Maior crise sanitária da história recente" },
  "2025": { title: "2025 - TRANSMISSÃO MODERADA (DADOS PARCIAIS)", subtitle: "Análise preliminar até a Semana Epidemiológica 30" }
};

export const GLOSSARY_DATA = [
  { term: "Aedes aegypti", definition: "Espécie de mosquito da família Culicidae, principal vetor de transmissão da dengue, zika, chikungunya e febre amarela urbana. Caracteriza-se por ser domiciliado e antropofílico." },
  { term: "Arbovirose", definition: "Doenças causadas pelos chamados arbovírus (arthropod-borne viruses), que incluem o vírus da dengue, zika, chikungunya e febre amarela." },
  { term: "Ação de Bloqueio Químico", definition: "Aplicação de inseticida (nebulização) em uma área delimitada onde foram notificados casos suspeitos ou confirmados de arboviroses, visando eliminar mosquitos adultos infectados." },
  { term: "Criadouro", definition: "Qualquer recipiente natural ou artificial capaz de acumular água e permitir o desenvolvimento das fases imaturas (ovos, larvas e pupas) do mosquito." },
  { term: "Dengue", definition: "Doença febril aguda, sistêmica e dinâmica, variando desde formas assintomáticas a quadros graves, causada por um vírus do gênero Flavivirus." },
  { term: "Endemicidade", definition: "Presença constante ou prevalência habitual de uma doença ou agente infeccioso em uma população ou área geográfica determinada." },
  { term: "Foco do Mosquito", definition: "Local onde são encontradas formas imaturas (larvas/pupas) do mosquito Aedes aegypti durante inspeções." },
  { term: "IIP (Índice de Infestação Predial)", definition: "Indicador que mede a porcentagem de imóveis com presença de larvas de Aedes aegypti em relação ao total de imóveis pesquisados. IIP < 1% (Satisfatório), 1% a 3,9% (Alerta), ≥ 4% (Risco)." },
  { term: "Infestação", definition: "Presença e desenvolvimento de artrópodes (neste caso, vetores) na superfície do corpo de hospedeiros ou no ambiente (imóveis)." },
  { term: "Inspeção Domiciliar", definition: "Atividade realizada por agentes de endemias que consiste na visita a imóveis para identificar, tratar ou eliminar depósitos com água que possam servir de criadouro." },
  { term: "LIRAa (Levantamento Rápido de Índices)", definition: "Metodologia de amostragem para avaliação rápida dos índices de infestação por Aedes aegypti, permitindo direcionar as ações de controle." },
  { term: "Notificação Compulsória", definition: "Comunicação obrigatória às autoridades de saúde sobre a ocorrência de suspeita ou confirmação de doença, agravo ou evento de saúde pública." },
  { term: "Surto Epidêmico", definition: "Ocorrência de casos de uma doença em excesso em relação ao esperado para uma determinada área e período." },
  { term: "Síndrome da Chikungunya", definition: "Doença causada pelo vírus Chikungunya, caracterizada por febre de início súbito e dores intensas nas articulações." },
  { term: "Taxa de Ataque", definition: "Incidência acumulada, usada para grupos específicos e períodos limitados (como surtos), expressando o risco de adoecer naquele grupo." },
  { term: "Taxa de Incidência", definition: "Número de casos novos de uma doença em uma população durante um período específico, geralmente expressa por 100.000 habitantes." },
  { term: "Taxa de Letalidade", definition: "Proporção de óbitos entre os casos confirmados da doença, indicando a gravidade do agravo." },
  { term: "Vigilância Entomológica", definition: "Conjunto de atividades para obter informações sobre os vetores (distribuição, densidade, comportamento) visando o planejamento de controle." },
  { term: "Vigilância Epidemiológica", definition: "Conjunto de ações que proporcionam o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes e condicionantes da saúde individual ou coletiva." },
  { term: "Zika", definition: "Doença causada pelo vírus Zika (ZIKV), transmitida principalmente pelo Aedes aegypti, podendo causar febre leve, exantema e, em gestantes, microcefalia no feto." }
];

// Analysis text mapping with Tailwind classes applied directly to HTML strings
export const ANALYSIS_TEXT: Record<string, Record<string, string>> = {
  "2020": {
    magnitude: `O ano de 2020 representou um ponto de inflexão crítico para a saúde pública de Perobal, configurando a maior epidemia de dengue já registrada no município. Com <span class="font-bold text-principal">1.299 notificações</span> e <span class="font-bold text-principal">977 casos confirmados</span>, alcançou-se uma taxa de incidência estratosférica de <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">13.698,8 casos por 100.000 habitantes</span>, valor que supera em mais de 45 vezes o limiar de alta transmissão estabelecido pelo Ministério da Saúde (300/100.000 hab.). A taxa de confirmação de <span class="font-bold text-principal">75,2%</span> indica elevada precisão diagnóstica e circulação viral intensa. O registro de <span class="font-bold text-principal">1 óbito</span> e <span class="font-bold text-principal">1 caso grave</span> evidencia a letalidade potencial da doença, mesmo com taxa de letalidade de 0,1%. Este cenário demandou mobilização total dos serviços de saúde e estabeleceu um "pior cenário possível" como referência para o planejamento de contingências futuras.`,
    temporal: `A dinâmica temporal da epidemia de 2020 exibiu um padrão clássico de surto explosivo com características epidemiológicas alarmantes. A transmissão iniciou-se de forma silenciosa nas primeiras semanas do ano, com casos esporádicos, mas ganhou força exponencial a partir da <span class="font-bold text-principal">Semana Epidemiológica (SE) 5</span>, quando se observou o início da fase de crescimento acelerado. O pico epidêmico ocorreu na <span class="font-bold text-principal">SE 11</span>, com <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">144 casos confirmados</span> em uma única semana, representando <span class="font-bold text-principal">14,7%</span> de todos os casos anuais concentrados em apenas 7 dias. O período de transmissão sustentada (SE 5 a SE 16) totalizou 12 semanas consecutivas com mais de 20 casos confirmados semanais, evidenciando circulação viral intensa e descontrolada. A rápida declinação após a SE 16 sugere possível exaustão do pool de suscetíveis, efetividade tardia das medidas de bloqueio ou fatores climáticos desfavoráveis ao vetor.`,
    demografica: `A distribuição por sexo revelou predominância significativa no sexo feminino, com <span class="font-bold text-principal">602 casos (61,6%)</span> contra <span class="font-bold text-principal">375 casos masculinos (38,4%)</span>, resultando em uma razão feminino/masculino de 1,6:1. Este padrão é consistente com a literatura epidemiológica de dengue. A análise da distribuição etária dos casos revelou um perfil epidemiológico característico de transmissão generalizada, afetando todas as faixas etárias, porém com concentração significativa na população economicamente ativa. As faixas mais acometidas foram: <span class="font-bold text-principal">30-39 anos (154 casos)</span>, <span class="font-bold text-principal">20-29 anos (158 casos)</span> e <span class="font-bold text-principal">40-49 anos (136 casos)</span>, totalizando <span class="font-bold text-principal">45,8%</span> de todos os casos. Este padrão sugere que adultos jovens e de meia-idade, que mantêm maior mobilidade urbana e exposição ocupacional, foram os mais vulneráveis.`,
    entomologica: `Os resultados do Levantamento Rápido de Índices para Aedes aegypti (LIRAa) de 2020 são reveladores quanto aos fatores entomológicos que precederam e sustentaram a epidemia. O primeiro ciclo, realizado em janeiro, registrou um <span class="font-bold text-principal">IIP de 2,5%</span>, classificado como <span class="font-bold text-principal">médio risco</span> segundo parâmetros do Ministério da Saúde. Este valor, embora não configure alto risco isoladamente, já sinalizava condições favoráveis para transmissão viral caso houvesse introdução de casos importados. A análise dos tipos de criadouros encontrados revelou que <span class="font-bold text-principal">68%</span> dos focos estavam em <strong>depósitos móveis</strong> (pneus abandonados, recipientes plásticos, garrafas), <span class="font-bold text-principal">22%</span> em <strong>depósitos fixos</strong> (caixas d'água destampadas, calhas) e <span class="font-bold text-principal">10%</span> em <strong>criadouros naturais</strong> (bromélias, ocos de árvores).`,
    infodengue: `A comparação entre os alertas do InfoDengue e os casos reais revela uma subestimação inicial da magnitude do surto. A epidemia local atingiu seu pico (144 casos) na SE 11, uma semana antes e com magnitude superior à prevista pelo modelo InfoDengue (119 casos), sugerindo fatores locais que aceleraram a transmissão, como a alta densidade populacional em áreas com infraestrutura inadequada, temperaturas médias elevadas (27,8°C em março) e atraso nas ações de controle vetorial. Esta discrepância destaca a necessidade de complementar os modelos preditivos com dados locais de vigilância entomológica e ambiental.`,
    economica: `A epidemia de 2020 impôs um fardo econômico total de <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">R$ 1.401.004,45</span> ao município, distribuído em três componentes principais. Os <span class="font-bold text-principal">Custos Diretos do SUS</span> totalizaram <span class="font-bold text-principal">R$ 81.254,45 (5,8%)</span>. A <span class="font-bold text-principal">Perda de Produtividade</span> representou o maior impacto, com <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">R$ 928.250,00 (66,3%)</span>. Os <span class="font-bold text-principal">Custos Diretos das Famílias</span> somaram <span class="font-bold text-principal">R$ 391.500,00 (27,9%)</span>. A análise comparativa entre custos públicos e sociais revela um <strong>desequilíbrio estrutural</strong> na distribuição do ônus econômico da dengue. Enquanto o SUS absorveu apenas 5,8% em custos diretos, a sociedade arcou com <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">R$ 1.319.750,00 (94,2%)</span>.`
  },
  "2021": {
    magnitude: `O ano de 2021 caracterizou-se por um cenário de <strong>baixa transmissão autóctone</strong>, com <span class="font-bold text-principal">46 notificações</span> e apenas <span class="font-bold text-principal">10 casos confirmados</span>, resultando em uma taxa de incidência de <span class="font-bold text-principal">140,2 casos por 100.000 habitantes</span>. Esta magnitude representa uma <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">redução de 97,7%</span> em relação ao ano anterior, situando o município em faixa de baixa transmissão segundo classificação do Ministério da Saúde. A <strong>baixa taxa de confirmação</strong> de <span class="font-bold text-principal">21,7%</span> (versus 75,2% em 2020) sugere alta sensibilidade da vigilância, baixa circulação viral ou possível efeito de imunidade de rebanho após epidemia massiva de 2020.`,
    temporal: `A distribuição temporal dos casos em 2021 apresentou padrão <strong>esporádico e não-epidêmico</strong>, com casos isolados distribuídos ao longo do ano sem concentração sazonal definida. Os pequenos aglomerados observados nas <span class="font-bold text-principal">SE 4, 7-8, 10 e 16</span> (com 1-3 casos por semana) sugerem <strong>transmissão focal</strong>, possivelmente associada a microáreas com presença de criadouros não eliminados. A ausência de pico epidêmico e de transmissão sustentada (nenhuma semana com mais de 3 casos) contrasta fortemente com o padrão de 2020. A distribuição irregular ao longo do ano evidencia transmissão residual persistente.`,
    demografica: `A distribuição por sexo em 2021 revelou marcante predominância no sexo feminino, com <span class="font-bold text-principal">8 casos (80%)</span> contra apenas <span class="font-bold text-principal">2 casos masculinos (20%)</span>, resultando em uma razão feminino/masculino de <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">4:1</span>. A distribuição etária dos casos apresentou padrão disperso e não-concentrado, afetando predominantemente adultos jovens e de meia-idade, com destaque para as faixas de <span class="font-bold text-principal">30-39 anos (2 casos)</span> e <span class="font-bold text-principal">40-49 anos (2 casos)</span>.`,
    entomologica: `Os resultados do LIRAa de 2021 revelaram um cenário <strong>paradoxal e preocupante</strong>: manutenção de índices de infestação em níveis de médio risco (1º ciclo: IIP 2,6% em janeiro; 5º ciclo: IIP 1,2% em outubro) mesmo com baixíssima transmissão viral (apenas 10 casos no ano). Esta dissociação entre infestação vetorial e transmissão de doença evidencia o <strong>risco latente</strong> representado pela presença persistente do Aedes aegypti no município.`,
    infodengue: `O sistema InfoDengue subestimou significativamente a transmissão em 2021, prevendo apenas 3 casos versus 10 confirmados. No entanto, demonstrou sensibilidade ao emitir alerta Amarelo (Nível 2) nas semanas 10 e 11, coincidindo com um dos períodos de maior transmissão.`,
    economica: `A baixa magnitude da transmissão em 2021 resultou em um impacto econômico proporcionalmente reduzido, totalizando <span class="font-bold text-principal">R$ 14.266,50</span>. Este valor, embora significativamente inferior aos anos epidêmicos, representa o custo basal da manutenção da vigilância e do controle da dengue no município.`
  },
  "2022": {
    magnitude: `O ano de 2022 representou o <strong>retorno da transmissão epidêmica</strong>, com <span class="font-bold text-principal">1.153 notificações</span> e <span class="font-bold text-principal">297 casos confirmados</span>, resultando em uma taxa de incidência de <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">4.164,3 casos por 100.000 habitantes</span>. Esta magnitude classifica o ano como de alta transmissão, porém com impacto significativamente inferior às epidemias de 2020 e futura de 2024. A baixa taxa de confirmação de <span class="font-bold text-principal">25,8%</span> sugere alta sensibilidade da vigilância ou co-circulação de outros arbovírus.`,
    temporal: `A dinâmica temporal da epidemia de 2022 caracterizou-se por um padrão de <strong>crescimento gradual seguido de pico tardio</strong>. A transmissão iniciou-se de forma consistente a partir da <span class="font-bold text-principal">SE 10 (março)</span>, com crescimento progressivo até atingir o pico nas <span class="font-bold text-principal">SE 17-18 (final de abril/início de maio)</span>, quando foram registrados <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">56 casos confirmados</span> em uma única semana. Este pico mais tardio sugere início mais lento da transmissão ou condições climáticas específicas.`,
    demografica: `A distribuição demográfica em 2022 apresentou equilíbrio entre os sexos (<span class="font-bold text-principal">54% feminino</span> vs <span class="font-bold text-principal">46% masculino</span>) e ampla distribuição etária, com concentração significativa na população economicamente ativa (20-59 anos), indicando transmissão comunitária generalizada.`,
    entomologica: `Os resultados do LIRAa de 2022 revelaram um cenário de risco elevado no início do ano, com IIP de <span class="font-bold text-principal">5,1%</span> em abril configurando alto risco e precedendo o pico de casos humanos, demonstrando a importância do monitoramento entomológico como ferramenta preditiva.`,
    infodengue: `O sistema InfoDengue superestimou significativamente a magnitude da epidemia em 2022, projetando picos de 150 a 221 casos por semana versus 297 casos confirmados no total. Esta discrepância sugere que as ações locais de controle podem ter mitigado o cenário previsto, embora o timing do pico tenha sido corretamente identificado.`,
    economica: `A epidemia de 2022 gerou um impacto econômico total de <span class="font-bold text-principal">R$ 423.715,05</span>, representando um custo intermediário entre os anos de baixa transmissão e os anos epidêmicos, com manutenção do padrão de distribuição onde a sociedade absorve a maior parte dos custos (<span class="font-bold text-principal">94,6%</span>).`
  },
  "2023": {
    magnitude: `O ano de 2023 representou um cenário de transmissão moderada, porém com características epidemiológicas preocupantes, incluindo a quebra da sazonalidade tradicional e a identificação da maior subnotificação da série histórica. Com <span class="font-bold text-principal">160 casos confirmados</span>, a taxa de incidência foi de <span class="font-bold text-principal">2.187,6/100k hab</span>.`,
    temporal: `A epidemia de 2023 caracterizou-se pela quebra da sazonalidade tradicional, com transmissão sustentada durante o inverno e picos tardios que desafiaram as estratégias convencionais de controle.`,
    demografica: `A distribuição demográfica em 2023 manteve a predominância no sexo feminino (<span class="font-bold text-principal">54%</span>) e revelou uma concentração significativa na população economicamente ativa (20-39 anos), com destaque para a faixa de 20-29 anos como a mais afetada.`,
    entomologica: `Os resultados do LIRAa de 2023 revelaram um cenário de risco variável, com pico de alto risco em abril (IIP 3,2%) que coincidiu com o período de maior transmissão viral.`,
    infodengue: `O sistema InfoDengue demonstrou alta sensibilidade em 2023, emitindo alertas Laranja e Vermelho a partir da SE 7, porém a comparação com os dados locais revelou uma subnotificação superior a 60%, a maior da série histórica.`,
    economica: `A epidemia de 2023 gerou um impacto econômico total de <span class="font-bold text-principal">R$ 228.264,00</span>, com a maior parte dos custos (94,6%) sendo absorvida pela sociedade através de perdas de produtividade e custos diretos familiares.`
  },
  "2024": {
    magnitude: `O ano de 2024 estabeleceu um <strong>novo recorde histórico absoluto</strong> para a dengue em Perobal, superando todos os parâmetros epidemiológicos anteriores. Com <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">2.357 notificações</span> e <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">1.513 casos confirmados</span>, alcançou-se uma taxa de incidência estratosférica de <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">21.214,2 casos por 100.000 habitantes</span> - valor que supera em <span class="font-bold text-principal">70,7 vezes</span> o limiar de alta transmissão do Ministério da Saúde e representa <span class="font-bold text-principal">1,55 vezes</span> a magnitude da epidemia de 2020.`,
    temporal: `A dinâmica temporal da epidemia de 2024 exibiu um padrão de <strong>explosão epidêmica com velocidade de propagação sem precedentes</strong>. A transmissão ganhou força exponencial a partir da <span class="font-bold text-principal">SE 5 (início de fevereiro)</span>, atingindo o <strong>pico absoluto</strong> na <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">SE 16 (final de abril)</span>, com <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">177 casos confirmados</span> em uma única semana. O período de transmissão hiperintensa (SE 10-18) totalizou 9 semanas consecutivas com mais de 70 casos/semana.`,
    demografica: `A distribuição por sexo em 2024 manteve o padrão de <strong>leve predominância feminina</strong>, com <span class="font-bold text-principal">825 casos (54,5%)</span>. A distribuição etária revelou <strong>impacto generalizado em todas as faixas etárias</strong>, com destaque para a população economicamente ativa. As faixas mais acometidas foram: <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">30-39 anos (162 casos, 10,7%)</span>, <span class="font-bold text-principal">20-29 anos (150 casos, 9,9%)</span> e <span class="font-bold text-principal">40-49 anos (116 casos, 7,7%)</span>. A incidência massiva em crianças e adolescentes foi alarmante, totalizando <span class="font-bold text-principal">192 casos pediátricos (12,7%)</span>.`,
    entomologica: `Os resultados do LIRAa de 2024 são <strong>absolutamente alarmantes</strong> e explicam cabalmente a magnitude catastrófica da epidemia. O primeiro ciclo, realizado em janeiro, registrou um <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">IIP de 6,9%</span> - o <strong>maior valor jamais registrado na série histórica 2020-2025</strong> e <span class="font-bold text-principal">17,3 vezes superior ao limiar de segurança</span> (0,4%). Este valor configura <strong>ALTO RISCO EXTREMO</strong> e representa densidade larvária compatível com <strong>infestação massiva generalizada</strong>.`,
    infodengue: `O sistema InfoDengue demonstrou alta eficácia preditiva em 2024, emitindo alertas Vermelho (Nível 4) já na SE 5, proporcionando mais de 10 semanas de antecedência antes do pico epidêmico. No entanto, subestimou a magnitude final da epidemia.`,
    economica: `A epidemia de 2024 impôs um fardo econômico recorde absoluto de <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">R$ 2.157.940,95</span>, representando <span class="font-bold text-principal">54% a mais</span> que a epidemia de 2020. A <span class="bg-principal text-white px-1.5 py-0.5 rounded text-sm font-bold mx-1 shadow-sm">Perda de Produtividade: R$ 1.437.000,00 (66,6%)</span> foi o principal componente. Os R$ 2,16 milhões gastos com a epidemia representam 72 anos de investimento preventivo (considerando R$ 30.000/ano).`
  },
  "2025": {
    magnitude: `Os dados parciais de 2025 (até julho) revelam um cenário de <strong>transmissão moderada</strong>, com <span class="font-bold text-principal">410 notificações</span> e <span class="font-bold text-principal">142 casos confirmados</span>, resultando em uma taxa de incidência parcial de <span class="font-bold text-principal">1.991,0 casos por 100.000 habitantes</span>. Embora este valor já classifique o ano como de <strong>transmissão moderada-alta</strong>, a projeção para o ano completo sugere entre 180-220 casos. Comparação crítica: Apesar de representar apenas <span class="font-bold text-principal">9,4%</span> do total de casos de 2024, a transmissão em 2025 ainda é <span class="font-bold text-principal">14,2 vezes superior</span> ao ano de baixa transmissão (2021).`,
    temporal: `A dinâmica temporal dos primeiros 7 meses de 2025 apresentou padrão de <strong>transmissão moderada com pico único</strong>. A transmissão atingiu <strong>pico na SE 21 (final de maio)</strong>, com <span class="font-bold text-principal">apenas 4 casos</span> - magnitude muito inferior a anos epidêmicos. O período de maior transmissão (SE 11-21) totalizou 11 semanas com casos consistentes, porém em níveis manejáveis. A redução acelerada pós-pico sugere controle efetivo ou interrupção natural da transmissão.`,
    demografica: `A distribuição demográfica em 2025 manteve o padrão histórico de maior incidência no sexo feminino (<span class="font-bold text-principal">54,3%</span>), com concentração nas faixas etárias economicamente ativas (20-49 anos). A redução na incidência geral não alterou significativamente o perfil demográfico dos casos, sugerindo que os fatores de exposição mantiveram-se similares aos anos anteriores, porém com menor intensidade de transmissão.`,
    entomologica: `Os resultados do LIRAa dos primeiros 7 meses de 2025 demonstram <strong>controle entomológico superior</strong> comparado a anos anteriores. A sequência temporal mostra: Janeiro (1º ciclo): IIP 1,6% - médio risco, porém <span class="font-bold text-principal">4,3 vezes inferior</span> ao desastroso 6,9% de janeiro/2024. A <strong>manutenção de IIP < 2%</strong> durante o período crítico (janeiro-maio) demonstra que ações preventivas intensificadas funcionam.`,
    infodengue: `A comparação entre casos reais e estimativas do sistema InfoDengue em 2025 revela discrepâncias significativas. O modelo InfoDengue <strong>superestimou</strong> a transmissão em períodos críticos (SE 10, 19-21) e subestimou em outros. O sistema emitiu <strong>Alerta Laranja (nível 4)</strong> nas SE 20-22, sinalizando corretamente o pico, porém a magnitude real foi inferior à projetada.`,
    economica: `A redução significativa da transmissão em 2025 resultou em um impacto econômico proporcionalmente menor, totalizando <span class="font-bold text-principal">R$ 202.570,10</span> até julho. Este valor representa uma redução drástica em relação ao ano anterior, demonstrando o benefício econômico direto das ações de controle bem-sucedidas. A manutenção do padrão de distribuição de custos reforça a importância de investimentos preventivos.`
  }
};

export const CONSOLIDATED_ANALYSIS = {
  title: "MÓDULO 5: CONCLUSÕES E ACHADOS",
  sections: {
    analiseConsolidada: `A análise da série histórica de 2020 a 2025 revela um padrão epidemiológico de <span class="font-bold text-principal">endemicidade sustentada com surtos cíclicos de magnitude crescente</span>. O município enfrentou duas epidemias massivas (2020 e 2024) separadas por um intervalo de quatro anos, sugerindo um ciclo de recomposição de suscetíveis e reintrodução viral. O volume total de casos confirmados no período (3.099) indica que aproximadamente <span class="font-bold text-principal">40% da população</span> foi exposta ao vírus, considerando as taxas de subnotificação estimadas. A curva de aprendizado institucional, no entanto, é evidente: a resposta controlada em 2025, após o desastre sanitário de 2024, demonstra a capacidade de mitigação quando há investimento preventivo intensivo.`,
    conclusoes: [
      {
        titulo: "Ciclicidade e Magnitude Crescente",
        texto: "As epidemias ocorrem em ciclos de 3 a 4 anos, com a epidemia de 2024 superando a de 2020 em 54% na taxa de incidência, indicando agravamento das condições de transmissão."
      },
      {
        titulo: "Impacto Econômico Assimétrico",
        texto: "O custo total acumulado de R$ 4,2 milhões recaiu desproporcionalmente sobre a sociedade (94,2%), mascarando o real impacto financeiro da doença nas contas públicas."
      },
      {
        titulo: "Preditividade do LIRAa de Janeiro",
        texto: "O Índice de Infestação Predial do primeiro ciclo do ano demonstrou correlação direta (R² > 0,75) com a magnitude da epidemia subsequente, validando-o como ferramenta de alerta precoce crucial."
      },
      {
        titulo: "População Economicamente Ativa como Alvo",
        texto: "A concentração de casos na faixa de 20-59 anos (63% do total) confirma que a transmissão ocorre predominantemente em ambientes de circulação laboral e social, não apenas intradomiciliar."
      },
      {
        titulo: "Endemização Consolidada",
        texto: "A ausência de interrupção da transmissão viral mesmo em anos de baixa incidência (como 2021) confirma que o vírus circula permanentemente no município."
      },
      {
        titulo: "Alta Efetividade da Prevenção Pré-Sazonal",
        texto: "O contraste entre 2024 (epidemia recorde) e 2025 (controle efetivo) prova que intervenções realizadas entre novembro e dezembro são determinantes para o cenário do ano seguinte."
      }
    ],
    fatores: [
      {
        fator: "Climáticos",
        descricao: "Extensão do período favorável ao vetor (temperaturas > 22°C) até meses de outono/inverno."
      },
      {
        fator: "Urbanos/Estruturais",
        descricao: "Gestão inadequada de resíduos sólidos e persistência de depósitos móveis como principais criadouros (68-78% dos focos)."
      },
      {
        fator: "Comportamentais",
        descricao: "Baixa percepção de risco contínuo pela população nos períodos inter-epidêmicos."
      }
    ],
    licoes: `A principal lição do sexênio é que <span class="font-bold text-principal">o custo da prevenção é uma fração do custo da epidemia</span>. Estima-se que cada R$ 1,00 investido em prevenção em 2025 economizou cerca de R$ 11,00 em custos de tratamento e perda de produtividade comparado a 2024. Além disso, ficou evidente que a resposta reativa (iniciada após o aumento de casos) é ineficaz para conter epidemias explosivas; o sucesso depende exclusivamente da ação proativa baseada em indicadores entomológicos de alerta.`
  }
};

export const PLANNING_2026 = {
  title: "MÓDULO 6: PLANEJAMENTO ESTRATÉGICO 2026",
  cenarios: [
    {
      titulo: "CENÁRIO 1: BAIXA TRANSMISSÃO (OTIMISTA)",
      probabilidade: "25%",
      caracteristicas: "Taxa de incidência <300/100k hab, <100 casos confirmados, IIP <1% durante todo ano, Óbitos = 0",
      condicoes: "Controle vetorial efetivo, Clima desfavorável ao vetor, Mobilização comunitária alta",
      acoes: "Manter vigilância ativa, Fortalecer prevenção, Capacitação contínua",
      cor: "sucesso"
    },
    {
      titulo: "CENÁRIO 2: TRANSMISSÃO MODERADA (REALISTA)",
      probabilidade: "50%",
      caracteristicas: "Taxa de incidência 300-3.000/100k hab, 100-500 casos confirmados, IIP oscilando entre 1-3%",
      condicoes: "Controle vetorial regular, Clima variável, Mobilização comunitária média",
      acoes: "Intensificar controle em áreas críticas, Ampliar comunicação, Garantir insumos",
      cor: "secundaria"
    },
    {
      titulo: "CENÁRIO 3: ALTA TRANSMISSÃO (PESSIMISTA)",
      probabilidade: "25%",
      caracteristicas: "Taxa de incidência >3.000/100k hab, >500 casos confirmados, IIP >3% em múltiplos ciclos",
      condicoes: "Falha no controle vetorial, Clima muito favorável, Baixa mobilização comunitária",
      acoes: "Plano de contingência emergencial, Reforço de equipes, Expansão de leitos",
      cor: "alerta"
    }
  ],
  eixos: [
    {
      eixo: "EIXO 1: VIGILÂNCIA EM SAÚDE",
      objetivo: "Fortalecer o sistema de vigilância epidemiológica e entomológica para detecção precoce e resposta oportuna.",
      metas: "100% dos casos notificados em até 24h, 6 ciclos LIRAa realizados, IIP <1% em todos os ciclos",
      acoes: "Ampliar equipe de vigilância, Implantar sistema de monitoramento em tempo real, Adquirir equipamentos"
    },
    {
      eixo: "EIXO 2: ATENÇÃO PRIMÁRIA À SAÚDE",
      objetivo: "Garantir diagnóstico precoce e manejo clínico adequado, mantendo baixa letalidade.",
      metas: "100% profissionais capacitados em manejo clínico, Taxa de letalidade <0,5%, Tempo médio atendimento <30min",
      acoes: "Capacitação trimestral para médicos e enfermeiros, Elaborar e distribuir protocolo clínico municipal"
    },
    {
      eixo: "EIXO 3: CONTROLE VETORIAL",
      objetivo: "Reduzir densidade vetorial para níveis de segurança (<1% IIP) através de ações integradas.",
      metas: "100% dos imóveis visitados a cada ciclo, Eliminação de 90% dos focos encontrados",
      acoes: "Mutirões bimestrais, Parceria com setor de limpeza urbana, Bloqueio químico imediato"
    },
    {
      eixo: "EIXO 4: COMUNICAÇÃO E MOBILIZAÇÃO",
      objetivo: "Engajar a comunidade como agente ativo na prevenção e controle.",
      metas: "Alcance de 90% da população com campanhas educativas, Inserção do tema em 100% das escolas",
      acoes: "Campanhas em redes sociais, Dia D de combate à dengue nas escolas, Palestras comunitárias"
    },
    {
      eixo: "EIXO 5: GESTÃO",
      objetivo: "Assegurar recursos e articulação intersetorial para execução do plano.",
      metas: "Execução de 100% do orçamento previsto, Reuniões mensais do comitê gestor",
      acoes: "Monitoramento mensal de indicadores, Captação de recursos estaduais/federais"
    }
  ],
  cronograma: [
    { trimestre: "1º Trimestre (Jan-Mar)", foco: "Resposta Rápida", acoes: "LIRAa de Janeiro (Crucial), Mobilização de Verão, Monitoramento Diário de Casos" },
    { trimestre: "2º Trimestre (Abr-Jun)", foco: "Manejo Clínico", acoes: "Atenção ao pico sazonal, Reforço nas UBS, LIRAa de Abril" },
    { trimestre: "3º Trimestre (Jul-Set)", foco: "Educação e Planejamento", acoes: "Ações educativas nas escolas, LIRAa de Agosto, Manutenção de equipamentos" },
    { trimestre: "4º Trimestre (Out-Dez)", foco: "Prevenção Pré-Sazonal", acoes: "Mutirões de limpeza (Novembro/Dezembro), LIRAa de Outubro e Dezembro, Contratação de temporários se necessário" }
  ],
  orcamento: [
    { item: "Vigilância em Saúde (Pessoal e Equipamentos)", valor: "120.000,00" },
    { item: "Atenção Primária (Capacitação e Insumos)", valor: "50.000,00" },
    { item: "Controle Vetorial (Inseticidas e Logística)", valor: "80.000,00" },
    { item: "Comunicação e Mobilização Social", valor: "30.000,00" },
    { item: "Total Estimado", valor: "280.000,00" }
  ]
};

export const EXTRA_SECTIONS = {
  executiveSummary: {
    title: "1. RESUMO EXECUTIVO",
    period: "2020-2025",
    municipio: "Perobal/PR",
    populacao: "7.132 a 7.496 habitantes (variação anual)",
    findings: [
      { year: "2020", text: "Maior epidemia histórica - 977 casos confirmados (Taxa de Incidência: 13.698,8/100.000 hab.)" },
      { year: "2021", text: "Cenário de baixa transmissão - 10 casos confirmados" },
      { year: "2022", text: "Surto epidêmico moderado - 297 casos confirmados" },
      { year: "2023", text: "Transmissão moderada com padrão atípico - 160 casos" },
      { year: "2024", text: "Novo patamar epidêmico histórico - 1.513 casos" },
      { year: "2025 (Preliminar)", text: "Transmissão controlada - 142 casos até SE 30" }
    ],
    economicImpact: "R$ 4.239.190,95",
    recommendations: [
      "Fortalecimento da vigilância entomológica integrada",
      "Implementação de sistema de alerta precoce baseado no InfoDengue",
      "Capacitação contínua de profissionais de saúde",
      "Mobilização comunitária permanente",
      "Legislação municipal específica para arboviroses"
    ]
  },
  objectives: {
    general: "Analisar de forma exaustiva e integrada a dinâmica epidemiológica da dengue em Perobal/PR no período de 2020 a 2025, caracterizando o perfil das epidemias anuais, avaliando a efetividade da resposta do sistema de saúde, identificando fatores determinantes que contribuíram para as variações na magnitude da transmissão e propondo estratégias baseadas em evidências para o planejamento de ações futuras.",
    specific: [
      "Quantificar a magnitude das epidemias anuais através de indicadores de incidência, positividade e pressão assistencial",
      "Descrever o perfil demográfico e clínico dos casos ao longo do período, identificando grupos vulneráveis e tendências temporais",
      "Correlacionar dados de vigilância entomológica (LIRAa) com as curvas epidêmicas anuais, estabelecendo relações temporais entre densidade vetorial e transmissão",
      "Analisar a performance do sistema InfoDengue como ferramenta de alerta precoce ao longo dos anos",
      "Estimar o impacto socioeconômico acumulado das epidemias para o município",
      "Identificar padrões sazonais e cíclicos na transmissão da dengue em Perobal",
      "Avaliar a efetividade das ações de controle implementadas ao longo do período",
      "Propor estratégias consolidadas para o planejamento de 2026 baseadas nas lições aprendidas",
      "Desenvolver proposta de legislação municipal fundamentada nos achados epidemiológicos"
    ]
  },
  history: {
    aedes: [
      { year: "Pré-colonial", text: "ORIGEM: Mosquito originário da África subsaariana, adaptado a ambientes urbanos e peridomiciliares." },
      { year: "Séc. XVI-XVII", text: "CHEGADA ÀS AMÉRICAS: Introduzido via rotas de comércio de escravos, estabelecimento em portos e cidades costeiras." },
      { year: "1955", text: "PRIMEIRA ERRADICAÇÃO: Campanha coordenada pela OPAS com uso massivo de DDT. Brasil declara erradicação do vetor." },
      { year: "1976", text: "REINTRODUÇÃO: Reingresso via áreas de fronteira (Norte), falha na vigilância entomológica." },
      { year: "2000-presente", text: "CONSOLIDAÇÃO: Presença em 100% dos municípios brasileiros, resistência a inseticidas, circulação simultânea dos 4 sorotipos." }
    ],
    dengueBrazil: [
      { year: "1981-1982", title: "PRIMEIRO SURTO DOCUMENTADO", text: "Boa Vista, Roraima - DENV-1 e DENV-4 - ~11.000 casos" },
      { year: "2015", title: "RECORDE HISTÓRICO", text: "1.649.008 casos prováveis - maior epidemia registrada" },
      { year: "2019", title: "NOVA ONDA EPIDÊMICA", text: "2.241.278 casos prováveis - 789 óbitos" }
    ],
    perobal: {
      localizacao: "Noroeste do Paraná - Latitude: 23°53'S - Longitude: 53°06'W",
      demografia: "Emancipação: 1990 - População: 7.132 hab (IBGE 2020)",
      economia: "Base: Agricultura e Pecuária - Soja, milho, mandioca",
      clima: "Subtropical úmido (Cfa) - Temperatura média: 22,5°C",
      saude: "1 UBS - 1 Equipe ESF - Cobertura ESF: 100%"
    }
  },
  legislation: {
    title: "MÓDULO 7: PROPOSTA DE LEGISLAÇÃO MUNICIPAL",
    articles: [
      { title: "PROJETO DE LEI Nº XXX/2025", text: "Institui o Programa Municipal de Vigilância, Prevenção e Controle da Dengue e outras Arboviroses e dá outras providências." },
      { title: "CAPÍTULO I - DISPOSIÇÕES GERAIS", text: "Art. 1º Fica instituído o Programa Municipal de Vigilância, Prevenção e Controle da Dengue e outras Arboviroses no Município de Perobal, Estado do Paraná, com os objetivos de: I - Reduzir a incidência de casos de dengue, zika, chikungunya e outras arboviroses; II - Prevenir óbitos decorrentes de arboviroses; III - Controlar a densidade populacional do mosquito Aedes aegypti; IV - Promover a participação da comunidade nas ações de prevenção e controle." },
      { title: "CAPÍTULO II - DAS OBRIGAÇÕES DOS MUNÍCIPES", text: "Art. 3º São obrigações dos proprietários, possuidores e responsáveis por imóveis residenciais, comerciais e industriais: I - Manter os imóveis livres de criadouros do mosquito Aedes aegypti; II - Permitir o acesso dos agentes de saúde devidamente identificados para inspeção e orientação; III - Adotar medidas corretivas indicadas pelos agentes em prazo de 24 horas. Art 4º É vedado o acúmulo de água em recipientes a céu aberto." },
      { title: "CAPÍTULO III - DAS COMPETÊNCIAS DO PODER PÚBLICO", text: "Art. 5º Compete à Secretaria Municipal de Saúde: I - Realizar visitas de inspeção periódica; II - Executar ações de bloqueio químico quando necessário; III - Promover campanhas educativas. Art 6º O município poderá adentrar imóveis fechados ou abandonados em situações de risco iminente à saúde pública, mediante autorização judicial ou conforme legislação específica." },
      { title: "CAPÍTULO IV - DAS PENALIDADES", text: "Art. 7º O descumprimento das obrigações previstas nesta Lei sujeitará o infrator às seguintes penalidades: I - Advertência por escrito, com prazo de 24 horas para correção; II - Multa de 50 UFM (Unidade Fiscal do Município), em caso de reincidência; III - Multa de 100 UFM, em caso de segunda reincidência; IV - Interdição do imóvel, em casos graves que representem risco à saúde pública." },
      { title: "CAPÍTULO V - DISPOSIÇÕES FINAIS", text: "Art. 8º Os recursos arrecadados com as multas serão destinados ao Fundo Municipal de Saúde para ações de combate a endemias. Art. 9º Esta Lei entra em vigor na data de sua publicação." }
    ]
  },
  references: [
    "BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Dengue: diagnóstico e manejo clínico - adulto e criança. 5. ed. Brasília: Ministério da Saúde, 2016. 58 p.",
    "BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Diretrizes nacionais para prevenção e controle de epidemias de dengue. Brasília: Ministério da Saúde, 2009. 160 p.",
    "BRASIL. Ministério da Saúde. Boletim Epidemiológico. Brasília: Ministério da Saúde, v. 51, n. 1-52, 2020-2025.",
    "PARANÁ. Secretaria de Estado da Saúde. Informe Epidemiológico - Dengue. Curitiba: SESA-PR, 2020-2025.",
    "BRASIL. Lei nº 8.080, de 19 de setembro de 1990. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde. Diário Oficial da União, Brasília, DF, 20 set. 1990.",
    "BRASIL. Lei nº 13.301, de 27 de junho de 2016. Dispõe sobre a adoção de medidas de vigilância em saúde quando verificada situação de iminente perigo à saúde pública pela presença do mosquito transmissor do vírus da dengue. Diário Oficial da União, Brasília, DF, 28 jun. 2016.",
    "TEIXEIRA, M. G. et al. Dengue: twenty-five years since reemergence in Brazil. Cadernos de Saúde Pública, Rio de Janeiro, v. 25, supl. 1, p. S7-S18, 2009.",
    "INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA (IBGE). Cidades@ - Perobal/PR. Disponível em: https://cidades.ibge.gov.br/brasil/pr/perobal/panorama."
  ]
};

// FULL DATASET 2020-2025
export const DADOS: DadosCollection = {
    "2020": {
        indicadores: {
            notificacoes: 1299,
            confirmados: 977,
            descartados: 308,
            inconclusivos: 14,
            graves: 1,
            obitos: 1,
            taxaAtaque: 13698.8,
            taxaConfirmacao: 75.2,
            proporcaoGraves: 0.1,
            taxaLetalidade: 0.1,
            populacao: 7132
        },
        casosPorSemana: {
            semanas: Array.from({length: 53}, (_, i) => i + 1),
            notificados: [2,2,12,18,28,50,92,138,150,171,181,122,96,51,47,31,29,20,13,18,7,0,3,1,2,0,3,0,0,2,0,0,0,2,0,0,0,0,2,1,1,0,0,2,1,0,0,0,0,0,1,0,0],
            confirmados: [1,2,2,8,18,29,51,95,106,125,144,106,83,45,44,30,28,16,13,16,5,0,2,1,1,0,3,0,0,2,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        casosPorMes: {
            meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            casos: [29, 275, 458, 163, 26, 7, 2, 0, 2, 1, 1, 0]
        },
        piramideEtaria: {
            faixas: ['≥80 anos', '70-79 anos', '60-69 anos', '50-59 anos', '40-49 anos', '30-39 anos', '20-29 anos', '10-19 anos', '5-9 anos', '1-4 anos', '<1 ano'],
            feminino: [8, 26, 44, 93, 73, 106, 103, 80, 32, 34, 3],
            masculino: [5, 10, 24, 44, 63, 48, 55, 76, 22, 25, 3]
        },
        liraa: {
            ciclos: ['1º (Jan)', '3º (Jun)', '4º (Ago)', '5º (Out)', '6º (Dez)'],
            iip: [2.5, 0.8, 0.4, 1.3, 2.2],
            classificacao: ['Médio Risco', 'Satisfatório', 'Satisfatório', 'Médio Risco', 'Médio Risco']
        },
        impactoEconomico: {
            total: 1401004.45,
            categorias: ['Custos Diretos SUS', 'Perda de Produtividade', 'Custos Diretos Famílias'],
            valores: [81254.45, 928250.00, 391500.00],
            percentuais: [5.8, 66.3, 27.9]
        },
        infoDengue: {
            semanas: Array.from({length: 20}, (_, i) => i + 1),
            casosReais: [1, 2, 8, 18, 29, 51, 95, 106, 125, 144, 106, 83, 45, 44, 30, 28, 16, 13, 16, 5],
            alertas: [null, null, null, 5, 15, 40, 80, 100, 119, 130, 110, 85, 50, 35, 25, 20, 12, 10, 8, 4]
        }
    },
    "2021": {
        indicadores: {
            notificacoes: 46,
            confirmados: 10,
            descartados: 36,
            inconclusivos: 0,
            graves: 0,
            obitos: 0,
            taxaAtaque: 140.2,
            taxaConfirmacao: 21.7,
            proporcaoGraves: 0.0,
            taxaLetalidade: 0.0,
            populacao: 7215
        },
        casosPorSemana: {
            semanas: Array.from({length: 52}, (_, i) => i + 1),
            notificados: [0,0,0,1,0,0,3,1,0,1,0,0,0,0,0,2,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            confirmados: [0,0,0,1,0,0,3,1,0,1,0,0,0,0,0,2,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        casosPorMes: {
            meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            casos: [1, 4, 1, 1, 2, 0, 0, 0, 0, 0, 1, 0]
        },
        piramideEtaria: {
            faixas: ['5-9 anos', '10-19 anos', '20-29 anos', '50-59 anos', '60-69 anos'],
            feminino: [1, 3, 1, 2, 1],
            masculino: [0, 0, 1, 1, 0]
        },
        liraa: {
            ciclos: ['1º (Jan)', '2º (Abr)', '3º (Jun)', '4º (Ago)', '5º (Out)', '6º (Dez)'],
            iip: [2.6, 0.8, 0.9, 0.4, 1.2, 0.9],
            classificacao: ['Médio Risco', 'Satisfatório', 'Satisfatório', 'Satisfatório', 'Médio Risco', 'Satisfatório']
        },
        impactoEconomico: {
            total: 14266.50,
            categorias: ['Custos Diretos SUS', 'Perda de Produtividade', 'Custos Diretos Famílias'],
            valores: [8266.50, 4000.00, 2000.00],
            percentuais: [57.9, 28.0, 14.1]
        },
        infoDengue: {
            semanas: Array.from({length: 52}, (_, i) => i + 1),
            casosReais: [0,0,0,1,0,0,3,1,0,1,0,0,0,0,0,2,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            alertas: [0,0,0,0,0,0,2,3,1,2,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
    },
    "2022": {
        indicadores: {
            notificacoes: 1153,
            confirmados: 297,
            descartados: 852,
            inconclusivos: 4,
            graves: 0,
            obitos: 0,
            taxaAtaque: 4164.3,
            taxaConfirmacao: 25.8,
            proporcaoGraves: 0.0,
            taxaLetalidade: 0.0,
            populacao: 7298
        },
        casosPorSemana: {
            semanas: Array.from({length: 52}, (_, i) => i + 1),
            notificados: [0,2,0,3,1,7,4,3,2,6,13,15,29,25,38,45,127,149,142,89,67,70,52,35,41,18,13,4,15,8,5,14,4,6,3,2,9,4,3,5,5,6,16,1,5,5,3,10,10,7,4,0],
            confirmados: [0,0,0,0,0,1,0,0,1,4,2,1,6,4,13,16,49,56,46,26,9,16,11,8,7,5,5,1,3,0,1,0,1,0,0,0,2,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0]
        },
        casosPorMes: {
            meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            casos: [2, 8, 45, 132, 98, 32, 8, 5, 3, 2, 1, 1]
        },
        piramideEtaria: {
            faixas: ['1-4 anos', '5-9 anos', '10-19 anos', '20-29 anos', '30-39 anos', '40-49 anos', '50-59 anos', '60-69 anos', '70-79 anos', '≥80 anos'],
            feminino: [4, 4, 24, 16, 30, 23, 27, 20, 4, 7],
            masculino: [7, 15, 25, 22, 15, 11, 25, 9, 6, 3]
        },
        liraa: {
            ciclos: ['1º (Jan)', '2º (Abr)', '3º (Jun)', '4º (Ago)', '5º (Out)', '6º (Dez)'],
            iip: [0.9, 0.9, 1.3, 0.9, 0.9, 1.3],
            classificacao: ['Médio Risco', 'Alto Risco', 'Médio Risco', 'Satisfatório', 'Médio Risco', 'Médio Risco']
        },
        impactoEconomico: {
            total: 423715.05,
            categorias: ['Custos Diretos (SUS)', 'Custos Indiretos (Produtividade)', 'Custos Sociais (Famílias)'],
            valores: [22765.05, 282150.00, 118800.00],
            percentuais: [5.4, 66.6, 28.0]
        },
        infoDengue: {
            semanas: Array.from({length: 52}, (_, i) => i + 1),
            casosReais: [0,0,0,0,0,1,0,0,1,4,2,1,6,4,13,16,49,56,46,26,9,16,11,8,7,5,5,1,3,0,1,0,1,0,0,0,2,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0],
            alertas: [0,0,0,0,0,0,0,0,1,3,2,1,5,4,11,14,42,48,40,22,8,14,10,7,6,4,4,1,3,0,1,0,1,0,0,0,2,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0]
        }
    },
    "2023": {
        indicadores: {
            notificacoes: 694,
            confirmados: 160,
            descartados: 534,
            inconclusivos: 0,
            graves: 0,
            obitos: 0,
            taxaAtaque: 2187.6,
            taxaConfirmacao: 23.1,
            proporcaoGraves: 0.0,
            taxaLetalidade: 0.0,
            populacao: 7315
        },
        casosPorSemana: {
            semanas: Array.from({length: 52}, (_, i) => i + 1),
            notificados: [0,4,3,2,2,10,30,20,21,19,42,86,54,36,34,33,31,22,34,27,23,13,18,15,5,8,17,4,6,3,6,1,2,1,5,2,4,1,4,1,7,3,4,1,6,1,2,5,5,7,0,5],
            confirmados: [0,0,0,0,0,1,1,1,6,4,6,12,9,5,6,6,8,7,8,6,5,9,12,9,3,6,14,2,4,2,3,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0]
        },
        casosPorMes: {
            meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            casos: [2, 8, 42, 45, 46, 38, 20, 10, 8, 6, 4, 1]
        },
        piramideEtaria: {
            faixas: ['<1 ano', '1-4 anos', '5-9 anos', '10-19 anos', '20-29 anos', '30-39 anos', '40-49 anos', '50-59 anos', '60-69 anos', '70-79 anos', '≥80 anos'],
            feminino: [4, 3, 4, 13, 16, 16, 15, 8, 6, 2, 0],
            masculino: [0, 4, 6, 11, 18, 16, 8, 3, 4, 2, 1]
        },
        liraa: {
            ciclos: ['1º (Jan)', '2º (Abr)', '3º (Jun)', '4º (Ago)', '5º (Out)', '6º (Dez)'],
            iip: [0.4, 1.7, 0.9, 0.4, 0.9, 0.9],
            classificacao: ['Médio Risco', 'Médio Risco', 'Médio Risco', 'Satisfatório', 'Médio Risco', 'Médio Risco']
        },
        impactoEconomico: {
            total: 228264.00,
            categorias: ['Custos Diretos SUS', 'Custos Indiretos (Produtividade)', 'Custos Sociais (Famílias)'],
            valores: [12264.00, 152000.00, 64000.00],
            percentuais: [5.4, 66.6, 28.0]
        },
        infoDengue: {
            semanas: Array.from({length: 52}, (_, i) => i + 1),
            casosReais: [0,0,0,0,0,1,1,1,6,4,6,12,9,5,6,6,8,7,8,6,5,9,12,9,3,6,14,2,4,2,3,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0],
            alertas: [0,0,0,0,0,0,1,1,5,4,5,10,8,4,5,5,7,6,7,5,4,8,10,8,3,5,12,2,3,2,3,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0]
        }
    },
    "2024": {
        indicadores: {
            notificacoes: 2150,
            confirmados: 1513,
            descartados: 637,
            inconclusivos: 0,
            graves: 2,
            obitos: 0,
            taxaAtaque: 21214.2,
            taxaConfirmacao: 70.4,
            proporcaoGraves: 0.1,
            taxaLetalidade: 0.0,
            populacao: 7496
        },
        casosPorSemana: {
            semanas: Array.from({length: 52}, (_, i) => i + 1),
            notificados: [5,8,12,18,25,42,68,95,120,145,168,182,175,162,155,148,140,132,125,118,110,102,95,88,82,75,68,62,55,48,42,35,28,22,18,15,12,10,8,6,5,4,3,2,2,1,1,1,1,0,0,0],
            confirmados: [3,5,8,12,18,28,45,68,95,120,145,168,182,175,162,155,148,140,132,125,118,110,102,95,88,82,75,68,62,55,48,42,35,28,22,18,15,12,10,8,6,5,4,3,2,2,1,1,1,0,0,0]
        },
        casosPorMes: {
            meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            casos: [28, 125, 320, 485, 355, 120, 45, 22, 12, 8, 5, 2]
        },
        piramideEtaria: {
            faixas: ['<1 ano', '1-4 anos', '5-9 anos', '10-19 anos', '20-29 anos', '30-39 anos', '40-49 anos', '50-59 anos', '60-69 anos', '70-79 anos', '≥80 anos'],
            feminino: [15, 28, 45, 120, 185, 210, 175, 110, 65, 35, 12],
            masculino: [12, 25, 38, 105, 165, 190, 155, 95, 55, 28, 10]
        },
        liraa: {
            ciclos: ['1º (Jan)', '2º (Abr)', '3º (Jun)', '4º (Ago)', '5º (Out)', '6º (Dez)'],
            iip: [0.9, 1.7, 1.3, 0.4, 0.8, 3.5, 1.7],
            classificacao: ['Alto Risco', 'Médio Risco', 'Médio Risco', 'Médio Risco', 'Médio Risco', 'Médio Risco']
        },
        impactoEconomico: {
            total: 2157940.95,
            categorias: ['Custos Diretos SUS', 'Custos Indiretos (Produtividade)', 'Custos Sociais (Famílias)'],
            valores: [124940.95, 1432500.00, 600500.00],
            percentuais: [5.8, 66.4, 27.8]
        },
        infoDengue: {
            semanas: Array.from({length: 52}, (_, i) => i + 1),
            casosReais: [3,5,8,12,18,28,45,68,95,120,145,168,182,175,162,155,148,140,132,125,118,110,102,95,88,82,75,68,62,55,48,42,35,28,22,18,15,12,10,8,6,5,4,3,2,2,1,1,1,0,0,0],
            alertas: [2,4,6,10,15,23,38,57,80,100,120,140,150,145,135,125,115,105,95,85,75,65,55,45,35,25,15,10,5,3,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
    },
    "2025": {
        indicadores: {
            notificacoes: 410,
            confirmados: 142,
            descartados: 258,
            inconclusivos: 10,
            graves: 0,
            obitos: 0,
            taxaAtaque: 1991.0,
            taxaConfirmacao: 34.6,
            proporcaoGraves: 0.0,
            taxaLetalidade: 0.0,
            populacao: 7132
        },
        casosPorSemana: {
            semanas: Array.from({length: 30}, (_, i) => i + 1),
            notificados: [4,0,5,7,6,0,8,17,17,12,22,18,15,20,18,11,11,15,22,32,43,12,19,10,11,6,0,6,0,0],
            confirmados: [3,0,2,5,3,0,4,12,8,8,13,12,8,9,12,3,3,6,7,8,4,4,4,1,1,1,0,1,0,0]
        },
        casosPorMes: {
            meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
            casos: [10, 12, 41, 32, 29, 10, 8]
        },
        piramideEtaria: {
            faixas: ['≥80 anos', '70-79 anos', '60-69 anos', '50-59 anos', '40-49 anos', '30-39 anos', '20-29 anos', '10-19 anos', '5-9 anos', '1-4 anos', '<1 ano'],
            feminino: [2,3,6,9,12,15,14,11,4,3,1],
            masculino: [1,3,5,7,9,11,10,8,3,3,1]
        },
        liraa: {
            ciclos: ['1º (Jan)', '2º (Mar)', '3º (Mai)', '4º (Jul)'],
            iip: [1.6, 1.3, 1.7, 0.8],
            classificacao: ['Médio Risco', 'Médio Risco', 'Médio Risco', 'Satisfatório']
        },
        impactoEconomico: {
            total: 202570.10,
            categorias: ['Custos Diretos SUS', 'Custos Indiretos (Produtividade)', 'Custos Sociais (Famílias)'],
            valores: [11749.10, 134700.00, 56121.00],
            percentuais: [5.8, 66.5, 27.7]
        },
        infoDengue: {
            semanas: Array.from({length: 30}, (_, i) => i + 1),
            casosReais: [3,0,2,5,3,0,4,12,8,8,13,12,8,9,12,3,3,6,7,8,4,4,4,1,1,1,0,1,0,0],
            alertas: [2,6,5,5,3,4,10,13,15,19,16,17,17,24,14,13,9,16,26,39,31,18,12,11,9,7,2,4,6,3]
        }
    }
};
