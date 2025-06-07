"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, Folder, Info, ImageIcon } from "lucide-react"

export default function ImageGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            How to Add Your Images
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Follow these steps to add your personal photo and project images to your portfolio.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Folder className="h-5 w-5" />
              Step 1: Create Image Folders
            </h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <p className="mb-2">Create these folders in your project:</p>
              <pre className="text-sm">
                {`public/
├── images/
│   ├── profile.jpg                    (Your personal photo)
│   ├── yoga-pose-project.jpg          (Yoga project screenshot)
│   ├── vendor-chatbot-project.jpg     (Chatbot project screenshot)
│   └── movie-recommendation-project.jpg (Movie project screenshot)`}
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Step 2: Image Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Personal Photo</h4>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Size: 400x400px (square)</li>
                    <li>• Format: JPG, PNG, or WebP</li>
                    <li>• Professional headshot</li>
                    <li>• Good lighting and quality</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Project Images</h4>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Size: 600x400px (3:2 ratio)</li>
                    <li>• Format: JPG, PNG, or WebP</li>
                    <li>• Screenshots or mockups</li>
                    <li>• Clear and readable</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Step 3: Update Image Paths</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <p className="mb-2">Update these files with your image paths:</p>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Hero Section (components/hero.tsx):</strong>
                  <pre className="mt-1 text-xs bg-gray-200 dark:bg-gray-700 p-2 rounded">
                    {`src="/images/profile.jpg"`}
                  </pre>
                </div>
                <div>
                  <strong>Projects Section (components/projects.tsx):</strong>
                  <pre className="mt-1 text-xs bg-gray-200 dark:bg-gray-700 p-2 rounded">
                    {`image: "/images/yoga-pose-project.jpg"
image: "/images/vendor-chatbot-project.jpg"  
image: "/images/movie-recommendation-project.jpg"`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Step 4: Image Optimization Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">For Personal Photo:</h4>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Use a professional headshot</li>
                  <li>• Ensure good lighting</li>
                  <li>• Crop to square format</li>
                  <li>• Compress for web (under 200KB)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">For Project Images:</h4>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Take clear screenshots</li>
                  <li>• Show key features</li>
                  <li>• Use consistent styling</li>
                  <li>• Compress for web (under 500KB)</li>
                </ul>
              </div>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Pro Tip:</strong> You can use tools like Canva, Figma, or Photoshop to create mockups for your
              projects if you don't have screenshots. This makes your portfolio look more professional!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
