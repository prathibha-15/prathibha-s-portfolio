"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, Star, Code, BookOpen, CheckCircle } from "lucide-react"

export default function Achievements() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  const certifications = [
    {
      name: "Reinforcement Learning",
      issuer: "NPTEL",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "Machine Learning A-Z",
      issuer: "Udemy",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "Java Programming",
      issuer: "NPTEL",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "Full Stack Development",
      issuer: "Udemy",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "Generative AI",
      issuer: "Linkedin Learning",
      icon: <BookOpen className="h-5 w-5" />,
    },
  ]

  const codingStats = [
    {
      platform: "LeetCode",
      stat: "300+ Problems",
      icon: <Code className="h-5 w-5" />,
    },
    {
      platform: "CodeChef",
      stat: "100+ Problems",
      icon: <Code className="h-5 w-5" />,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-800" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications & Coding</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            My professional certifications and competitive programming achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-bold">Certifications</h3>
                </div>

                <motion.ul variants={container} initial="hidden" animate={isInView ? "show" : ""} className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      variants={item}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="p-2 bg-primary/10 rounded-full mr-3">{cert.icon}</div>
                      <div>
                        <h4 className="font-medium">{cert.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-500 ml-auto" />
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </div>

          {/* Coding Stats */}
          <div>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Trophy className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-bold">Competitive Programming</h3>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {codingStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.2 }}
                      className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center"
                    >
                      <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">{stat.icon}</div>
                      <h4 className="text-lg font-semibold">{stat.platform}</h4>
                      <p className="text-primary font-medium mt-1">{stat.stat}</p>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg p-6 text-center"
                  >
                    <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                      <Star className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-semibold">Consistent Problem Solver</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">300+ Problems Solved Across Platforms</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
