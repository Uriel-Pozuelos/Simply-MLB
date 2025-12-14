import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/Theme-provider";
import { Header } from "@/components/layout/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simply Mlbb ",
  description: "Una página que muestra de manera simple el uso de items, heroes y actualizaciones de Mobile Legends: Bang Bang.",
};

export default function RootLayout({ children} : { children: React.ReactNode}){
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={ cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>

            <div className="flex flex-col min-h-screen">

              {/* Navbar */}
              <Header/>
            
              {/* Contenido */}
              <main className="flex-1 container mx-auto px-4 py-4 ">
                {children}
              </main>

              {/* Footer */}
              <footer className="border-t bg-card px-6 py-4 text-center text-sm text-muted-foreground">
                @{new Date().getFullYear()} Simply MLBB. Todos los derechos reservados.
              </footer>

            </div>

        </ThemeProvider>
      </body>
    </html>
  );
}

