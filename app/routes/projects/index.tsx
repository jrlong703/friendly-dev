import { useState, type FC } from 'react';

import type { Route } from './+types/index';
import ProjectCard from '~/components/ProjectCard';
import Pagination from '~/components/Pagination';

export const loader = async ({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> => {
  const response = await fetch('http://localhost:5000/projects');
  const data = await response.json();

  return { projects: data };
};

const ProjectsPage: FC<Route.ComponentProps> = ({ loaderData }) => {
  const { projects } = loaderData as { projects: Project[] };
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Get the projects for the current page
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <h2 className='mb-8 text-3xl font-bold text-white'>🚀Projects</h2>

      <div className='grid gap-6 sm:grid-cols-2'>
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProjectsPage;
