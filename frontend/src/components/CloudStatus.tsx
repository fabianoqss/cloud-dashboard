import React from 'react'

interface CloudService {
  name: string
  icon: string
  connected: boolean
}

interface CloudStatusProps {
  services: CloudService[]
  className?: string
}

const CloudStatus: React.FC<CloudStatusProps> = ({ services, className = '' }) => {
  return (
    <div className={`bg-[#1E293B] rounded-xl p-6 border border-[#374151] ${className}`}>
      <div className='flex items-center gap-8'>
        {services.map((service, index) => (
          <div key={index} className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-white rounded-lg p-1.5 flex items-center justify-center'>
              <img 
                src={service.icon} 
                alt={service.name} 
                className="w-full h-full object-contain" 
              />
            </div>
            <span className='text-white font-semibold'>{service.name}</span>
            <span className={`text-2xl ${service.connected ? 'text-green-400' : 'text-red-400'}`}>
              {service.connected ? '✅' : '❌'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CloudStatus