"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react"

const profileImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-09%20at%208.34.51%20PM-JxVSCgIZZY5pipwwerqdEi8S1BSztt.jpeg"

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12">
      <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow mb-8">Software Engineer <span>·</span> India</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="display-title max-w-4xl">Building thoughtful software.<br /><em>Solving meaningful problems.</em></motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-10 max-w-xl">
            <p className="mb-2 font-serif text-2xl text-foreground">Prathibha M.</p>
            <p className="max-w-md text-base leading-7 text-muted-foreground">Software engineer focused on backend systems, full-stack applications, and applied AI. I turn complex ideas into practical, reliable software.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a className="button-gold" href="#projects">Explore my work <ArrowUpRight data-icon="inline-end" /></a><a className="button-quiet" href="/Prathibha_M_Resume.pdf" download="Prathibha_M_Resume.pdf">Download resume <Download data-icon="inline-end" /></a></div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="profile-stage">
          <div className="profile-glow" aria-hidden="true" />
          <div className="profile-card">
            <img src={profileImage} alt="Prathibha standing by the ocean" />
            <div className="profile-caption"><Sparkles data-icon="inline-start" /> beyond the code</div>
          </div>
          <p className="profile-note">Curious mind<br />intentional builder</p>
        </motion.div>
        <div className="col-span-full flex flex-wrap items-center justify-between gap-6 border-t border-border/70 pt-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"><span>B.Tech AI &amp; Data Science · Class of 2026</span><span>PSG Institute of Technology &amp; Applied Research</span><span>500+ LeetCode problems solved</span></div>
      </div>
      <a href="#about" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:flex">Scroll to explore <ArrowDown className="size-3" /></a>
    </section>
  )
}

// Resume PDF can be added at public/Prathibha_M_Resume.pdf when available.
