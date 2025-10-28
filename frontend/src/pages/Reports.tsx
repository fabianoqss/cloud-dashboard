import React from 'react'
import { useNavigate } from 'react-router-dom'
import fotoOficial from "../assets/FotoOficial.jpeg"

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
  const navigate = useNavigate()

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
    <div className='bg-[#0F172A] h-screen grid grid-cols-[auto_1fr] items-start'>
      {/* Sidebar */}
      <div className='bg-[#1E293B] h-screen w-64 p-6 flex flex-col'>
        {/* User Info */}
        <div className='flex items-center gap-3 mb-8'>
          <img 
            src={fotoOficial} 
            alt="Foto do usuário" 
            className="w-16 h-16 rounded-full object-cover border-2 border-[#155DFC]"
          />
          <div>
            <h2 className='text-white text-sm font-medium'>Fabiano Oliveira</h2>
            <p className='text-[#94A3B8] text-xs'>fabiano@email.com</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className='flex-1'>
          <ul className='space-y-2'>
            {/* Dashboard */}
            <li>
              <button 
                onClick={() => navigate('/dashboard')}
                className='flex items-center gap-3 p-3 rounded-lg hover:bg-[#334155] transition-colors duration-200 group w-full text-left'
              >
                <svg className='w-5 h-5 text-[#94A3B8] group-hover:text-white transition-colors duration-200' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'/>
                </svg>
                <span className='text-[#94A3B8] text-xs group-hover:text-white transition-colors duration-200'>Dashboard</span>
              </button>
            </li>

            {/* Gerenciador de Arquivos */}
            <li>
              <button 
                onClick={() => navigate('/file-manager')}
                className='flex items-center gap-3 p-3 rounded-lg hover:bg-[#334155] transition-colors duration-200 group w-full text-left'
              >
                <svg className='w-5 h-5 text-[#94A3B8] group-hover:text-white transition-colors duration-200' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z'/>
                </svg>
                <span className='text-[#94A3B8] text-xs group-hover:text-white transition-colors duration-200'>Gerenciador de Arquivos</span>
              </button>
            </li>

            {/* Relatórios - Active */}
            <li>
              <div className='flex items-center gap-3 p-3 rounded-lg bg-[#155DFC] group'>
                <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z'/>
                </svg>
                <span className='text-white text-xs font-medium'>Relatórios</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-8 overflow-y-auto'>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-white text-3xl font-bold mb-2 flex items-center">
            📈 Relatórios de Desempenho e Usabilidade
          </h1>
        </div>

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
    </div>
  )
}

export default Reports