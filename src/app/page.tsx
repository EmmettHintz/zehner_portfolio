"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Linkedin, Download, MapPin, Phone, ExternalLink, Book, Briefcase, GraduationCap, Award, User, Coffee, Image as ImageIcon, Leaf } from "lucide-react"
import Image from "next/image"

const AnimatedCard = motion(Card)

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#f2e9de] text-[#4a4737] p-4 md:p-8">
      <main className="max-w-7xl mx-auto">
        <header className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#6a8759] mb-4">Benjamin Holmes Zehner</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#6c7a89]">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (360)-472-9458
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                bzehner@colgate.edu
              </div>
              <div className="flex items-center">
                <Linkedin className="w-4 h-4 mr-2" />
                www.linkedin.com/in/ben-zehner
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Friday Harbor, WA
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start md:items-end space-y-2">
            <Button variant="outline" className="w-full md:w-auto bg-[#e0d8cc] text-[#4a4737] border-[#a89984] hover:bg-[#d5c4a1]">
              <a href="/Ben_Zehner_Resume.pdf" download className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" className="w-full md:w-auto bg-[#e0d8cc] text-[#4a4737] border-[#a89984] hover:bg-[#d5c4a1]">
              <a href="https://www.linkedin.com/in/ben-zehner" className="flex items-center">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="w-full md:w-auto bg-[#e0d8cc] text-[#4a4737] border-[#a89984] hover:bg-[#d5c4a1]">
              <a href="mailto:bzehner@colgate.edu" className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <AnimatedCard className="bg-[#e0d8cc] border-none shadow-lg" variants={fadeInVariant} initial="hidden" animate="visible">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-[#6a8759] flex items-center">
                  <GraduationCap className="mr-2 h-6 w-6" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
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
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#7c6f64]">SIT: Zanzibar Coastal Ecology and Natural Resource Management</h3>
                    <p className="text-[#4a4737]">Stone Town, Tanzania | September 2023 - December 2023</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#7c6f64]">Brentwood College School</h3>
                    <p className="text-[#4a4737]">Mill Bay, BC, Canada | Graduated: June 2021</p>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard className="bg-[#e0d8cc] border-none shadow-lg" variants={fadeInVariant} initial="hidden" animate="visible">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-[#6a8759] flex items-center">
                  <Briefcase className="mr-2 h-6 w-6" />
                  Relevant Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-[#7c6f64]">Independent Creative Stories | Writer</h3>
                      <p className="text-[#4a4737]">Remote | Fall 2021 - Present</p>
                      <ul className="list-disc list-inside text-[#4a4737] mt-2">
                        <li>Draft 5 science-fiction stories, from end-of-world apocalypses to reminiscing on a lost loved one.</li>
                      </ul>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <Image 
                        src="/placeholder.svg?height=100&width=150&text=Creative+Writing" 
                        alt="Creative Writing" 
                        width={150} 
                        height={100} 
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#7c6f64]">New York Life Insurance | Risk Management Consultant</h3>
                    <p className="text-[#4a4737]">New York City | Summer 2024</p>
                    <ul className="list-disc list-inside text-[#4a4737] mt-2">
                      <li>Created flowcharts with MS Visio for stakeholders and risk managers to identify key points of risk</li>
                      <li>Analyzed data through Excel to identify key factors of risk on an Overpayment Analysis Project that helped New York Life recover overpayments and identified processes within the businesses that allowed for these overpayments to accumulate.</li>
                    </ul>
                  </div>
                  <div className="flex items-start">
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
                    <div className="flex-shrink-0 ml-4">
                      <Image 
                        src="/placeholder.svg?height=150&width=200&text=Environmental+Research" 
                        alt="Environmental Research in Tanzania" 
                        width={200} 
                        height={150} 
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </div>

          <div className="space-y-6">
            <AnimatedCard className="bg-[#e0d8cc] border-none shadow-lg" variants={fadeInVariant} initial="hidden" animate="visible">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-[#6a8759] flex items-center">
                  <Award className="mr-2 h-6 w-6" />
                  Work & Leadership Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#7c6f64]">Crystal Seas Kayaking | Sea Kayaking Guide</h3>
                    <p className="text-[#4a4737]">San Juan Island | Summer 2023</p>
                    <ul className="list-disc list-inside text-[#4a4737] mt-2">
                      <li>Critically analyzed and streamlined the scheduling process of arrivals and departures of hundreds of kayaking tours throughout the summer.</li>
                      <li>Lead groups of people from various backgrounds down the coast of San Juan Island providing historical and ecological perspectives on the growth and development of the island.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#7c6f64]">Lakedale at Three Lakes Resort | Maintenance Team</h3>
                    <p className="text-[#4a4737]">San Juan Island | Summer 2022</p>
                    <ul className="list-disc list-inside text-[#4a4737] mt-2">
                      <li>Prepared campsites for guest arrivals by cleaning facilities and ensuring a welcoming environment.</li>
                      <li>Repaired and maintained essential resort equipment, ensuring operational efficiency and guest satisfaction.</li>
                      <li>Managed the upkeep of vegetation surrounding communal spaces, enhancing the aesthetic for community events.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#7c6f64]">San Juan Brewing Company | Brewery Host</h3>
                    <p className="text-[#4a4737]">San Juan Island | Summer 2022</p>
                    <ul className="list-disc list-inside text-[#4a4737] mt-2">
                      <li>Organized customer seating arrangements to optimize kitchen and waiter efficiency, enhancing service delivery.</li>
                      <li>Streamlined takeout operations during peak hours by efficiently managing phone orders and coordinating customer seating.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard className="bg-[#e0d8cc] border-none shadow-lg" variants={fadeInVariant} initial="hidden" animate="visible">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-[#6a8759] flex items-center">
                  <Leaf className="mr-2 h-6 w-6" />
                  Environmental Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/placeholder.svg?height=192&width=384&text=Environmental+Project"
                    alt="Environmental Project"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <p className="text-[#4a4737]">Passionate about environmental conservation and sustainable practices. Actively involved in projects that promote ecological awareness and biodiversity preservation.</p>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <AnimatedCard className="bg-[#e0d8cc] border-none shadow-lg" variants={fadeInVariant} initial="hidden" animate="visible">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-semibold text-[#6a8759] flex items-center">
                <Book className="mr-2 h-6 w-6" />
                Relevant Coursework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-2 text-[#4a4737]">
                <li>Environmental Justice</li>
                <li>African Literature</li>
                <li>Major British Writers</li>
                <li>Stem Cells</li>
                <li>Bionics and Gene Therapy</li>
                <li>American Texts and Contexts</li>
                <li>Paleontology of Marine Life</li>
                <li>Chaucer's Canterbury Tales</li>
              </ul>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard className="bg-[#e0d8cc] border-none shadow-lg" variants={fadeInVariant} initial="hidden" animate="visible">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-semibold text-[#6a8759] flex items-center">
                <Coffee className="mr-2 h-6 w-6" />
                Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-2 text-[#4a4737]">
                <li>Club Soccer</li>
                <li>Club Tennis</li>
                <li>Hiking Club</li>
                <li>Disc Golf Club</li>
                <li>Students for Environmental Action (SEA)</li>
              </ul>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard className="bg-[#e0d8cc] border-none shadow-lg" variants={fadeInVariant} initial="hidden" animate="visible">
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
                      <Badge key={index} className="bg-[#d5c4a1] text-[#4a4737]">{interest}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </AnimatedCard>
        </div>
      </main>
    </div>
  )
}