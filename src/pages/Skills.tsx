import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillBadge } from "@/components/SkillBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Skills"
              subtitle="Technologies and tools I work with"
            />

            <div className="mx-auto max-w-6xl space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <Card className="shadow-soft">
                    <CardHeader>
                      <CardTitle className="text-2xl">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <SkillBadge
                            key={skill}
                            skill={skill}
                            index={skillIndex}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
