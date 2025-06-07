"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  const projects = [
    {
      title: "Yoga Pose Estimation System",
      description:
        "A real-time AI feedback system that uses OpenCV and SVM to analyze yoga poses and provide instant feedback to users. The system detects key body points and compares them with ideal pose references.",
      image: "/images/yoga-pose-project.jpg", // Your actual project image
      tags: ["AI", "OpenCV", "SVM", "Python"],
      date: "Aug–Oct 2024",
      github: "https://github.com/prathibha-15/Yoga-Pose-Estimation-Project",
    },
    {
      title: "Vendor Comparison Chatbot",
      description:
        "Built during my internship at SAP Labs, this chatbot helps users compare vendors based on various parameters. Implemented using ReactJS for the frontend, FastAPI for the backend, and FAISS for efficient similarity search.",
      image: "/images/vendor-chatbot-project.jpg", // Your actual project image
      tags: ["ReactJS", "FastAPI", "FAISS", "NLP"],
      date: "May–July 2024",
      github: "https://github.com/prathibha-15/vendor-comparison-chatbot",
    },
    {
      title: "Movie Recommendation System",
      description:
        "A collaborative filtering-based recommendation system that suggests movies based on user preferences and viewing history. Utilizes the TMDb API for movie data and implements matrix factorization algorithms.",
      image: "/images/movie-recommendation-project.jpg", // Your actual project image
      tags: ["Python", "Collaborative Filtering", "TMDb API"],
      date: "Apr–May 2024",
      github: "https://github.com/prathibha-15/movie-recommendation",
    },
  ]

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  const prevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

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
    <section id="projects" className="py-20 bg-white dark:bg-gray-800" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Explore my latest projects showcasing my skills in AI/ML, full-stack development, and more.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 md:-left-12"
            onClick={prevProject}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden h-full">
                    <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-t-lg">
                      <img
                        src={project.image || "/placeholder.svg?height=400&width=600"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.currentTarget.src = "/placeholder.svg?height=400&width=600"
                        }}
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-2" asChild>
                          <a href="#demo" onClick={(e) => e.preventDefault()}>
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 md:-right-12"
            onClick={nextProject}
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
