import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserSection from './UserSection'

interface SidebarProps {
  currentPage: 'dashboard' | 'file-manager' | 'reports'
  userName: string
  userEmail: string
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, userName, userEmail }) => {
  const navigate = useNavigate()

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      path: '/dashboard',
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'/>
        </svg>
      )
    },
    {
      id: 'file-manager',
      label: 'Gerenciador de Arquivos',
      path: '/file-manager',
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z'/>
        </svg>
      )
    },
    {
      id: 'reports',
      label: 'Relatórios',
      path: '/reports',
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z'/>
        </svg>
      )
    }
  ]

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  return (
    <div className='bg-[#1E293B] h-screen w-64 flex flex-col border-r border-[#374151] sticky top-0'>
      {/* User Section */}
      <UserSection name={userName} email={userEmail} />

      {/* Navigation */}
      <nav className='px-6 py-6'>
        <ul className='space-y-4'>
          {menuItems.map((item) => {
            const isActive = currentPage === item.id
            
            return (
              <li key={item.id}>
                {isActive ? (
                  <div className='flex items-center gap-3 p-3 rounded-lg bg-[#1E293B] border-l-4 border-[#155DFC]'>
                    <div className='text-white'>
                      {item.icon}
                    </div>
                    <span className='text-white text-xs font-semibold'>{item.label}</span>
                  </div>
                ) : (
                  <button 
                    onClick={() => handleNavigation(item.path)}
                    className='flex items-center gap-3 p-3 rounded-lg hover:bg-[#334155] transition-colors duration-200 group w-full text-left'
                  >
                    <div className='text-[#94A3B8] group-hover:text-white transition-colors duration-200'>
                      {item.icon}
                    </div>
                    <span className='text-[#94A3B8] text-xs group-hover:text-white transition-colors duration-200'>{item.label}</span>
                  </button>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar