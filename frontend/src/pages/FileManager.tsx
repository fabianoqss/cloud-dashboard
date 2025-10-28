import React from 'react'
import { useNavigate } from 'react-router-dom'
import googleDrive from "../assets/icons8-google-drive.svg"
import oneDrive from "../assets/icons8-onedrive.svg"
import fotoOficial from "../assets/FotoOficial.jpeg"

const FileManager = () => {
  const navigate = useNavigate()

  // Dados mockados dos arquivos
  const files = [
    {
      id: 1,
      name: "RelatorioTCC.pdf",
      size: "2.1 MB",
      modified: "07/10/2025",
      cloud: "Google Drive",
      cloudIcon: googleDrive
    },
    {
      id: 2,
      name: "DashboardUI.png",
      size: "800 KB",
      modified: "08/10/2025",
      cloud: "OneDrive",
      cloudIcon: oneDrive
    },
    {
      id: 3,
      name: "Apresentacao.pptx",
      size: "3.2 MB",
      modified: "05/10/2025",
      cloud: "Google Drive",
      cloudIcon: googleDrive
    }
  ]

  const handleDownload = (fileName: string) => {
    console.log(`Baixando arquivo: ${fileName}`)
  }

  const handleDelete = (fileName: string) => {
    console.log(`Deletando arquivo: ${fileName}`)
  }

  const handleUpload = () => {
    console.log("Abrindo upload de arquivo")
  }

  const handleRefresh = () => {
    console.log("Atualizando lista de arquivos")
  }

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
              <button 
                onClick={() => navigate('/dashboard')}
                className='flex items-center gap-3 p-3 rounded-lg hover:bg-[#1E293B] transition-colors duration-200 group w-full text-left'
              >
                <svg className='w-5 h-5 text-[#94A3B8] group-hover:text-white transition-colors duration-200' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'/>
                </svg>
                <span className='text-[#94A3B8] text-xs group-hover:text-white transition-colors duration-200'>Dashboard</span>
              </button>
            </li>
            
            {/* Gerenciador de Arquivos - Active */}
            <li>
              <div className='flex items-center gap-3 p-3 rounded-lg bg-[#1E293B] border-l-4 border-[#155DFC]'>
                <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z'/>
                </svg>
                <span className='text-white text-xs font-semibold'>Gerenciador de Arquivos</span>
              </div>
            </li>
            
            {/* Relatórios */}
            <li>
              <a href="#" className='flex items-center gap-3 p-3 rounded-lg hover:bg-[#1E293B] transition-colors duration-200 group'>
                <svg className='w-5 h-5 text-[#94A3B8] group-hover:text-white transition-colors duration-200' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z'/>
                </svg>
                <span className='text-[#94A3B8] text-xs group-hover:text-white transition-colors duration-200'>Relatórios</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className='p-8 overflow-auto'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-white text-3xl font-bold mb-2 flex items-center gap-3'>
            📁 Gerenciador de Arquivos
          </h1>
        </div>

        {/* Cloud Status */}
        <div className='bg-[#1E293B] rounded-xl p-6 mb-6 border border-[#374151]'>
          <div className='flex items-center gap-8'>
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-white rounded-lg p-1.5 flex items-center justify-center'>
                <img src={googleDrive} alt="Google Drive" className="w-full h-full" />
              </div>
              <span className='text-white font-semibold'>Google Drive</span>
              <span className='text-green-400 text-2xl'>✅</span>
            </div>
            
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-white rounded-lg p-1.5 flex items-center justify-center'>
                <img src={oneDrive} alt="OneDrive" className="w-full h-full object-contain" />
              </div>
              <span className='text-white font-semibold'>OneDrive</span>
              <span className='text-green-400 text-2xl'>✅</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-4 mb-6'>
          <button 
            onClick={handleUpload}
            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' />
            </svg>
            Upload Arquivo
          </button>
          
          <button 
            onClick={handleRefresh}
            className='bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
            </svg>
            Atualizar Lista
          </button>
        </div>

        {/* Files Table */}
        <div className='bg-[#1E293B] rounded-xl border border-[#374151] overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-[#374151]'>
                <tr>
                  <th className='text-left p-4 text-white font-semibold'>📄 Nome do Arquivo</th>
                  <th className='text-left p-4 text-white font-semibold'>📦 Tamanho</th>
                  <th className='text-left p-4 text-white font-semibold'>📅 Modificação</th>
                  <th className='text-left p-4 text-white font-semibold'>☁️ Nuvem</th>
                  <th className='text-left p-4 text-white font-semibold'>⚙️ Ações</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, index) => (
                  <tr key={file.id} className={`border-t border-[#374151] ${index % 2 === 0 ? 'bg-[#1E293B]' : 'bg-[#0F172A]'} hover:bg-[#334155] transition-colors duration-200`}>
                    <td className='p-4 text-white'>{file.name}</td>
                    <td className='p-4 text-[#94A3B8]'>{file.size}</td>
                    <td className='p-4 text-[#94A3B8]'>{file.modified}</td>
                    <td className='p-4'>
                      <div className='flex items-center gap-2'>
                        <div className='w-6 h-6 bg-white rounded p-1 flex items-center justify-center'>
                          <img src={file.cloudIcon} alt={file.cloud} className="w-full h-full object-contain" />
                        </div>
                        <span className='text-[#94A3B8] text-sm'>{file.cloud}</span>
                      </div>
                    </td>
                    <td className='p-4'>
                      <div className='flex gap-2'>
                        <button 
                          onClick={() => handleDownload(file.name)}
                          className='bg-green-600 hover:bg-green-700 text-white p-2 rounded transition-colors duration-200'
                          title='Download'
                        >
                          ⬇️
                        </button>
                        <button 
                          onClick={() => handleDelete(file.name)}
                          className='bg-red-600 hover:bg-red-700 text-white p-2 rounded transition-colors duration-200'
                          title='Deletar'
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Statistics Footer */}
        <div className='mt-6 bg-[#1E293B] rounded-xl p-4 border border-[#374151]'>
          <div className='flex items-center justify-center gap-8 text-[#94A3B8] text-sm'>
            <span>📈 Tempo médio de operação:</span>
            <span>Upload: <span className='text-blue-400 font-semibold'>1.2s</span></span>
            <span>Download: <span className='text-green-400 font-semibold'>0.8s</span></span>
            <span>Exclusão: <span className='text-red-400 font-semibold'>0.3s</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FileManager