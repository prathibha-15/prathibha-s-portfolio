"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const links = [{ label: "About", href: "#about" }, { label: "Work", href: "#projects" }, { label: "Journey", href: "#experience" }, { label: "Contact", href: "#contact" }]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll) }, [])
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-xl" : "bg-transparent"}`}><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"><Link href="#home" className="font-serif text-xl tracking-tight">P<span className="text-accent">.</span>M</Link><nav className="hidden items-center gap-9 md:flex">{links.map((link, i) => <Link key={link.href} href={link.href} className="nav-link"><span>0{i + 1}</span>{link.label}</Link>)}</nav><button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button></div>{open && <nav className="border-t border-border/70 bg-background px-5 py-6 md:hidden">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-border/50 py-4 text-sm uppercase tracking-[0.18em]">{link.label}</Link>)}</nav>}</header>
}
