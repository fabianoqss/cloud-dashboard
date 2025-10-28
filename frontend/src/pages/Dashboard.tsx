import React from 'react'
import { useNavigate } from 'react-router-dom'
import StatsCard from '../components/StatsCard'
import googleDrive from "../assets/icons8-google-drive.svg"
import oneDrive from "../assets/icons8-onedrive.svg"
import fotoOficial from "../assets/FotoOficial.jpeg"

const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#0F172A] h-screen grid grid-cols-[auto_1fr] items-start'>
      
      <div className='flex flex-col border-r border-[#374151] h-full'>
        {/* User Section */}
        <section className='flex items-center gap-4 p-7 border-b border-[#374151] w-fit'>
          <img src={fotoOficial} alt="Foto do Fabiano" className='w-16 h-16 rounded-full object-cover border-2 border-[#155DFC]' />
          
          <div>
            <h2 className='text-white text-2xl text-inter font-bold'>Fabiano</h2>
            <p className='text-[#94A3B8] text-sm text-inter'>fabianoquirinos@outlook.com</p>
          </div>
        </section>

        {/* Sidebar */}
        <nav className='mt-8 px-7'>
          <ul className='space-y-4'>
            {/* Dashboard */}
            <li>
              <a href="#" className='flex items-center gap-3 p-3 rounded-lg hover:bg-[#1E293B] transition-colors duration-200 group'>
                <svg className='w-5 h-5 text-[#94A3B8] group-hover:text-white transition-colors duration-200' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'/>
                </svg>
                <span className='text-[#94A3B8] text-xs group-hover:text-white transition-colors duration-200'>Dashboard</span>
              </a>
            </li>

            {/* Gerenciador de Arquivos */}
            <li>
              <button 
                onClick={() => navigate('/file-manager')}
                className='flex items-center gap-3 p-3 rounded-lg hover:bg-[#1E293B] transition-colors duration-200 group w-full text-left'
              >
                <svg className='w-5 h-5 text-[#94A3B8] group-hover:text-white transition-colors duration-200' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z'/>
                </svg>
                <span className='text-[#94A3B8] text-xs group-hover:text-white transition-colors duration-200'>Gerenciador de Arquivos</span>
              </button>
            </li>

            {/* Relatórios */}
            <li>
              <button 
                onClick={() => navigate('/reports')}
                className='flex items-center gap-3 p-3 rounded-lg hover:bg-[#1E293B] transition-colors duration-200 group w-full text-left'
              >
                <svg className='w-5 h-5 text-[#94A3B8] group-hover:text-white transition-colors duration-200' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z'/>
                </svg>
                <span className='text-[#94A3B8] text-xs group-hover:text-white transition-colors duration-200'>Relatórios</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className='flex flex-col'>
        {/* Header */}
        <div className='p-7 grid gap-2 border-b border-[#374151]'>
          <h1 className='text-white text-4xl text-inter font-bold'>Cloud Dashboard</h1>
          <p className='text-[#94A3B8] text-lg text-inter'>Ferramenta de Monitoramento de Nuvem</p>
        </div>
        
        {/* Stats Cards */}
        <div className='p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='h-[180px]'>
            <StatsCard 
              value="15 GB" 
              label="Espaço Total" 
              percentage="+12.5%" 
              isPositive={true}
            />
          </div>
          
          <div className='h-[180px]'>
            <StatsCard 
              value="8 GB" 
              label="Espaço Usado" 
              percentage="+8.2%" 
              isPositive={true}
            />
          </div>
          
          <div className='h-[180px]'>
            <StatsCard 
              value="243" 
              label="Arquivos Totais" 
              percentage="-0.5%" 
              isPositive={false}
            />
          </div>
          
          <div className='h-[180px]'>
            <StatsCard 
              value="156ms" 
              label="Tempo de Resposta" 
              percentage="+3.1%" 
              isPositive={false}
            />
          </div>
        </div>
        
        {/* Comparative Chart Section */}
        <div className='p-7'>
          <h2 className='text-white text-2xl font-inter font-bold mb-6'>Gráfico Comparativo</h2>
          
          <div className='space-y-6'>
            {/* Google Drive */}
            <div className='flex flex-col gap-3'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1'>
                    <img src={googleDrive} alt="Google Drive" className="w-full h-full" />
                  </div>
                  <span className='text-white font-inter font-semibold'>Google Drive</span>
                </div>
                <span className='text-[#94A3B8] font-inter text-sm'>78%</span>
              </div>
              <div className='w-full bg-[#334155] rounded-full h-3'>
                <div className='bg-[#4285F4] h-3 rounded-full transition-all duration-500 ease-out' style={{width: '78%'}}></div>
              </div>
            </div>
            
            {/* OneDrive */}
            <div className='flex flex-col gap-3'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1'>
                    <img src={oneDrive} alt="OneDrive" className="w-full h-full" />
                  </div>
                  <span className='text-white font-inter font-semibold'>OneDrive</span>
                </div>
                <span className='text-[#94A3B8] font-inter text-sm'>65%</span>
              </div>
              <div className='w-full bg-[#334155] rounded-full h-3'>
                <div className='bg-[#0078D4] h-3 rounded-full transition-all duration-500 ease-out' style={{width: '65%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
