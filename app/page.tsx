export default function CommandCenter() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-[#0A0A0A] p-6">
      
      {/* Top Telemetry Bar */}
      <div className="absolute top-0 w-full flex justify-between items-center p-4 border-b border-gray-800 text-xs text-gray-500 bg-black/50">
        <span>STATUS: <span className="text-green-500 animate-pulse">ONLINE</span></span>
        <span>AUTH_STATE: UNAUTHENTICATED</span>
      </div>

      {/* Terminal Prompt Card */}
      <div className="max-w-2xl w-full border border-gray-800 bg-[#0c0c0c] p-10 rounded shadow-2xl">
        <h1 className="text-4xl font-bold mb-2 tracking-tighter text-white">
          SYSTEM.INIT <span className="text-blue-500 animate-pulse">_</span>
        </h1>
        <p className="text-gray-400 mb-10 text-sm">
          Authenticate to establish a secure connection. Deploy a new war room or enter an existing squad coordinate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded text-sm font-bold transition-all border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            &gt; DEPLOY_NEW_SQUAD
          </button>
          <button className="flex-1 bg-transparent hover:bg-gray-900 text-gray-300 px-6 py-4 rounded text-sm font-bold transition-all border border-gray-700 hover:border-gray-500">
            &gt; JOIN_VIA_CODE
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-xs text-gray-600 flex justify-between">
          <span>Awaiting user authentication...</span>
          <span>v1.0.0-alpha</span>
        </div>
      </div>
    </div>
  );
}