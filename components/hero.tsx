"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12">
      <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow mb-8">Software Engineer <span>·</span> India</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="display-title max-w-4xl">Building thoughtful software.<br /><em>Solving meaningful problems.</em></motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-10 max-w-xl">
            <p className="mb-2 font-serif text-2xl text-foreground">Prathibha M.</p>
            <p className="max-w-md text-base leading-7 text-muted-foreground">Software engineer focused on backend systems, full-stack applications, and applied AI. I turn complex ideas into practical, reliable software.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a className="button-gold" href="#projects">Explore my work <ArrowUpRight data-icon="inline-end" /></a><a className="button-quiet" href="/Prathibha_M_Resume.pdf" download="Prathibha_M_Resume.pdf">Download resume <Download data-icon="inline-end" /></a></div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="hidden lg:block">
          <p className="mb-4 text-right font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">A quiet interface for<br />loud engineering ideas</p>
          <div className="technical-mark"><div className="mark-core">PM<span>01</span></div><div className="mark-line line-a" /><div className="mark-line line-b" /><div className="mark-label label-a">systems / 2026</div><div className="mark-label label-b">build with intent</div></div>
        </motion.div>
        <div className="col-span-full flex flex-wrap items-center justify-between gap-6 border-t border-border/70 pt-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"><span>B.Tech AI &amp; Data Science · Class of 2026</span><span>PSG Institute of Technology &amp; Applied Research</span><span>500+ LeetCode problems solved</span></div>
      </div>
      <a href="#about" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:flex">Scroll to explore <ArrowDown className="size-3" /></a>
    </section>
  )
}
// Resume PDF can be added at public/Prathibha_M_Resume.pdf when available.
