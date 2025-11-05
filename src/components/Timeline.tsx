import { Experience } from "@/data/experience";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

interface TimelineProps {
  experiences: Experience[];
}

export const Timeline = ({ experiences }: TimelineProps) => {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <CardTitle className="text-2xl">{exp.role}</CardTitle>
                  <CardDescription className="mt-1 text-base">
                    {exp.company} • {exp.location}
                  </CardDescription>
                </div>
                <Badge variant={exp.current ? "default" : "secondary"} className="w-fit">
                  {exp.start} - {exp.end}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
