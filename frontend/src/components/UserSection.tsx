import React from 'react'
import fotoOficial from "../assets/FotoOficial.jpeg"

interface UserSectionProps {
  name: string
  email: string
  photoSrc?: string
}

const UserSection: React.FC<UserSectionProps> = ({ 
  name, 
  email, 
  photoSrc = fotoOficial 
}) => {
  return (
    <section className='flex items-center gap-4 p-7 border-b border-[#374151] w-full bg-[#1E293B]'>
      <img 
        src={photoSrc} 
        alt={`Foto do ${name}`} 
        className='w-16 h-16 rounded-full object-cover border-2 border-[#155DFC] flex-shrink-0' 
      />
      
      <div className='min-w-0 flex-1'>
        <h2 className='text-white text-xl text-inter font-bold truncate'>{name}</h2>
        <p className='text-[#94A3B8] text-sm text-inter truncate' title={email}>{email}</p>
      </div>
    </section>
  )
}

export default UserSection