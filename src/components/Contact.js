import { motion } from "framer-motion"
import { Linkedin, Github, Instagram, Mail, Calendar } from "lucide-react"

const Contact = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nahyan-nabil/",
      label: "LinkedIn",
      hoverClass: "hover:text-[#0077B5]"
    },
    {
      icon: Github,
      href: "https://github.com/nhyan30",
      label: "GitHub",
      hoverClass: "hover:text-gray-400"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/i.nhx",
      label: "Instagram",
      hoverClass: "hover:text-[#E4405F]"
    },
    {
      icon: Mail,
      href: "mailto:nhyan187@gmail.com",
      label: "Email",
      hoverClass: "hover:text-[#EA4335]"
    },
    {
      icon: Calendar,
      href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2X9L4RyA4jlrFHXmfLIsAQ9lnm8AWkDd9XoOslSVUdZ7FTRse8Ti4rf9ICi3l7t7tbZs0JgPvg?gv=true",
      label: "Schedule a Call",
      hoverClass: "hover:text-[#4285F4]"
    }
  ]

  return (
    <footer id="contact" className="apple-section-dark py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Let's Connect</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
          
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-all duration-300 hover:scale-110 ${link.hoverClass}`}
                whileHover={{ y: -2 }}
                aria-label={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>

          <div className="text-gray-500 text-sm mt-8">
            <p>© {new Date().getFullYear()} Nahyan Nabil. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Contact
