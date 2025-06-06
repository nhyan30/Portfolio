import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FileText, Video } from "lucide-react"
import RotatingText from "./RotatingText.js"
import animationConfig from "../utils/animationConfig.js"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const roles = [
    "AI Engineer",
    "Game Developer",
    "Mobile Developer",
    "Software Engineer",
    "UI/UX Designer",
    "Tech Innovator"
  ]

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: animationConfig.duration.medium }}
      className="apple-section-light py-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="apple-heading text-center mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 flex flex-col items-center justify-center gap-2 text-xl">
            <span className="text-gray-800 font-medium">I am a passionate</span>
            <div className="flex items-center justify-center w-56 h-10 bg-[#0EA5E9] rounded-[12px] px-4 py-1.5">
              <RotatingText
                texts={roles}
                className="font-bold text-white inline-block"
                splitBy="words"
                rotationInterval={2000}
                staggerDuration={0.015}
                elementLevelClassName="font-bold"
              />
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-6 text-center">
          As an Software Engineer and AI Engineer, I bridge cutting-edge AI with real-world impact. My work spans machine learning, game development, and Flutter development, solving challenges in education, urban planning, and user behavior analysis.
          </p>
          <p className="text-lg text-gray-700 mb-6 text-center">
          With expertise in Flutter development, machine learning, deep learning, and LLMs, I've successfully delivered projects ranging from intelligent mobile and web applications to scalable, user-friendly systems in production. My role as a Member of the UOS ACM Student Chapter has further enhanced my community engagement and collaborative innovation.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <motion.a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2X9L4RyA4jlrFHXmfLIsAQ9lnm8AWkDd9XoOslSVUdZ7FTRse8Ti4rf9ICi3l7t7tbZs0JgPvg?gv=true"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-2 border-2 border-[#0EA5E9] text-[#0EA5E9] rounded-full hover:bg-[#0EA5E9] hover:text-white transition-colors"
            >
              <Video className="mr-2" size={18} />
              Schedule a call
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1vYjEm4AxXeeKtEAc9wYOKZnOcB2csov1/view?usp=sharing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              <FileText className="mr-2" size={18} />
              View CV
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About

