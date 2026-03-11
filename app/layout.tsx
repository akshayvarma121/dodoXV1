import type { Metadata } from "next";
import { ClerkProvider, Show } from "@clerk/nextjs";
import { ui } from "@clerk/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: "DoDoX | Spaces",
  description: "Real-time collaborative spaces for developers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider ui={ui}>
      <html lang="en" className="dark">
        <body className="bg-[#09090b] text-zinc-100 antialiased flex flex-col h-screen overflow-hidden selection:bg-[#ccff00] selection:text-black font-sans">
          
          {/* SLEEKER FLOATING PILL NAVIGATION */}
          <Show when="signed-in">
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]">
              <nav className="flex items-center gap-1 p-1 bg-black/80 backdrop-blur-xl border-2 border-zinc-800 rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
                
                {/* Logo mark */}
                <div className="bg-[#ccff00] text-black font-black italic px-4 py-1.5 rounded-full mr-1 text-sm">
                  DX.
                </div>

                <a href="/" className="px-4 py-1.5 rounded-full text-xs font-bold text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors uppercase tracking-widest">
                  Spaces
                </a>
                <a href="/board" className="px-4 py-1.5 rounded-full text-xs font-bold text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors uppercase tracking-widest">
                  Board
                </a>
                <a href="/editor" className="px-4 py-1.5 rounded-full text-xs font-bold text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors uppercase tracking-widest">
                  Editor
                </a>
              </nav>
            </div>
          </Show>

          {/* MAIN CANVAS */}
          <main className="flex-1 overflow-y-auto relative">
            {children}
          </main>

        </body>
      </html>
    </ClerkProvider>
  );
}