import { useState, useEffect } from 'react';
import { Download, Database, ExternalLink } from 'lucide-react';
import Footer from '../Footer';
import csv2023 from '../../data/2023.csv?raw';
import csv2024 from '../../data/2024.csv?raw';
import csv2025 from '../../data/2025.csv?raw';

const CSV_SOURCES = [csv2023, csv2024, csv2025];

interface AggregatedRow {
  ano: string;
  munic: string;
  hom_doloso: number;
  lesao_corp_morte: number;
  latrocinio: number;
  feminicidio: number;
  lesao_corp_dolosa: number;
  estupro: number;
  hom_culposo: number;
  lesao_corp_culposa: number;
  roubo_celular: number;
  estelionato: number;
  recuperacao_veiculos: number;
  registro_ocorrencias: number;
}

interface CispRow extends Omit<AggregatedRow, 'ano' | 'munic'> {
  cisp: string;
  ano: string;
}

export default function TestDataPage() {
  const [data, setData] = useState<AggregatedRow[]>([]);
  const [cispData, setCispData] = useState<CispRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [selectedYearCisp, setSelectedYearCisp] = useState<string>('all');

  const parseCSVLine = (line: string): string[] => {
    const result: string[] = [];
    let current = '';
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];

      if (char === '"') {
        if (insideQuotes && nextChar === '"') {
          current += '"';
          i++;
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (char === ',' && !insideQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }

    result.push(current.trim());
    return result;
  };

  const parseCSV = (csv: string): any[] => {
    const lines = csv.trim().split('\n');
    const headers = parseCSVLine(lines[0]).map(h => h.replace(/"/g, ''));
    const rows: any[] = [];

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      const values = parseCSVLine(lines[i]);
      const row: any = {};
      headers.forEach((header, index) => {
        const value = values[index]?.replace(/"/g, '') || '';
        const numericValue = parseFloat(value);
        row[header] = isNaN(numericValue) || value === '' ? value : numericValue;
      });
      rows.push(row);
    }

    return rows;
  };

  const toNum = (val: any) => {
    const n = Number(val);
    return isNaN(n) ? 0 : n;
  };

  const aggregateByYear = (rawData: any[]): AggregatedRow[] => {
    const grouped: { [key: string]: AggregatedRow } = {};

    rawData.forEach((row) => {
      const ano = String(row.ano);

      if (!grouped[ano]) {
        grouped[ano] = {
          ano,
          munic: row.munic || '',
          hom_doloso: 0,
          lesao_corp_morte: 0,
          latrocinio: 0,
          feminicidio: 0,
          lesao_corp_dolosa: 0,
          estupro: 0,
          hom_culposo: 0,
          lesao_corp_culposa: 0,
          roubo_celular: 0,
          estelionato: 0,
          recuperacao_veiculos: 0,
          registro_ocorrencias: 0,
        };
      }

      grouped[ano].hom_doloso += toNum(row.hom_doloso);
      grouped[ano].lesao_corp_morte += toNum(row.lesao_corp_morte);
      grouped[ano].latrocinio += toNum(row.latrocinio);
      grouped[ano].feminicidio += toNum(row.feminicidio);
      grouped[ano].lesao_corp_dolosa += toNum(row.lesao_corp_dolosa);
      grouped[ano].estupro += toNum(row.estupro);
      grouped[ano].hom_culposo += toNum(row.hom_culposo);
      grouped[ano].lesao_corp_culposa += toNum(row.lesao_corp_culposa);
      grouped[ano].roubo_celular += toNum(row.roubo_celular);
      grouped[ano].estelionato += toNum(row.estelionato);
      grouped[ano].recuperacao_veiculos += toNum(row.recuperacao_veiculos);
      grouped[ano].registro_ocorrencias += toNum(row.registro_ocorrencias);
    });

    return Object.values(grouped).sort((a, b) => parseInt(a.ano) - parseInt(b.ano));
  };

  const aggregateByCisp = (rawData: any[]): CispRow[] => {
    const grouped: { [key: string]: CispRow } = {};

    rawData.forEach((row) => {
      const cisp = String(row.cisp);
      const ano = String(row.ano);
      const key = `${cisp}-${ano}`;

      if (!grouped[key]) {
        grouped[key] = {
          cisp,
          ano,
          hom_doloso: 0,
          lesao_corp_morte: 0,
          latrocinio: 0,
          feminicidio: 0,
          lesao_corp_dolosa: 0,
          estupro: 0,
          hom_culposo: 0,
          lesao_corp_culposa: 0,
          roubo_celular: 0,
          estelionato: 0,
          recuperacao_veiculos: 0,
          registro_ocorrencias: 0,
        };
      }

      grouped[key].hom_doloso += toNum(row.hom_doloso);
      grouped[key].lesao_corp_morte += toNum(row.lesao_corp_morte);
      grouped[key].latrocinio += toNum(row.latrocinio);
      grouped[key].feminicidio += toNum(row.feminicidio);
      grouped[key].lesao_corp_dolosa += toNum(row.lesao_corp_dolosa);
      grouped[key].estupro += toNum(row.estupro);
      grouped[key].hom_culposo += toNum(row.hom_culposo);
      grouped[key].lesao_corp_culposa += toNum(row.lesao_corp_culposa);
      grouped[key].roubo_celular += toNum(row.roubo_celular);
      grouped[key].estelionato += toNum(row.estelionato);
      grouped[key].recuperacao_veiculos += toNum(row.recuperacao_veiculos);
      grouped[key].registro_ocorrencias += toNum(row.registro_ocorrencias);
    });

    return Object.values(grouped).sort((a, b) => {
      if (a.cisp !== b.cisp) return parseInt(a.cisp) - parseInt(b.cisp);
      return parseInt(a.ano) - parseInt(b.ano);
    });
  };

  useEffect(() => {
    try {
      const allRows: any[] = [];
      for (const csv of CSV_SOURCES) {
        allRows.push(...parseCSV(csv));
      }
      setData(aggregateByYear(allRows));
      setCispData(aggregateByCisp(allRows));
    } catch (err) {
      setError('Erro ao processar os dados.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const downloadCSV = () => {
    if (data.length === 0) return;

    const headers = [
      'Ano',
      'Município',
      'Homicídio Doloso',
      'Lesão Corporal Morte',
      'Latrocínio',
      'Feminicídio',
      'Lesão Corporal Dolosa',
      'Estupro',
      'Homicídio Culposo',
      'Lesão Corporal Culposa',
      'Roubo Celular',
      'Estelionato',
      'Recuperação de Veículos',
      'Total de Registros de Ocorrências',
    ];

    const rows = data.map((row) => [
      row.ano,
      row.munic,
      row.hom_doloso,
      row.lesao_corp_morte,
      row.latrocinio,
      row.feminicidio,
      row.lesao_corp_dolosa,
      row.estupro,
      row.hom_culposo,
      row.lesao_corp_culposa,
      row.roubo_celular,
      row.estelionato,
      row.recuperacao_veiculos,
      row.registro_ocorrencias,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dados_aggregados.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const downloadCispCSV = () => {
    const filtered = selectedYearCisp === 'all' ? cispData : cispData.filter(r => r.ano === selectedYearCisp);
    if (filtered.length === 0) return;

    const headers = [
      'CISP',
      'Ano',
      'Homicídio Doloso',
      'Lesão Corporal Morte',
      'Latrocínio',
      'Feminicídio',
      'Lesão Corporal Dolosa',
      'Estupro',
      'Homicídio Culposo',
      'Lesão Corporal Culposa',
      'Roubo Celular',
      'Estelionato',
      'Recuperação de Veículos',
      'Total de Registros de Ocorrências',
    ];

    const rows = filtered.map((row) => [
      row.cisp,
      row.ano,
      row.hom_doloso,
      row.lesao_corp_morte,
      row.latrocinio,
      row.feminicidio,
      row.lesao_corp_dolosa,
      row.estupro,
      row.hom_culposo,
      row.lesao_corp_culposa,
      row.roubo_celular,
      row.estelionato,
      row.recuperacao_veiculos,
      row.registro_ocorrencias,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dados_por_cisp${selectedYearCisp !== 'all' ? `_${selectedYearCisp}` : ''}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const availableYears = Array.from(new Set(cispData.map(r => r.ano))).sort();
  const filteredCispData = selectedYearCisp === 'all' ? cispData : cispData.filter(r => r.ano === selectedYearCisp);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600/30 border border-blue-500/30 rounded-xl flex items-center justify-center">
              <Database size={20} className="text-blue-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Base de Dados
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Dados Estatísticos
          </h1>
          <p className="text-slate-300 text-lg font-light mb-6">
            Registros anuais de ocorrências — Duque de Caxias, 2023–2025
          </p>
          <a
            href="https://www.ispdados.rj.gov.br/estatistica.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-xl px-5 py-3 transition-all duration-200 group"
          >
            <ExternalLink size={16} className="text-blue-300 flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-300 leading-none mb-0.5">Fonte dos Dados</p>
              <p className="text-sm font-medium text-white leading-none">ISP Dados — Instituto de Segurança Pública do RJ</p>
            </div>
          </a>
        </div>
      </div>

      <main className="flex-1 bg-white">
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-700">
                {error}
              </div>
            )}

            {loading && (
              <div className="text-center py-16">
                <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-slate-600 font-medium">Carregando dados...</p>
              </div>
            )}

            {!loading && data.length > 0 && (
              <div>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8 flex items-start gap-3">
                  <ExternalLink size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Os dados apresentados nesta página foram extraídos do portal oficial do{' '}
                    <strong className="text-slate-900">Instituto de Segurança Pública do Rio de Janeiro (ISP)</strong>.
                    Para acessar a base completa e dados atualizados, visite:{' '}
                    <a
                      href="https://www.ispdados.rj.gov.br/estatistica.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 font-semibold hover:underline break-all"
                    >
                      www.ispdados.rj.gov.br/estatistica.html
                    </a>
                  </p>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Dados Agregados por Ano
                    </h2>
                    <p className="text-sm text-slate-500 mt-0.5">
                      {data.length} anos de registros consolidados
                    </p>
                  </div>
                  <button
                    onClick={downloadCSV}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors font-medium text-sm"
                  >
                    <Download size={16} />
                    Exportar CSV
                  </button>
                </div>

                <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-slate-700">Ano</th>
                        <th className="px-4 py-3 text-left font-bold text-slate-700">Município</th>
                        <th className="px-4 py-3 text-right font-bold text-slate-700">Hom. Doloso</th>
                        <th className="px-4 py-3 text-right font-bold text-slate-700">Lesão Corp. Morte</th>
                        <th className="px-4 py-3 text-right font-bold text-slate-700">Latrocínio</th>
                        <th className="px-4 py-3 text-right font-bold text-slate-700">Feminicídio</th>
                        <th className="px-4 py-3 text-right font-bold text-slate-700">Lesão Corp. Dolosa</th>
                        <th className="px-4 py-3 text-right font-bold text-slate-700">Estupro</th>
                        <th className="px-4 py-3 text-right font-bold text-slate-700">Hom. Culposo</th>
                        <th className="px-4 py-3 text-right font-bold text-slate-700">Lesão Corp. Culposa</th>
                        <th className="px-4 py-3 text-right font-bold text-slate-700">Roubo Celular</th>
                        <th className="px-4 py-3 text-right font-bold text-slate-700">Estelionato</th>
                        <th className="px-4 py-3 text-right font-bold text-slate-700">Recup. Veículos</th>
                        <th className="px-4 py-3 text-right font-bold text-slate-700">Total Ocorrências</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-4 py-3 text-slate-900 font-bold">{row.ano}</td>
                          <td className="px-4 py-3 text-slate-600">{row.munic}</td>
                          <td className="px-4 py-3 text-right text-slate-900 font-medium">
                            {row.hom_doloso.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-900 font-medium">
                            {row.lesao_corp_morte.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-900 font-medium">
                            {row.latrocinio.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-900 font-medium">
                            {row.feminicidio.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-900 font-medium">
                            {row.lesao_corp_dolosa.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-900 font-medium">
                            {row.estupro.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-900 font-medium">
                            {row.hom_culposo.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-900 font-medium">
                            {row.lesao_corp_culposa.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-900 font-medium">
                            {row.roubo_celular.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-900 font-medium">
                            {row.estelionato.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-900 font-medium">
                            {row.recuperacao_veiculos.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-900 font-bold">
                            {row.registro_ocorrencias.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* CISP Section */}
                <div className="mt-14 pt-10 border-t border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        Dados Agregados por CISP
                      </h2>
                      <p className="text-sm text-slate-500 mt-0.5">
                        Acumulado anual por Circunscrição Integrada de Segurança Pública
                      </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <select
                        value={selectedYearCisp}
                        onChange={(e) => setSelectedYearCisp(e.target.value)}
                        className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="all">Todos os anos</option>
                        {availableYears.map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                      <button
                        onClick={downloadCispCSV}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm whitespace-nowrap"
                      >
                        <Download size={15} />
                        Exportar CSV
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-4 py-3 text-left font-bold text-slate-700 whitespace-nowrap">CISP</th>
                          <th className="px-4 py-3 text-left font-bold text-slate-700 whitespace-nowrap">Ano</th>
                          <th className="px-4 py-3 text-right font-bold text-slate-700 whitespace-nowrap">Hom. Doloso</th>
                          <th className="px-4 py-3 text-right font-bold text-slate-700 whitespace-nowrap">Lesão Corp. Morte</th>
                          <th className="px-4 py-3 text-right font-bold text-slate-700 whitespace-nowrap">Latrocínio</th>
                          <th className="px-4 py-3 text-right font-bold text-slate-700 whitespace-nowrap">Feminicídio</th>
                          <th className="px-4 py-3 text-right font-bold text-slate-700 whitespace-nowrap">Lesão Corp. Dolosa</th>
                          <th className="px-4 py-3 text-right font-bold text-slate-700 whitespace-nowrap">Estupro</th>
                          <th className="px-4 py-3 text-right font-bold text-slate-700 whitespace-nowrap">Hom. Culposo</th>
                          <th className="px-4 py-3 text-right font-bold text-slate-700 whitespace-nowrap">Lesão Corp. Culposa</th>
                          <th className="px-4 py-3 text-right font-bold text-slate-700 whitespace-nowrap">Roubo Celular</th>
                          <th className="px-4 py-3 text-right font-bold text-slate-700 whitespace-nowrap">Estelionato</th>
                          <th className="px-4 py-3 text-right font-bold text-slate-700 whitespace-nowrap">Recup. Veículos</th>
                          <th className="px-4 py-3 text-right font-bold text-slate-700 whitespace-nowrap">Total Ocorrências</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredCispData.map((row, idx) => (
                          <tr
                            key={`${row.cisp}-${row.ano}-${idx}`}
                            className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                          >
                            <td className="px-4 py-3 text-slate-900 font-bold">
                              <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 text-xs font-black rounded-lg">
                                {row.cisp}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-slate-600 font-medium">{row.ano}</td>
                            <td className="px-4 py-3 text-right text-slate-900 font-medium">{row.hom_doloso.toLocaleString()}</td>
                            <td className="px-4 py-3 text-right text-slate-900 font-medium">{row.lesao_corp_morte.toLocaleString()}</td>
                            <td className="px-4 py-3 text-right text-slate-900 font-medium">{row.latrocinio.toLocaleString()}</td>
                            <td className="px-4 py-3 text-right text-slate-900 font-medium">{row.feminicidio.toLocaleString()}</td>
                            <td className="px-4 py-3 text-right text-slate-900 font-medium">{row.lesao_corp_dolosa.toLocaleString()}</td>
                            <td className="px-4 py-3 text-right text-slate-900 font-medium">{row.estupro.toLocaleString()}</td>
                            <td className="px-4 py-3 text-right text-slate-900 font-medium">{row.hom_culposo.toLocaleString()}</td>
                            <td className="px-4 py-3 text-right text-slate-900 font-medium">{row.lesao_corp_culposa.toLocaleString()}</td>
                            <td className="px-4 py-3 text-right text-slate-900 font-medium">{row.roubo_celular.toLocaleString()}</td>
                            <td className="px-4 py-3 text-right text-slate-900 font-medium">{row.estelionato.toLocaleString()}</td>
                            <td className="px-4 py-3 text-right text-slate-900 font-medium">{row.recuperacao_veiculos.toLocaleString()}</td>
                            <td className="px-4 py-3 text-right text-slate-900 font-bold">{row.registro_ocorrencias.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-slate-400 mt-3">
                    Exibindo {filteredCispData.length} registros
                    {selectedYearCisp !== 'all' ? ` para o ano de ${selectedYearCisp}` : ' (todos os anos)'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
