'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PenLine, Calendar, BarChart3, ChevronDown, Sparkles, ArrowRight, KeyRound, Wand2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ContentSuite() {
  return (
    <div className="bg-[#070314] min-h-screen flex flex-col">
     
      {/* Hero Section */}
      <section className="flex items-center justify-center relative overflow-hidden">
        

        {/* Main Content */}
        <div className="container mx-auto px-4  relative max-w-7xl">
             {/* Navigation */}
      <nav className="container  mx-auto px-4 py-4 text-sm text-gray-400 relative z-20">
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-white transition-colors">Use Cases</a>
          <span>›</span>
          <a href="#" className="hover:text-white transition-colors">Architecture Diagrams</a>
        </div>
      </nav>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 xl:w-5/12 mb-8 lg:mb-0">
              {/* Top Icons */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-purple-600/20 flex items-center justify-center"
                >
                  <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="px-3 py-1 md:px-4 md:py-2 rounded-lg bg-purple-600/20 text-purple-400 text-xs md:text-sm font-medium"
                >
                  AI Powered
                </motion.div>
              </div>

              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
              >
                Content Suite{" "}
                <span className="bg-purple-500/20 px-2 py-1 md:px-4 md:py-1 rounded-lg text-purple-300">
                  for modern teams
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8"
              >
                Experience next-level content management. Our all-in-one platform empowers you to work smarter, not harder.
              </motion.p>

              {/* Feature List */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 md:space-y-4 mb-6 md:mb-8"
              >
                {[
                  { icon: PenLine, text: "Write content for all Socials from one place" },
                  { icon: Sparkles, text: "Get intelligent content suggestions as you type" },
                  { icon: KeyRound, text: "Generate full articles from keywords" },
                  { icon: Wand2, text: "Instantly improve your content with AI editing" }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-purple-400" />
                    <span className="text-sm md:text-base">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                >
                  Watch Demo
                </Button>
              </motion.div>
            </div>

            {/* Right Interface */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-1/2 xl:w-8/12"
            >
              {/* Main Content Area with Mac Interface */}
          <div className="bg-black/30 rounded-lg border border-white/10 overflow-hidden">
            {/* Mac Window Header */}
            <div className="flex items-center px-4 py-2 bg-[#1A1A1A] border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center text-sm text-gray-400">Content Suite</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left Sidebar */}
              <div className="hidden md:block md:col-span-4 border-b md:border-b-0 md:border-r border-white/10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-4 space-y-2"
                >
                  <div className="p-3 rounded-lg bg-purple-500/20 cursor-pointer">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        <PenLine className="h-5 w-5" />
                        <span>Content Creation</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                    <div className="flex items-center justify-between text-white/70">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5" />
                        <span>Scheduling Content</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                    <div className="flex items-center justify-between text-white/70">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="h-5 w-5" />
                        <span>AI Analytics</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Main Panel */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-8 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">Content Creation</h3>
                </div>
                
                {/* Content Creation Interface */}
                <div className="bg-black rounded-lg border border-white/10 p-4">
                  <div className="space-y-4">
                    {/* Skeleton UI for editor */}
                    <div className="h-8 bg-white/5 rounded animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-4 bg-white/5 rounded w-3/4 animate-pulse" />
                      <div className="h-4 bg-white/5 rounded w-1/2 animate-pulse" />
                      <div className="h-4 bg-white/5 rounded w-2/3 animate-pulse" />
                    </div>
                    
                    {/* AI Suggestions Panel */}
                    <div className="mt-6 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-4 w-4 text-purple-400" />
                        <span className="text-sm text-purple-300">AI Suggestions</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-purple-500/20 rounded w-full animate-pulse" />
                        <div className="h-3 bg-purple-500/20 rounded w-4/5 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preview Panel */}
                <div className="mt-4 p-4 bg-black/50 rounded-lg border border-white/10">
                  <div className="text-sm text-gray-400 mb-2">Preview</div>
                  <div className="h-32 bg-white/5 rounded-lg animate-pulse" />
                </div>
              </motion.div>
            </div>
          </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}