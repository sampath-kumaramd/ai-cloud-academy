import { CourseModuleCard } from './course-module-card';
import { TimelineIndicator } from './timeline-indicator';
import { motion } from 'framer-motion';

interface CourseModule {
  number: number;
  title: string;
  description: string;
}

interface CourseModulesProps {
  modules: CourseModule[];
}

export default function CourseModules({ modules }: CourseModulesProps) {
  return (
    <div className="bg-black">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {modules.map((module: CourseModule, index: number) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="relative flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <TimelineIndicator
              number={module.number}
              isLast={index === modules.length - 1}
            />
            <div className="flex-1 pb-8">
              <motion.div
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <CourseModuleCard {...module} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
