import React from 'react'
import IconUp from '../assets/Icon.svg'
import IconDown from '../assets/Icon-2.svg'

interface StatsCardProps {
  value: string
  label: string
  percentage: string
  isPositive?: boolean
  icon?: React.ReactNode
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  value, 
  label, 
  percentage, 
  isPositive = true,
  icon 
}) => {
  return (
    <div className='w-full h-full p-[21.8px] pb-[0.8px] bg-[#1E293B] shadow-[0px_4px_12px_rgba(0,0,0,0.25)] rounded-[10.5px] border border-[#374151] flex flex-col justify-start items-start gap-[21px]'>
      {/* Header with icon and percentage */}
      <div className='self-stretch h-[49px] flex justify-between items-center'>
        {/* Icon container */}
        <div className='w-[49px] h-[49px] bg-[#334155] rounded-[14px] flex justify-center items-center'>
          {icon || (
            <div className='w-[24.5px] h-[24.5px] relative overflow-hidden'>
              {/* Default chart icon */}
              <div className='w-[20.42px] h-[14.29px] absolute left-[2.04px] top-[5.1px] border-2 border-[#51A2FF]' />
              <div className='w-[6.12px] h-[6.12px] absolute left-[9.19px] top-[9.19px] border-2 border-[#51A2FF]' />
            </div>
          )}
        </div>
        
        {/* Percentage indicator */}
        <div className='w-[61.24px] h-[17.5px] flex justify-start items-center gap-[3.5px]'>
          <div className='w-[14px] h-[14px] flex items-center justify-center'>
          {/* Arrow icon */}
          <img 
            src={isPositive ? IconUp : IconDown} 
            alt={isPositive ? 'Aumento' : 'Diminuição'} 
            className='w-[14px] h-[14px]'
          />
        </div>
          <div className='flex-1 h-[17.5px] flex justify-start items-start'>
            <div className={`${isPositive ? 'text-[#22C55E]' : 'text-[#EF4444]'} text-[12.25px] font-inter font-bold leading-[17.5px]`}>
              {percentage}
            </div>
          </div>
        </div>
      </div>
      
      {/* Value and label */}
      <div className='self-stretch h-[59.5px] flex flex-col justify-start items-start gap-[7px]'>
        {/* Main value */}
        <div className='self-stretch h-[35px] relative'>
          <div className='absolute left-0 top-[-3px] text-white text-[31.5px] font-inter font-bold leading-[35px]'>
            {value}
          </div>
        </div>
        
        {/* Label */}
        <div className='self-stretch h-[17.5px] flex justify-start items-start'>
          <div className='flex-1 text-[#94A3B8] text-[12.25px] font-inter font-semibold leading-[17.5px]'>
            {label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsCard