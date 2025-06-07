"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, Server, PenToolIcon as Tool, Wrench, GraduationCap, User } from "lucide-react"

export default function About() {
  const [activeTab, setActiveTab] = useState("skills")

  const skills = [
    {
      category: "AI/ML",
      icon: <Brain className="h-6 w-6" />,
      items: ["Deep Learning", "Machine Learning", "Reinforcement Learning", "OpenCV"],
    },
    {
      category: "Programming",
      icon: <Code className="h-6 w-6" />,
      items: ["Python", "C", "C++", "Java", "HTML", "CSS", "JS"],
    },
    {
      category: "Tools",
      icon: <Tool className="h-6 w-6" />,
      items: ["VSCode", "Streamlit", "Android Studio", "Google Colab"],
    },
    {
      category: "Databases",
      icon: <Database className="h-6 w-6" />,
      items: ["PostgreSQL", "MongoDB"],
    },
    {
      category: "Libraries",
      icon: <Wrench className="h-6 w-6" />,
      items: ["TensorFlow", "Scikit-Learn", "FAISS", "BeautifulSoup"],
    },
    {
      category: "DevOps",
      icon: <Tool className="h-6 w-6" />,
      items: ["Git", "GitHub", "Docker"],
    },
    {
      category: "Backend/Web",
      icon: <Server className="h-6 w-6" />,
      items: ["Node.js", "Express.js", "React.js"],
    },
  ]

  const education = [
    {
      degree: "B.Tech AI & DS",
      institution: "PSG Institute Of Technology and Applied Research,Coimbatore",
      duration: "2022 - 2026",
      gpa: "CGPA: 8.51",
    },
    {
      degree: "High School",
      institution: "Sri Vijay Vidyalaya,Krishnagiri",
      duration: "2021 - 2022",
      gpa: "98%",
    },
  ]

  const softSkills = [
    "Public Speaking",
    "Analytical Thinking",
    "Collaboration",
    "Time Management",
    "Attention to Detail",
  ]

  const hobbies = ["Fitness", "Chess", "Cognitive Science", "AI Ethics"]

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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            AI and backend-focused engineering student with hands-on experience in building intelligent systems using Python, FastAPI, and machine learning. Interned at SAP Labs and Cube AI Solutions, with a strong foundation in data-driven development and real-world problem-solving. Passionate about applying AI to create impactful solutions, with 300+ problems solved on LeetCode and a growing project portfolio.
          </p>
        </motion.div>

        <Tabs defaultValue="skills" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="skills" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span className="hidden sm:inline">Skills</span>
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger value="personal" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Personal</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="skills">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills.map((skillGroup, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="h-full card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-primary/10 rounded-full mr-3">{skillGroup.icon}</div>
                        <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                      </div>
                      <ul className="space-y-2">
                        {skillGroup.items.map((skill, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="education">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{edu.degree}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <p className="text-primary font-medium">{edu.duration}</p>
                          <p className="text-gray-600 dark:text-gray-300">{edu.gpa}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <motion.div variants={item}>
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Reinforcement Learning (NPTEL)",
                        "Machine Learning A-Z",
                        "Java (NPTEL)",
                        "Full Stack Development",
                        "Generative AI",
                      ].map((cert, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="personal">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div variants={item}>
                <Card className="h-full card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                    <div className="space-y-3">
                      {softSkills.map((skill, idx) => (
                        <div key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="h-full card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Hobbies & Interests</h3>
                    <div className="space-y-3">
                      {hobbies.map((hobby, idx) => (
                        <div key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {hobby}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
