// User types
export interface User {
  name: string
  email: string
  photoSrc?: string
}

// File types
export interface FileData {
  id: number
  name: string
  size: string
  modified: string
  cloud: string
  cloudIcon: string
}

// Cloud service types
export interface CloudService {
  name: string
  icon: string
  connected: boolean
}

// Stats types
export interface StatsData {
  value: string
  label: string
  percentage: string
  isPositive: boolean
}

// Chart data types
export interface ChartData {
  name: string
  googleDrive: number
  oneDrive: number
}

// Navigation types
export type PageType = 'dashboard' | 'file-manager' | 'reports'