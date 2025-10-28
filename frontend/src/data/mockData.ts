import type { FileData, CloudService, StatsData, ChartData } from '../types'
import googleDrive from "../assets/icons8-google-drive.svg"
import oneDrive from "../assets/icons8-onedrive.svg"

// Mock user data
export const mockUser = {
  name: "Fabiano",
  email: "fabianoquirinos@outlook.com"
}

// Mock files data
export const mockFiles: FileData[] = [
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

// Mock cloud services
export const mockCloudServices: CloudService[] = [
  {
    name: "Google Drive",
    icon: googleDrive,
    connected: true
  },
  {
    name: "OneDrive",
    icon: oneDrive,
    connected: true
  }
]

// Mock stats data
export const mockStatsData: StatsData[] = [
  {
    value: "15 GB",
    label: "Espaço Total",
    percentage: "+12.5%",
    isPositive: true
  },
  {
    value: "8 GB",
    label: "Espaço Usado",
    percentage: "+8.2%",
    isPositive: true
  },
  {
    value: "243",
    label: "Arquivos Totais",
    percentage: "-0.5%",
    isPositive: false
  },
  {
    value: "156ms",
    label: "Latência Média",
    percentage: "-2.1%",
    isPositive: true
  }
]

// Mock chart data
export const mockChartData: ChartData[] = [
  { name: 'Jan', googleDrive: 4000, oneDrive: 2400 },
  { name: 'Fev', googleDrive: 3000, oneDrive: 1398 },
  { name: 'Mar', googleDrive: 2000, oneDrive: 9800 },
  { name: 'Abr', googleDrive: 2780, oneDrive: 3908 },
  { name: 'Mai', googleDrive: 1890, oneDrive: 4800 },
  { name: 'Jun', googleDrive: 2390, oneDrive: 3800 }
]