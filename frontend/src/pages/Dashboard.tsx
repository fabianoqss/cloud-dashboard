import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import StatsCard from '../components/StatsCard'
import { mockUser, mockStatsData, mockChartData } from '../data/mockData'
import googleDrive from "../assets/icons8-google-drive.svg"
import oneDrive from "../assets/icons8-onedrive.svg"
import StorageTotalIcon from "../assets/storage-total.svg"
import StorageUsedIcon from "../assets/storage-used.svg"
import FilesTotalIcon from "../assets/files-total.svg"
import LatencyIcon from "../assets/latency.svg"

const Dashboard = () => {
  // Função para mapear ícones baseados no label
  const getIconForLabel = (label: string) => {
    switch (label) {
      case 'Espaço Total':
        return <img src={StorageTotalIcon} alt="Espaço Total" className="w-[24.5px] h-[24.5px]" />
      case 'Espaço Usado':
        return <img src={StorageUsedIcon} alt="Espaço Usado" className="w-[24.5px] h-[24.5px]" />
      case 'Arquivos Totais':
        return <img src={FilesTotalIcon} alt="Arquivos Totais" className="w-[24.5px] h-[24.5px]" />
      case 'Latência Média':
        return <img src={LatencyIcon} alt="Latência Média" className="w-[24.5px] h-[24.5px]" />
      default:
        return null
    }
  }

  return (
    <Layout currentPage="dashboard" userName={mockUser.name} userEmail={mockUser.email}>
      {/* Header */}
      <PageHeader 
        title="Cloud Dashboard" 
        subtitle="Ferramenta de Monitoramento de Nuvem"
      />
        
      {/* Stats Cards */}
      <div className='p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {mockStatsData.map((stat, index) => (
          <div key={index} className='h-[180px]'>
            <StatsCard 
              value={stat.value}
              label={stat.label}
              percentage={stat.percentage}
              isPositive={stat.isPositive}
              icon={getIconForLabel(stat.label)}
            />
          </div>
        ))}
      </div>
        
      {/* Comparative Chart Section */}
      <div className='p-7'>
        <div className='bg-[#1E293B] rounded-xl p-6 border border-[#374151]'>
          <h2 className='text-white text-2xl font-bold mb-6'>Gráfico Comparativo</h2>
          
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Chart placeholder */}
            <div className='bg-[#0F172A] rounded-lg p-6 border border-[#374151]'>
              <h3 className='text-white text-lg font-semibold mb-4'>Uso de Armazenamento</h3>
              <div className='h-64 flex items-center justify-center'>
                <div className='text-[#94A3B8] text-center'>
                  <div className='text-4xl mb-2'>📊</div>
                  <p>Gráfico de barras comparativo</p>
                  <p className='text-sm mt-2'>Google Drive vs OneDrive</p>
                </div>
              </div>
            </div>
            
            {/* Legend and stats */}
            <div className='space-y-6'>
              <div className='bg-[#0F172A] rounded-lg p-6 border border-[#374151]'>
                <h3 className='text-white text-lg font-semibold mb-4'>Legenda</h3>
                <div className='space-y-3'>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-white rounded-lg p-1.5 flex items-center justify-center'>
                      <img src={googleDrive} alt="Google Drive" className="w-full h-full" />
                    </div>
                    <span className='text-white'>Google Drive</span>
                    <span className='text-[#94A3B8] ml-auto'>8.2 GB</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-white rounded-lg p-1.5 flex items-center justify-center'>
                      <img src={oneDrive} alt="OneDrive" className="w-full h-full object-contain" />
                    </div>
                    <span className='text-white'>OneDrive</span>
                    <span className='text-[#94A3B8] ml-auto'>6.8 GB</span>
                  </div>
                </div>
              </div>
              
              <div className='bg-[#0F172A] rounded-lg p-6 border border-[#374151]'>
                <h3 className='text-white text-lg font-semibold mb-4'>Estatísticas</h3>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span className='text-[#94A3B8]'>Total usado:</span>
                    <span className='text-white'>15.0 GB</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-[#94A3B8]'>Espaço livre:</span>
                    <span className='text-white'>85.0 GB</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-[#94A3B8]'>Eficiência:</span>
                    <span className='text-green-400'>92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
