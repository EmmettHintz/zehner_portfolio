"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Linkedin, Download, MapPin, Phone, ExternalLink, Book, Briefcase, GraduationCap, Award, User, Coffee, Image as ImageIcon, Leaf, ChevronDown, Menu } from "lucide-react"
import Image from "next/image"
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader, 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar"

const AnimatedCard = motion(Card)

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const pulseVariant: Variants = {
  hover: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("all")

  const filterSections = (section: string) => {
    if (activeSection === "all") return true
    return section === activeSection
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gradient-to-br from-[#f2e9de] to-[#e0d8cc] text-[#4a4737]">
        <Sidebar className="bg-[#d5c4a1] border-r border-[#a89984]">
          <SidebarHeader className="p-4 bg-[#6a8759] text-white">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" className="w-full justify-between hover:bg-[#7c9a6b] transition-colors duration-200">
                  <span className="font-semibold">Benjamin H. Zehner</span>
                  <ChevronDown className="h-4 w-4" />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="px-4 py-3 text-[#4a4737] font-semibold text-lg">Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {["all", "education", "experience", "skills"].map((section) => (
                    <SidebarMenuItem key={section}>
                      <SidebarMenuButton
                        onClick={() => setActiveSection(section)}
                        isActive={activeSection === section}
                        className={`w-full justify-start px-4 py-3 transition-colors duration-200 text-lg ${
                          activeSection === section ? "bg-[#6a8759] text-white" : "hover:bg-[#e0d8cc] text-[#4a4737]"
                        }`}
                      >
                        {section === "all" ? "Overview" : section.charAt(0).toUpperCase() + section.slice(1)}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="p-4 border-t border-[#a89984]">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/Ben_Zehner_Resume.pdf" download className="flex items-center w-full px-4 py-3 bg-[#6a8759] text-white rounded hover:bg-[#7c9a6b] transition-colors duration-200 text-lg">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="flex-1 overflow-hidden">
          <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-[#f2e9de] px-4 border-b border-[#a89984] w-full">
            <SidebarTrigger />
            <h1 className="text-2xl font-bold text-[#6a8759]">Portfolio</h1>
          </header>
          <main className="flex-1 overflow-auto p-4 md:p-8">
            <motion.div 
              className="max-w-7xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <motion.header 
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                variants={fadeInVariant}
              >
                <div className="md:col-span-2">
                  <h1 className="text-4xl md:text-5xl font-bold text-[#6a8759] mb-4 relative">
                    Benjamin Holmes Zehner
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-1 bg-[#6a8759]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    />
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#6c7a89]">
                    <motion.div className="flex items-center" initial={{ scale: 1 }} animate={{ scale: 1 }} variants={pulseVariant} whileHover="hover">
                      <Phone className="w-4 h-4 mr-2" />
                      (360)-472-9458
                    </motion.div>
                    <motion.div className="flex items-center" initial={{ scale: 1 }} animate={{ scale: 1 }} variants={pulseVariant} whileHover="hover">
                      <Mail className="w-4 h-4 mr-2" />
                      bzehner@colgate.edu
                    </motion.div>
                    <motion.div className="flex items-center" initial={{ scale: 1 }} animate={{ scale: 1 }} variants={pulseVariant} whileHover="hover">
                      <Linkedin className="w-4 h-4 mr-2" />
                      www.linkedin.com/in/ben-zehner
                    </motion.div>
                    <motion.div className="flex items-center" initial={{ scale: 1 }} animate={{ scale: 1 }} variants={pulseVariant} whileHover="hover">
                      <MapPin className="w-4 h-4 mr-2" />
                      Friday Harbor, WA
                    </motion.div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start md:items-end space-y-2">
                  <Button variant="outline" className="w-full md:w-auto bg-[#e0d8cc] text-[#4a4737] border-[#a89984] hover:bg-[#d5c4a1] transition-all duration-300 ease-in-out transform hover:scale-105">
                    <a href="https://www.linkedin.com/in/ben-zehner" className="flex items-center">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full md:w-auto bg-[#e0d8cc] text-[#4a4737] border-[#a89984] hover:bg-[#d5c4a1] transition-all duration-300 ease-in-out transform hover:scale-105">
                    <a href="mailto:bzehner@colgate.edu" className="flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </Button>
                </div>
              </motion.header>

              <AnimatePresence mode="wait">
                {filterSections("education") && (
                  <motion.div
                    key="education"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeInVariant}
                  >
                    <AnimatedCard className="bg-[#e0d8cc] border-none shadow-lg hover:shadow-xl transition-all duration-300 mb-6">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-semibold text-[#6a8759] flex items-center">
                          <GraduationCap className="mr-2 h-6 w-6" />
                          Education
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <motion.div className="flex items-start" initial={{ scale: 1 }} animate={{ scale: 1 }} variants={pulseVariant} whileHover="hover">
                            <div className="flex-grow">
                              <h3 className="text-xl font-semibold text-[#7c6f64]">Colgate University, Hamilton, NY</h3>
                              <p className="text-[#4a4737]">Bachelor of Arts | Major: English; Minor: Biology</p>
                              <p className="text-[#4a4737]">Expected Graduation: May 2025 | Major GPA: 3.56/4.00</p>
                            </div>
                            <div className="flex-shrink-0 ml-4">
                              <Image 
                                src="/colgate_seal.svg" 
                                alt="Colgate University Seal" 
                                width={80} 
                                height={80} 
                                className="rounded-full"
                              />
                            </div>
                          </motion.div>
                          <motion.div initial={{ scale: 1 }} animate={{ scale: 1 }} variants={pulseVariant} whileHover="hover">
                            <h3 className="text-xl font-semibold text-[#7c6f64]">SIT: Zanzibar Coastal Ecology and Natural Resource Management</h3>
                            <p className="text-[#4a4737]">Stone Town, Tanzania | September 2023 - December 2023</p>
                          </motion.div>
                          <motion.div initial={{ scale: 1 }} animate={{ scale: 1 }} variants={pulseVariant} whileHover="hover">
                            <h3 className="text-xl font-semibold text-[#7c6f64]">Brentwood College School</h3>
                            <p className="text-[#4a4737]">Mill Bay, BC, Canada | Graduated: June 2021</p>
                          </motion.div>
                        </div>
                      </CardContent>
                    </AnimatedCard>
                  </motion.div>
                )}

                {filterSections("experience") && (
                  <motion.div
                    key="experience"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeInVariant}
                  >
                    <AnimatedCard className="bg-[#e0d8cc] border-none shadow-lg hover:shadow-xl transition-all duration-300 mb-6">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-semibold text-[#6a8759] flex items-center">
                          <Briefcase className="mr-2 h-6 w-6" />
                          Relevant Experience
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <motion.div className="flex flex-col md:flex-row items-start" initial={{ scale: 1 }} animate={{ scale: 1 }} variants={pulseVariant} whileHover="hover">
                            <div className="flex-grow">
                              <h3 className="text-xl font-semibold text-[#7c6f64]">Independent Creative Stories | Writer</h3>
                              <p className="text-[#4a4737]">Remote | Fall 2021 - Present</p>
                              <ul className="list-disc list-inside text-[#4a4737] mt-2">
                                <li>Draft 5 science-fiction stories, from end-of-world apocalypses to reminiscing on a lost loved one.</li>
                              </ul>
                            </div>
                            <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4">
                              <Image 
                                src="/placeholder.svg?height=100&width=150&text=Creative+Writing" 
                                alt="Creative Writing" 
                                width={150} 
                                height={100} 
                                className="rounded-lg"
                              />
                            </div>
                          </motion.div>
                          <motion.div initial={{ scale: 1 }} animate={{ scale: 1 }} variants={pulseVariant} whileHover="hover">
                            <h3 className="text-xl font-semibold text-[#7c6f64]">New York Life Insurance | Risk Management Consultant</h3>
                            <p className="text-[#4a4737]">New York City | Summer 2024</p>
                            <ul className="list-disc list-inside text-[#4a4737] mt-2">
                              <li>Created flowcharts with MS Visio for stakeholders and risk managers to identify key points of risk</li>
                              <li>Analyzed data through Excel to identify key factors of risk on an Overpayment Analysis Project that helped New York Life recover overpayments and identified processes within the businesses that allowed for these overpayments to accumulate.</li>
                            </ul>
                          </motion.div>
                          <motion.div className="flex flex-col md:flex-row items-start" initial={{ scale: 1 }} animate={{ scale: 1 }} variants={pulseVariant} whileHover="hover">
                            <div className="flex-grow">
                              <h3 className="text-xl font-semibold text-[#7c6f64]">Independent Research Project | Researcher & Writer</h3>
                              <p className="text-[#4a4737]">Stone Town, Tanzania | Fall 2023</p>
                              <ul className="list-disc list-inside text-[#4a4737] mt-2">
                                <li>Wrote a research proposal and 40-page paper on a reptile survey that was conducted on a remote island in the Zanzibar archipelago to provide a framework of reptilian biodiversity before large-scale urban development of the island.</li>
                                <li>Conducted literature reviews and synthesized research to identify gaps in knowledge and inform project objectives</li>
                                <li>Collaborated with multi-disciplinary teams to design experiments, collect and analyze qualitative and quantitative data using Microsoft Excel tools, and interpreted results to identify and validate research conclusions.</li>
                                <li>Applied reptile surveying on Pemba and Misali Islands using observation techniques to discover a larger than previously thought range for an endemic species and contribute to biodiversity knowledge and conservation efforts.</li>
                              </ul>
                            </div>
                            <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4">
                              <Image 
                                src="/placeholder.svg?height=150&width=200&text=Environmental+Research" 
                                alt="Environmental Research in Tanzania" 
                                width={200} 
                                height={150} 
                                className="rounded-lg"
                              />
                            </div>
                          </motion.div>
                        </div>
                      </CardContent>
                    </AnimatedCard>
                  </motion.div>
                )}

                {filterSections("skills") && (
                  <motion.div
                    key="skills"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeInVariant}
                  >
                    <AnimatedCard className="bg-[#e0d8cc] border-none shadow-lg hover:shadow-xl transition-all duration-300 mb-6">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-semibold text-[#6a8759] flex items-center">
                          <User className="mr-2 h-6 w-6" />
                          Skills & Interests
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold text-[#7c6f64]">Skills:</h3>
                            <p className="text-[#4a4737]">Proficient in Excel, Word, and PowerPoint</p>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-[#7c6f64]">Interests:</h3>
                            <div className="flex flex-wrap gap-2">
                              {["Blog Writing", "Reading/Writing Poetry", "Playing Guitar", "Sports (watching + playing)", "Cooking", "Drawing", "Learning Languages"].map((interest, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ scale: 1 }} animate={{ scale: 1 }}
                                  variants={pulseVariant}
                                  whileHover="hover"
                                >
                                  <Badge className="bg-[#d5c4a1] text-[#4a4737] hover:bg-[#6a8759] hover:text-[#f2e9de] transition-colors duration-300">{interest}</Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </AnimatedCard>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
                variants={staggerChildren}
              >
                <AnimatedCard className="bg-[#e0d8cc] border-none shadow-lg hover:shadow-xl transition-all duration-300" variants={fadeInVariant}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-semibold text-[#6a8759] flex items-center">
                      <Book className="mr-2 h-6 w-6" />
                      Relevant Coursework
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2 text-[#4a4737]">
                      {["Environmental Justice", "African Literature", "Major British Writers", "Stem Cells", "Bionics and Gene Therapy", "American Texts and Contexts", "Paleontology of Marine Life", "Chaucer's Canterbury Tales"].map((course, index) => (
                        <motion.li 
                          key={index}
                          initial={{ scale: 1 }} animate={{ scale: 1 }}
                          variants={pulseVariant}
                          whileHover="hover"
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 bg-[#6a8759] rounded-full mr-2" />
                          {course}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </AnimatedCard>

                <AnimatedCard className="bg-[#e0d8cc] border-none shadow-lg hover:shadow-xl transition-all duration-300" variants={fadeInVariant}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-semibold text-[#6a8759] flex items-center">
                      <Coffee className="mr-2 h-6 w-6" />
                      Activities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2 text-[#4a4737]">
                      {["Club Soccer", "Club Tennis", "Hiking Club", "Disc Golf Club", "Students for Environmental Action (SEA)"].map((activity, index) => (
                        <motion.li 
                          key={index}
                          initial={{ scale: 1 }} animate={{ scale: 1 }}
                          variants={pulseVariant}
                          whileHover="hover"
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 bg-[#6a8759] rounded-full mr-2" />
                          {activity}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </AnimatedCard>

                <AnimatedCard className="bg-[#e0d8cc] border-none shadow-lg hover:shadow-xl transition-all duration-300" variants={fadeInVariant}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-semibold text-[#6a8759] flex items-center">
                      <Leaf className="mr-2 h-6 w-6" />
                      Environmental Interests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="relative h-48 w-full overflow-hidden rounded-lg mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="/placeholder.svg?height=192&width=384&text=Environmental+Project"
                        alt="Environmental Project"
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </motion.div>
                    <p className="text-[#4a4737]">Passionate about environmental conservation and sustainable practices. Actively involved in projects that promote ecological awareness and biodiversity preservation.</p>
                  </CardContent>
                </AnimatedCard>
              </motion.div>
            </motion.div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}