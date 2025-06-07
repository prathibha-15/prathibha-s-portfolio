"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Award, Code } from "lucide-react"

export default function Experience() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  const experiences = [
    {
      title: "Intern",
      company: "Cube AI Solutions",
      duration: "Nov 2024 - Feb 2025",
      description: "Worked on AI-powered solutions for business intelligence and data analytics.",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: "Intern",
      company: "Sap Labs,Bangalore",
      duration: "May 2024 - July 2024",
      description: "Worked on developing a vendor comparision chatbot using Small Language Models. ",
      icon: <Briefcase className="h-6 w-6" />,
    }
  ]

  const workshops = [
    {
      title: "Robotics with Reinforcement Learning Workshop",
      organization: "IIT Palakkad,Kerala",
      description:
        "Participated in a hands-on robotics workshop and worked with reinforcemnt learning.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "AR/VR Workshop",
      organization: "PSG Tech,Coimbatore",
      description: "Learned about augmented and virtual reality development using Unity and AR frameworks.",
      icon: <Code className="h-6 w-6" />,
    },
  ]

  const achievements = [
    {
      title: "Finalist",
      event: "IIT Madras Shaastra",
      description: "Reached the finals of the prestigious technical festival's hackathon competition.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Finalist",
      event: "GPTathon",
      description: "Developed an innovative AI solution, a hotel concierge chatbot that was selected as a finalist in the GPTathon competition.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Competitive Programming",
      event: "LeetCode & CodeChef",
      description: "Solved 300+ problems across LeetCode and CodeChef platforms.",
      icon: <Code className="h-6 w-6" />,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Experience & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            My professional journey, workshops, and notable achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-2 h-5 w-5 text-primary" />
              Work Experience
            </h3>
            <motion.div variants={container} initial="hidden" animate={isInView ? "show" : ""} className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">{exp.icon}</div>
                        <div>
                          <h4 className="font-semibold text-lg">{exp.title}</h4>
                          <p className="text-primary">{exp.company}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.duration}</p>
                          <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Workshops */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Code className="mr-2 h-5 w-5 text-primary" />
              Workshops
            </h3>
            <motion.div variants={container} initial="hidden" animate={isInView ? "show" : ""} className="space-y-6">
              {workshops.map((workshop, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">{workshop.icon}</div>
                        <div>
                          <h4 className="font-semibold text-lg">{workshop.title}</h4>
                          <p className="text-primary">{workshop.organization}</p>
                          <p className="text-gray-600 dark:text-gray-300 mt-2">{workshop.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Award className="mr-2 h-5 w-5 text-primary" />
              Achievements
            </h3>
            <motion.div variants={container} initial="hidden" animate={isInView ? "show" : ""} className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">{achievement.icon}</div>
                        <div>
                          <h4 className="font-semibold text-lg">{achievement.title}</h4>
                          <p className="text-primary">{achievement.event}</p>
                          <p className="text-gray-600 dark:text-gray-300 mt-2">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
