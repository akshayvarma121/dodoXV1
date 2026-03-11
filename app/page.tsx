import { Show, SignIn, UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-[#09090b] relative overflow-hidden flex flex-col items-center justify-center font-sans selection:bg-[#ccff00] selection:text-black">
      
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none"></div>

      {/* ==================================================== */}
      {/* VIEW 1: UNAUTHENTICATED (REFINED ENTRY)              */}
      {/* ==================================================== */}
      <Show when="signed-out">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl p-6 gap-8 mt-10">
          
          {/* Left Side: Scaled-down Typography */}
          <div className="flex-1 text-left hidden md:block pl-4">
            <h1 className="text-6xl md:text-7xl leading-[0.9] font-black tracking-tighter text-white uppercase mb-4">
              Build<br />Cool<br /><span className="text-[#ccff00]">Sh*t.</span>
            </h1>
            <p className="text-zinc-400 font-bold tracking-widest uppercase text-sm mb-6">
              Real-time collaboration for dev squads.
            </p>
            <div className="flex gap-3">
              <span className="bg-white text-black font-bold uppercase text-[10px] px-2 py-1 border-2 border-black shadow-[2px_2px_0px_#ccff00]">v1.0.0</span>
              <span className="bg-[#18181b] text-white font-bold uppercase text-[10px] px-2 py-1 border-2 border-zinc-800">Secure_Env</span>
            </div>
          </div>
          
          {/* Right Side: The Login Block */}
          <div className="w-full max-w-sm">
            <SignIn 
              routing="hash" 
              signUpUrl="/sign-up"
              appearance={{ 
                variables: {
                  colorBackground: '#000000',
                  colorPrimary: '#ccff00', 
                  borderRadius: '0px', 
                  // colorText removed entirely!
                },
                elements: {
                  card: "!border-2 !border-zinc-800 !shadow-[6px_6px_0px_#ccff00] !bg-black p-6 m-0",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  
                  // Social Buttons
                  socialButtonsBlockButton: "!bg-[#18181b] !border-2 !border-zinc-800 hover:!border-[#ccff00] hover:!bg-black transition-all mb-4",
                  socialButtonsBlockButtonText: "!text-white font-bold uppercase tracking-widest text-xs",
                  
                  // Main Continue Button
                  formButtonPrimary: "!bg-[#ccff00] !text-black !border-2 !border-black font-black uppercase hover:!bg-white transition-colors py-3 text-sm !shadow-[3px_3px_0px_#000] hover:!shadow-none hover:translate-y-[1px] hover:translate-x-[1px] mt-2",
                  
                  // Email Input Box
                  formFieldInput: "!bg-[#18181b] !text-white !border-2 !border-zinc-800 focus:!border-[#ccff00] focus:!ring-0 py-3 rounded-none transition-colors",
                  formFieldLabel: "!text-zinc-400 font-bold uppercase text-[10px] tracking-widest",
                  
                  // Footer Links
                  footerActionText: "!text-zinc-500 font-bold text-xs",
                  footerActionLink: "!text-white hover:!text-[#ccff00] font-black uppercase tracking-widest text-xs",
                  dividerText: "!text-zinc-600 font-bold text-xs",
                  dividerLine: "!bg-zinc-800"
                }
              }} 
            />
          </div>
        </div>
      </Show>

      {/* ==================================================== */}
      {/* VIEW 2: AUTHENTICATED (THE DASHBOARD)                */}
      {/* ==================================================== */}
      <Show when="signed-in">
        
        {/* Profile Button anchored to top right */}
        <div className="absolute top-6 right-6 z-[100] border-2 border-zinc-700 bg-black p-1 shadow-[4px_4px_0px_#ccff00] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#ccff00] transition-all">
          <UserButton appearance={{ elements: { avatarBox: "w-8 h-8 rounded-none" } }} />
        </div>

        <div className="z-10 w-full h-full flex flex-col items-center justify-center p-6 pt-24">
          <div className="w-full max-w-4xl">
            
            <div className="mb-10 border-l-4 border-[#ccff00] pl-5">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white">
                Workspace Setup
              </h2>
              <p className="text-zinc-400 font-bold mt-1 uppercase tracking-widest text-xs">
                Select your entry vector
              </p>
            </div>

            {/* Asymmetrical Grid layout (Toned Down) */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              
              {/* CREATE BLOCK */}
              <div className="md:col-span-2 group relative border-2 border-zinc-800 hover:border-white bg-black flex flex-col overflow-hidden transition-colors">
                
                <div className="w-full bg-[#ccff00] p-2 flex justify-between items-center border-b-2 border-zinc-800">
                  <span className="text-black font-black uppercase text-[10px] tracking-widest">ID: {Math.random().toString(36).substring(2, 8).toUpperCase()}</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-black"></div>
                    <div className="w-2 h-2 bg-black"></div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="text-3xl font-black text-white leading-tight tracking-tighter uppercase mb-3">
                      New<br />Space
                    </h3>
                    <p className="text-zinc-400 font-bold text-xs uppercase tracking-wider mb-8 leading-relaxed">
                      Initialize a blank canvas. Drop the invite hash to your squad.
                    </p>
                  </div>
                  
                  <button className="w-full bg-white text-black font-black uppercase text-sm py-3 border-2 border-black hover:border-white hover:bg-black hover:text-[#ccff00] transition-colors flex items-center justify-between px-5">
                    <span>Generate</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* JOIN BLOCK */}
              <div className="md:col-span-3 group relative border-2 border-[#00ffff] bg-black p-6 flex flex-col justify-between shadow-[6px_6px_0px_#00ffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#00ffff] transition-all">
                
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-4xl font-black text-[#00ffff] leading-none tracking-tighter uppercase">
                    Join<br />Squad
                  </h3>
                  <div className="hidden sm:block border-2 border-[#00ffff] p-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-8 flex gap-1">
                      <div className="w-1 h-full bg-[#00ffff]"></div>
                      <div className="w-1.5 h-full bg-[#00ffff]"></div>
                      <div className="w-0.5 h-full bg-[#00ffff]"></div>
                      <div className="w-2 h-full bg-[#00ffff]"></div>
                      <div className="w-1 h-full bg-[#00ffff]"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <label className="text-[#00ffff] font-bold uppercase text-[10px] tracking-widest mb-2 block">
                    &gt; INPUT SQUAD HASH
                  </label>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="text" 
                      placeholder="XXXXXX" 
                      maxLength={6}
                      className="flex-1 bg-zinc-900 border-2 border-zinc-800 text-[#00ffff] px-4 py-3 text-xl font-black uppercase tracking-[0.2em] focus:outline-none focus:border-[#00ffff] focus:bg-black transition-colors placeholder:text-zinc-700 rounded-none"
                    />
                    <button className="bg-[#00ffff] text-black border-2 border-[#00ffff] px-8 py-3 text-sm font-black uppercase hover:bg-black hover:text-[#00ffff] transition-colors whitespace-nowrap">
                      Link Up
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </Show>

    </div>
  );
}