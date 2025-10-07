import type { FC } from 'react';

import ProjectCard from './ProjectCard';

type Props = {
  projects: Project[];
  count?: number;
};

const FeaturedProjects: FC<Props> = ({ projects, count = 4 }) => {
  const featured = projects.filter((p) => p.featured).slice(0, count);

  return (
    <section>
      <h2 className='mb-6 text-2xl font-bold text-gray-200'>
        🌟 Featured Projects
      </h2>

      <div className='grid gap-6 sm:grid-cols-2'>
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
