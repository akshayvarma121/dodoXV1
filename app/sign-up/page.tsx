import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="w-full min-h-screen bg-[#09090b] relative overflow-hidden flex flex-col items-center justify-center font-sans selection:bg-[#ccff00] selection:text-black">
      
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl p-6 gap-8 mt-10">
        
        {/* Left Side: Scaled-down Typography */}
        <div className="flex-1 text-left hidden md:block pl-4">
          <h1 className="text-6xl md:text-7xl leading-[0.9] font-black tracking-tighter text-white uppercase mb-4">
            Join the<br />Squad<br /><span className="text-[#ccff00]">ASAP.</span>
          </h1>
          <p className="text-zinc-400 font-bold tracking-widest uppercase text-sm mb-6">
            Create your profile. Start building cool sh*t.
          </p>
          <div className="flex gap-3">
            <span className="bg-[#ccff00] text-black font-bold uppercase text-[10px] px-2 py-1 border-2 border-black">New_User</span>
            <span className="bg-[#18181b] text-white font-bold uppercase text-[10px] px-2 py-1 border-2 border-zinc-800">Secure_Sign_Up</span>
          </div>
        </div>
        
        {/* Right Side: The Sign Up Block */}
        <div className="w-full max-w-sm">
          <SignUp 
            routing="hash" 
            appearance={{ 
              variables: {
                colorBackground: '#000000',
                colorPrimary: '#ccff00', 
                borderRadius: '0px', 
              },
              elements: {
                card: "!border-2 !border-zinc-800 !shadow-[6px_6px_0px_#ccff00] !bg-black p-6 m-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                
                // Social Buttons
                socialButtonsBlockButton: "!bg-[#18181b] !border-2 !border-zinc-800 hover:!border-[#ccff00] hover:!bg-black transition-all mb-4",
                socialButtonsBlockButtonText: "!text-white font-bold uppercase tracking-widest text-xs",
                
                // Main Button
                formButtonPrimary: "!bg-[#ccff00] !text-black !border-2 !border-black font-black uppercase hover:!bg-white transition-colors py-3 text-sm !shadow-[3px_3px_0px_#000] hover:!shadow-none hover:translate-y-[1px] hover:translate-x-[1px] mt-2",
                
                // Input Boxes
                formFieldInput: "!bg-[#18181b] !text-white !border-2 !border-zinc-800 focus:!border-[#ccff00] focus:!ring-0 py-3 rounded-none transition-colors",
                formFieldLabel: "!text-zinc-400 font-bold uppercase text-[10px] tracking-widest",
                
                // Footer
                footerActionText: "!text-zinc-500 font-bold text-xs",
                footerActionLink: "!text-white hover:!text-[#ccff00] font-black uppercase tracking-widest text-xs",
                dividerText: "!text-zinc-600 font-bold text-xs",
                dividerLine: "!bg-zinc-800"
              }
            }} 
          />
        </div>
      </div>
    </div>
  );
}