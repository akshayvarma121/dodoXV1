export default function CommandCenter() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0A0A0A] px-4 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Navigation / Telemetry */}
      <nav className="absolute top-0 w-full flex justify-between items-center p-6 border-b border-white/5 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm font-medium tracking-widest text-gray-300">DoDoX_WORKSPACE</span>
        </div>
        <div className="text-xs text-gray-500 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10">
          Unauthenticated
        </div>
      </nav>

      {/* Main Entry Card */}
      <div className="z-10 w-full max-w-md p-8 rounded-2xl bg-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col items-center text-center">
        
        <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
          Enter the War Room
        </h1>
        <p className="text-gray-400 text-sm mb-10 leading-relaxed">
          High-density collaborative workspace for developer squads. Deploy a new instance or sync with your team.
        </p>

        <div className="flex flex-col w-full gap-4">
          <button className="w-full group relative flex items-center justify-center gap-3 bg-white text-black px-6 py-3.5 rounded-lg text-sm font-bold transition-all hover:bg-gray-200">
            Deploy New Squad
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          
          <button className="w-full flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-medium text-gray-300 transition-all border border-white/10 hover:bg-white/5 hover:text-white">
            Join via Invite Code
          </button>
        </div>
      </div>

    </div>
  );
}