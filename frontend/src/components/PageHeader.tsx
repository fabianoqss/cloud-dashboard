import React from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  className?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  icon, 
  className = '' 
}) => {
  return (
    <div className={`p-7 border-b border-[#374151] bg-[#0F172A] sticky top-0 z-10 ${className}`}>
      <div className='flex items-center gap-3 mb-2'>
        {icon && (
          <div className='text-2xl'>
            {icon}
          </div>
        )}
        <h1 className='text-white text-4xl text-inter font-bold'>{title}</h1>
      </div>
      {subtitle && (
        <p className='text-[#94A3B8] text-lg text-inter'>{subtitle}</p>
      )}
    </div>
  )
}

export default PageHeader