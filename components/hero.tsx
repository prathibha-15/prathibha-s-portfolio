"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Hello, I'm Prathibha M"
  const [showCursor, setShowCursor] = useState(true)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(typingInterval)
        setTimeout(() => {
          setShowSubtitle(true)
        }, 500)
      }
    }, 100)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="parallax">
        <div className="parallax-bg bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl items-center">
            {/* Personal Image - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full animate-pulse"></div>
                <img
                  src="/images/profile.jpg"
                  alt="Prathibha M"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl z-10"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=400&width=400"
                  }}
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-xl animate-float"></div>
              </div>
            </motion.div>

            {/* Terminal and Text Content - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-2xl">
                <div className="terminal mb-8 text-left">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-gray-400 text-sm">terminal</div>
                  </div>
                  <div className="font-mono">
                    <span className="text-gray-400">$ </span>
                    <span className="text-green-400">{text}</span>
                    {showCursor && <span className="terminal-cursor"></span>}
                    {showSubtitle && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      >
                        <p className="text-blue-400 mt-2">AI/ML Enthusiast & Backend Developer</p>
                        <p className="text-purple-400 mt-1">
                          Passionate about building intelligent, data-driven solutions that solve real-world problems.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-10"
          >
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce"
              onClick={handleScrollDown}
              aria-label="Scroll down"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
