import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Target, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="About Me"
              subtitle="SQA Engineer, Researcher, and Lifelong Learner"
            />

            <div className="mx-auto max-w-4xl space-y-8">
              {/* Main Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-soft">
                  <CardContent className="pt-6">
                    <p className="mb-4 text-lg leading-relaxed">
                      I'm Md Ahsamul Haque (Ahsam), a passionate Software Quality Assurance Engineer 
                      currently working at V2 Technologies, where I ensure the quality and reliability 
                      of enterprise CRM systems for major clients including British American Tobacco, 
                      Unilever, and Banglalink.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                      As a final-year Computer Science & Engineering student at American International 
                      University-Bangladesh (AIUB), I'm deeply interested in cutting-edge technologies 
                      including microwave resonator sensing, VLSI design, and remote-sensing AI applications.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Beyond my professional work, I'm passionate about content creation, video editing, 
                      and graphic design. I believe in continuous learning and personal growth, which 
                      has helped me achieve significant milestones in both my career and personal life.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Education & Achievements Grid */}
              <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="h-full shadow-soft">
                    <CardContent className="pt-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <GraduationCap className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold">Education</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium">B.Sc. in Computer Science & Engineering</p>
                        <p className="text-muted-foreground">
                          American International University-Bangladesh (AIUB)
                        </p>
                        <p className="text-sm text-muted-foreground">Expected Graduation: 2025</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="h-full shadow-soft">
                    <CardContent className="pt-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Trophy className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold">Achievement</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium">Personal Transformation</p>
                        <p className="text-muted-foreground">
                          Successfully achieved weight loss from 136kg to 81kg through dedication 
                          and discipline
                        </p>
                        <p className="text-sm text-muted-foreground">
                          A testament to commitment and goal-oriented mindset
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Goals & Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="shadow-soft">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Target className="text-primary" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold">Goals & Vision</h3>
                    </div>
                    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                      <li>Advance expertise in software quality assurance and test automation</li>
                      <li>Contribute to research in microwave sensing and VLSI design</li>
                      <li>Develop AI-powered remote sensing solutions</li>
                      <li>Create educational content in software testing and engineering</li>
                      <li>Build innovative solutions that bridge hardware and software</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Bangla Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="border-primary/20 bg-primary/5 shadow-soft">
                  <CardContent className="pt-6">
                    <p className="text-lg leading-relaxed" lang="bn">
                      আমি একজন SQA ইঞ্জিনিয়ার ও CSE ফাইনাল-ইয়ার স্টুডেন্ট। টেস্টিং, রিসার্চ, 
                      আর রিয়েল-ওয়ার্ল্ড প্রজেক্ট ডেলিভারিতে আগ্রহী। ভবিষ্যতে কনটেন্ট ক্রিয়েশন 
                      ও রিসার্চ-ড্রিভেন ডেভেলপমেন্টে কাজ করতে চাই।
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
