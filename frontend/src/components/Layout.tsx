import React from 'react'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
  currentPage: 'dashboard' | 'file-manager' | 'reports'
  userName?: string
  userEmail?: string
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentPage, 
  userName = "Fabiano", 
  userEmail = "fabianoquirinos@outlook.com" 
}) => {
  return (
    <div className='bg-[#0F172A] min-h-screen grid grid-cols-[auto_1fr]'>
      <Sidebar 
        currentPage={currentPage}
        userName={userName}
        userEmail={userEmail}
      />
      
      <div className='flex flex-col bg-[#0F172A] min-h-screen'>
        {children}
      </div>
    </div>
  )
}

export default Layout