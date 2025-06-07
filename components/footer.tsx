"use client"

import { Github, Linkedin, Code, Heart } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/prathibha-15",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/prathibha-m-",
      label: "LinkedIn",
    },
    {
      icon: <Code className="h-5 w-5" />,
      href: "https://leetcode.com/u/22d135/",
      label: "LeetCode",
    },
    {
      icon: <Code className="h-5 w-5" />,
      href: "https://www.codechef.com/users/prathibha15",
      label: "CodeChef",
    },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-2">© 2024 Prathibha M. All rights reserved.</p>
            <p className="text-gray-400 flex items-center justify-center gap-1">
              Made by <Heart className="h-4 w-4 text-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
