import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import CloudStatus from '../components/CloudStatus'
import { mockUser, mockFiles, mockCloudServices } from '../data/mockData'

const FileManager = () => {

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
    <Layout currentPage="file-manager" userName={mockUser.name} userEmail={mockUser.email}>
      {/* Header */}
      <PageHeader 
        title="Gerenciador de Arquivos" 
        icon={<span>📁</span>}
      />

      {/* Main Content */}
      <div className='p-8'>
        {/* Cloud Status */}
        <CloudStatus services={mockCloudServices} className="mb-6" />

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
          <div className='p-6 border-b border-[#374151]'>
            <h2 className='text-white text-xl font-semibold'>Arquivos Recentes</h2>
          </div>
          
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-[#0F172A]'>
                <tr>
                  <th className='text-left p-4 text-[#94A3B8] font-medium'>Nome</th>
                  <th className='text-left p-4 text-[#94A3B8] font-medium'>Tamanho</th>
                  <th className='text-left p-4 text-[#94A3B8] font-medium'>Modificado</th>
                  <th className='text-left p-4 text-[#94A3B8] font-medium'>Nuvem</th>
                  <th className='text-left p-4 text-[#94A3B8] font-medium'>Ações</th>
                </tr>
              </thead>
              <tbody>
                {mockFiles.map((file) => (
                  <tr key={file.id} className='border-b border-[#374151] hover:bg-[#0F172A] transition-colors duration-200'>
                    <td className='p-4'>
                      <div className='flex items-center gap-3'>
                        <div className='w-8 h-8 bg-[#155DFC] rounded-lg flex items-center justify-center'>
                          <span className='text-white text-xs font-bold'>
                            {file.name.split('.').pop()?.toUpperCase()}
                          </span>
                        </div>
                        <span className='text-white font-medium'>{file.name}</span>
                      </div>
                    </td>
                    <td className='p-4 text-[#94A3B8]'>{file.size}</td>
                    <td className='p-4 text-[#94A3B8]'>{file.modified}</td>
                    <td className='p-4'>
                      <div className='flex items-center gap-2'>
                        <img src={file.cloudIcon} alt={file.cloud} className="w-5 h-5" />
                        <span className='text-[#94A3B8]'>{file.cloud}</span>
                      </div>
                    </td>
                    <td className='p-4'>
                      <button 
                        onClick={() => handleDownload(file.name)}
                        className='bg-[#155DFC] hover:bg-[#1E40AF] text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium'
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Stats */}
        <div className='mt-8 grid grid-cols-3 gap-6'>
          <div className='bg-[#1E293B] rounded-xl p-6 border border-[#374151]'>
            <div className='flex items-center gap-3 mb-2'>
              <div className='w-8 h-8 bg-[#155DFC] rounded-lg flex items-center justify-center'>
                <span className='text-white text-sm'>📁</span>
              </div>
              <h3 className='text-white font-semibold'>Total de Arquivos</h3>
            </div>
            <p className='text-2xl font-bold text-white'>127</p>
            <p className='text-[#94A3B8] text-sm'>+12 este mês</p>
          </div>
          
          <div className='bg-[#1E293B] rounded-xl p-6 border border-[#374151]'>
            <div className='flex items-center gap-3 mb-2'>
              <div className='w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center'>
                <span className='text-white text-sm'>💾</span>
              </div>
              <h3 className='text-white font-semibold'>Espaço Usado</h3>
            </div>
            <p className='text-2xl font-bold text-white'>2.4 GB</p>
            <p className='text-[#94A3B8] text-sm'>de 15 GB</p>
          </div>
          
          <div className='bg-[#1E293B] rounded-xl p-6 border border-[#374151]'>
            <div className='flex items-center gap-3 mb-2'>
              <div className='w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center'>
                <span className='text-white text-sm'>⚡</span>
              </div>
              <h3 className='text-white font-semibold'>Sincronizações</h3>
            </div>
            <p className='text-2xl font-bold text-white'>45</p>
            <p className='text-[#94A3B8] text-sm'>hoje</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FileManager