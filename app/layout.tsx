import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

export const metadata: Metadata = { title: "Prathibha M. — Software Engineer", description: "Portfolio of Prathibha M., a software engineer focused on backend systems, full-stack applications, and applied AI.", openGraph: { title: "Prathibha M. — Software Engineer", description: "Building thoughtful software. Solving meaningful problems.", type: "website" } }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body><ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}><Navbar />{children}</ThemeProvider></body></html> }
