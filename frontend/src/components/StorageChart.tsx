import React from 'react'

interface StorageData {
  name: string
  used: number
  total: number
  color: string
}

const StorageChart = () => {
  const storageData: StorageData[] = [
    {
      name: 'Google Drive',
      used: 8.2,
      total: 15,
      color: '#4285F4'
    },
    {
      name: 'OneDrive',
      used: 6.8,
      total: 15,
      color: '#0078D4'
    }
  ]

  const getPercentage = (used: number, total: number) => {
    return (used / total) * 100
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h4 className="text-white text-lg font-semibold mb-2">Comparativo de Uso</h4>
        <p className="text-[#94A3B8] text-sm">Espaço utilizado por serviço</p>
      </div>
      
      <div className="space-y-4">
        {storageData.map((storage, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white font-medium">{storage.name}</span>
              <span className="text-[#94A3B8] text-sm">
                {storage.used} GB / {storage.total} GB
              </span>
            </div>
            
            <div className="w-full bg-[#374151] rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all duration-500 ease-in-out"
                style={{
                  width: `${getPercentage(storage.used, storage.total)}%`,
                  backgroundColor: storage.color
                }}
              />
            </div>
            
            <div className="flex justify-between text-xs text-[#94A3B8]">
              <span>{getPercentage(storage.used, storage.total).toFixed(1)}% usado</span>
              <span>{(storage.total - storage.used).toFixed(1)} GB livre</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-[#1E293B] rounded-lg border border-[#374151]">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-white">
              {storageData.reduce((acc, storage) => acc + storage.used, 0).toFixed(1)} GB
            </div>
            <div className="text-[#94A3B8] text-sm">Total Usado</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">
              {storageData.reduce((acc, storage) => acc + (storage.total - storage.used), 0).toFixed(1)} GB
            </div>
            <div className="text-[#94A3B8] text-sm">Total Livre</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StorageChart