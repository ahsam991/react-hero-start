import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects, projectCategories } from "@/data/projects";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Projects"
              subtitle="A showcase of my work in SQA, research, VLSI, embedded systems, and web development"
            />

            {/* Filter Buttons */}
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {projectCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-lg text-muted-foreground">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
