"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Info, CheckCircle } from "lucide-react"

export default function DemoSetupGuide() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            How to Set Up Live Demos for Your Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Choose the best demo option for each project based on its technology stack and complexity.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="web-apps" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="web-apps">Web Apps</TabsTrigger>
              <TabsTrigger value="streamlit">Streamlit</TabsTrigger>
              <TabsTrigger value="video-demos">Video Demos</TabsTrigger>
              <TabsTrigger value="github-pages">GitHub Pages</TabsTrigger>
            </TabsList>

            <TabsContent value="web-apps" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Deploy Web Applications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Best for: React/Next.js Projects</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Perfect for your Vendor Comparison Chatbot and Hotel AI Concierge
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Option 1: Vercel (Recommended)</h5>
                      <ol className="text-sm space-y-1 list-decimal list-inside">
                        <li>Push your project to GitHub</li>
                        <li>
                          Go to{" "}
                          <a href="https://vercel.com" className="text-primary hover:underline">
                            vercel.com
                          </a>
                        </li>
                        <li>Connect your GitHub account</li>
                        <li>Import your project repository</li>
                        <li>Deploy with one click</li>
                        <li>Get your live URL (e.g., your-project.vercel.app)</li>
                      </ol>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Option 2: Netlify</h5>
                      <ol className="text-sm space-y-1 list-decimal list-inside">
                        <li>
                          Go to{" "}
                          <a href="https://netlify.com" className="text-primary hover:underline">
                            netlify.com
                          </a>
                        </li>
                        <li>Drag and drop your build folder</li>
                        <li>Or connect to GitHub for automatic deployments</li>
                        <li>Get your live URL (e.g., your-project.netlify.app)</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="streamlit" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Streamlit Apps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Best for: Python ML Projects</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Perfect for your Movie Recommendation System and Yoga Pose Estimation
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Streamlit Cloud Deployment</h5>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>Convert your project to a Streamlit app</li>
                      <li>Add requirements.txt with dependencies</li>
                      <li>Push to GitHub</li>
                      <li>
                        Go to{" "}
                        <a href="https://share.streamlit.io" className="text-primary hover:underline">
                          share.streamlit.io
                        </a>
                      </li>
                      <li>Connect your GitHub repository</li>
                      <li>Deploy and get URL (e.g., your-app.streamlit.app)</li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Sample Streamlit App Structure:</h5>
                    <pre className="text-xs bg-gray-200 dark:bg-gray-700 p-2 rounded overflow-x-auto">
                      {`app.py
requirements.txt
README.md

# app.py example:
import streamlit as st
import your_model

st.title("Your Project Name")
# Your app code here`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="video-demos" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Video Demonstrations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Best for: Complex or Local Applications</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Great for projects that can't be easily deployed online
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Recording Tools</h5>
                      <ul className="text-sm space-y-1">
                        <li>• OBS Studio (Free)</li>
                        <li>• Loom (Easy to use)</li>
                        <li>• Screen recording built into OS</li>
                        <li>• Camtasia (Professional)</li>
                      </ul>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Upload Platforms</h5>
                      <ul className="text-sm space-y-1">
                        <li>• YouTube (Public/Unlisted)</li>
                        <li>• Vimeo</li>
                        <li>• Google Drive</li>
                        <li>• Loom (Direct sharing)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Video Demo Best Practices:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Keep it under 3-5 minutes</li>
                      <li>• Show key features clearly</li>
                      <li>• Include audio narration</li>
                      <li>• Start with a brief overview</li>
                      <li>• End with results/impact</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="github-pages" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">GitHub Pages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Best for: Static Sites & Documentation</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Free hosting directly from your GitHub repository
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Setup Steps:</h5>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>Go to your GitHub repository</li>
                      <li>Click Settings → Pages</li>
                      <li>Select source branch (usually main)</li>
                      <li>Choose folder (/ root or /docs)</li>
                      <li>Save and get your URL (username.github.io/repo-name)</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Project-Specific Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-medium">Yoga Pose Estimation</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    → Streamlit app or Video demo (if using webcam)
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-medium">Vendor Chatbot</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">→ Vercel/Netlify deployment</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-medium">Hotel Concierge</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">→ Video demo or Vercel deployment</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-medium">Movie Recommender</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">→ Streamlit Cloud deployment</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}
