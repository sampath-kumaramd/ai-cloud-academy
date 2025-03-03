import { motion } from 'framer-motion';

interface CourseModuleProps {
  number: number;
  title: string;
  description: string;
}

export function CourseModuleCard({
  number,
  title,
  description,
}: CourseModuleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden flex flex-col sm:flex-row items-center gap-4 rounded-xl bg-zinc-900/50 p-4 backdrop-blur-sm transition-colors hover:bg-zinc-900/70 border border-white/10"
    >
      <div
        className="absolute hidden sm:block rounded-full z-30"
        style={{
          height: '250px',
          width: '250px',
          borderRadius: '200px',
          background:
            'radial-gradient(circle at center, rgba(228,226,255,0.1) 0%, rgba(228,226,255,0) 60%)',
          top: '-100px',
          right: '-100px',
          transform: 'rotate(-45deg)',
        }}
      />

      <div className="flex flex-col sm:flex-row flex-1 gap-4">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TA5oUUWseSYnxgdrDZyJYTu8Ax8nrc.png"
          alt="Module thumbnail"
          className="h-auto w-full sm:h-24 sm:w-36 rounded-lg object-cover"
        />
        <div className="flex flex-col justify-center text-center sm:text-left">
          <div className="text-sm text-zinc-400">Module {number}</div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-zinc-400 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
