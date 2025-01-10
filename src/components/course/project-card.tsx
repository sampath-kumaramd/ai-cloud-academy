interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="w-full md:w-[420px] p-6 bg-[#111111] rounded-2xl border border-white/10">
      <div className="rounded-xl overflow-hidden border-[6px] border-[#4ADE80]/20 bg-gradient-to-b from-[#4ADE80]/10 to-transparent">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            width={400}
            height={300}
          />
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <h3 className="text-2xl font-semibold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-gray-400 text-base line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
