import { CourseModuleCard } from './course-module-card';
import { TimelineIndicator } from './timeline-indicator';

interface CourseModulesProps {
  modules: {
    number: number;
    title: string;
    description: string;
  }[];
}

export default function CourseModules({ modules }: CourseModulesProps) {
  return (
    <div className="bg-black">
      <div className="mx-auto w-full">
        {modules.map((module, index) => (
          <div key={index} className="relative flex gap-6">
            <TimelineIndicator
              number={module.number}
              isLast={index === modules.length - 1}
            />
            <div className="flex-1 pb-8">
              <CourseModuleCard {...module} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
