import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
