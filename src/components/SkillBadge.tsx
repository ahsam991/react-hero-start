import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Badge variant="secondary" className="px-4 py-2 text-sm">
        {skill}
      </Badge>
    </motion.div>
  );
};
