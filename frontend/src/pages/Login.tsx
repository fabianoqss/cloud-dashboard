import googleDrive from "../assets/icons8-google-drive.svg"
import oneDrive from "../assets/icons8-onedrive.svg"

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Main card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Cloud Dashboard
            </h1>
            <p className="text-gray-400 text-sm">
              Conecte-se à sua nuvem preferida
            </p>
          </div>

          {/* Connection buttons */}
          <div className="space-y-4">
            {/* Google Drive Button */}
            <button
              className="w-full group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
              onClick={() => window.location.href = "http://localhost:8080/auth/google"}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-lg p-1.5 flex items-center justify-center">
                  <img src={googleDrive} alt="Google Drive" className="w-full h-full" />
                </div>
                <span className="font-semibold">Conectar com Google Drive</span>
              </div>
            </button>

            {/* OneDrive Button */}
            <button
              className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
              onClick={() => window.location.href = "http://localhost:8080/auth/onedrive"}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-lg p-1.5 flex items-center justify-center">
                  <img src={oneDrive} alt="OneDrive" className="w-full h-full object-contain" />
                </div>
                <span className="font-semibold">Conectar com OneDrive</span>
              </div>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-center text-gray-400 text-xs">
              Seus dados estão seguros e protegidos
            </p>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Escolha seu provedor de nuvem para começar
          </p>
        </div>
      </div>
    </div>
  )
}