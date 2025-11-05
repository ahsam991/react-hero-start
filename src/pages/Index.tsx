import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import profileImage from "@/assets/profile-placeholder.jpg";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={profileImage}
                  alt="Md Ahsamul Haque"
                  className="mb-8 h-40 w-40 rounded-full border-4 border-primary shadow-medium"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
              >
                Md Ahsamul Haque
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-2 text-2xl font-semibold text-primary md:text-3xl"
              >
                Software Quality Assurance Engineer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl"
              >
                CSE Final-Year Student at AIUB | Passionate about QA, Microwave Resonator Sensing, 
                VLSI Design & Remote-Sensing AI | Based in Dhaka, Bangladesh
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button size="lg" asChild>
                  <Link to="/contact">
                    <Mail className="mr-2" size={20} />
                    Hire Me
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground">
                  <a href="/assets/cv.pdf" download>
                    <Download className="mr-2" size={20} />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-card py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="mb-2 text-4xl font-bold text-primary">2+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="mb-2 text-4xl font-bold text-primary">6+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="mb-2 text-4xl font-bold text-primary">3</h3>
                <p className="text-muted-foreground">Major Clients</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
