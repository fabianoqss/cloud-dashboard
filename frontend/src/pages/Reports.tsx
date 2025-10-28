import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import { mockUser } from '../data/mockData'

// Interfaces para tipagem
interface ChartDataItem {
  service: string
  time: number
  color: string
}

interface BarChartProps {
  data: ChartDataItem[]
  title: string
  unit?: string
}

interface TimelineDataItem {
  day: string
  operations: number
}

const Reports = () => {

  // Dados mockados para os gráficos
  const uploadData = [
    { service: 'Google Drive', time: 1.4, color: 'bg-blue-500' },
    { service: 'OneDrive', time: 1.1, color: 'bg-green-500' }
  ]

  const downloadData = [
    { service: 'Google Drive', time: 0.8, color: 'bg-blue-500' },
    { service: 'OneDrive', time: 1.3, color: 'bg-green-500' }
  ]

  const deleteData = [
    { service: 'Google Drive', time: 0.3, color: 'bg-blue-500' },
    { service: 'OneDrive', time: 0.5, color: 'bg-green-500' }
  ]

  // Dados para o gráfico de linha (operações ao longo do tempo)
  const timelineData = [
    { day: 'Seg', operations: 8 },
    { day: 'Ter', operations: 12 },
    { day: 'Qua', operations: 6 },
    { day: 'Qui', operations: 15 },
    { day: 'Sex', operations: 4 }
  ]

  const BarChart: React.FC<BarChartProps> = ({ data, title, unit = 's' }) => {
    const maxValue = Math.max(...data.map((item: ChartDataItem) => item.time))
    
    return (
      <div className="bg-[#1E293B] rounded-lg p-6 mb-6">
        <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
          📊 {title}
        </h3>
        <div className="space-y-4">
          {data.map((item: ChartDataItem, index: number) => (
            <div key={index} className="flex items-center">
              <div className="w-24 text-sm text-gray-300 mr-4">{item.service}</div>
              <div className="flex-1 bg-gray-700 rounded-full h-8 relative">
                <div 
                  className={`${item.color} h-8 rounded-full flex items-center justify-end pr-3 transition-all duration-500`}
                  style={{ width: `${(item.time / maxValue) * 100}%` }}
                >
                  <span className="text-white text-sm font-medium">{item.time}{unit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const LineChart: React.FC = () => {
    const maxOperations = Math.max(...timelineData.map((item: TimelineDataItem) => item.operations))
    
    return (
      <div className="bg-[#1E293B] rounded-lg p-6 mb-6">
        <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
          📈 Gráfico 4 – Operações ao longo do tempo (linha)
        </h3>
        <div className="text-sm text-gray-400 mb-4">(mostra variação de desempenho conforme uso)</div>
        <div className="flex items-end justify-between h-32 bg-gray-800 rounded p-4">
          {timelineData.map((item: TimelineDataItem, index: number) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="bg-blue-500 w-8 rounded-t transition-all duration-500"
                style={{ height: `${(item.operations / maxOperations) * 80}px` }}
              ></div>
              <div className="text-xs text-gray-300 mt-2">{item.day}</div>
              <div className="text-xs text-blue-400">{item.operations}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Layout currentPage="reports" userName={mockUser.name} userEmail={mockUser.email}>
      {/* Header */}
      <PageHeader 
        title="Relatórios de Desempenho e Usabilidade" 
        subtitle="Análise detalhada do uso da nuvem"
        icon={<span>📈</span>}
      />

      {/* Main Content */}
      <div className='p-8'>
        {/* Período de Análise */}
        <div className="bg-[#1E293B] rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center text-white">
              <span className="text-blue-400 mr-2">🔹</span>
              <span className="font-medium">Período de Análise:</span>
              <span className="ml-2 bg-[#155DFC] px-3 py-1 rounded text-sm">01/10/2025 - 08/10/2025</span>
            </div>
            <div className="flex items-center text-white">
              <span className="text-blue-400 mr-2">🔹</span>
              <span className="font-medium">Total de operações registradas:</span>
              <span className="ml-2 bg-green-600 px-3 py-1 rounded text-sm font-bold">45</span>
            </div>
          </div>
        </div>

        {/* Gráficos */}
        <BarChart 
          data={uploadData} 
          title="Gráfico 1 – Tempo médio de Upload (em segundos)" 
        />

        <BarChart 
          data={downloadData} 
          title="Gráfico 2 – Tempo médio de Download" 
        />

        <BarChart 
          data={deleteData} 
          title="Gráfico 3 – Tempo médio de Exclusão" 
        />

        <LineChart />

        {/* Análise Geral */}
        <div className="bg-[#1E293B] rounded-lg p-6 mb-6">
          <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
            🧠 Análise Geral
          </h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span>O OneDrive apresentou melhor desempenho em uploads.</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>O Google Drive foi mais estável em downloads grandes.</span>
            </div>
            <div className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              <span>A exclusão de arquivos é mais rápida no Google Drive.</span>
            </div>
          </div>
        </div>

        {/* Exportar Relatório */}
        <div className="bg-[#1E293B] rounded-lg p-6">
          <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
            📄 Exportar Relatório
          </h3>
          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              PDF
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              CSV
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Reports