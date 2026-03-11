import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

// Using a standard Next.js monospaced font for the IDE look
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DoDoX | Command Center",
  description: "Real-time collaborative workspace for developer squads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistMono.variable} font-mono bg-[#0A0A0A] text-gray-100 antialiased flex h-screen overflow-hidden`}
      >
        {/* SIDEBAR SKELETON: 
          Akshay, this keeps the layout fixed so Vaishnavi's Kanban board 
          and Ajeth's Editor have the exact right amount of screen space.
        */}
        <aside className="w-64 border-r border-gray-800 bg-black flex flex-col p-6 hidden md:flex">
          <div className="text-2xl font-bold text-blue-500 mb-10 tracking-widest">
            DoDoX_
          </div>
          <nav className="flex flex-col gap-6 text-sm text-gray-500">
            <a href="/" className="hover:text-blue-400 transition-colors">&gt; /dashboard</a>
            <a href="/board" className="hover:text-blue-400 transition-colors">&gt; /board</a>
            <a href="/editor" className="hover:text-blue-400 transition-colors">&gt; /editor</a>
          </nav>
        </aside>

        {/* MAIN CONTENT AREA: This is where page.tsx gets injected */}
        <main className="flex-1 flex flex-col h-full relative overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}