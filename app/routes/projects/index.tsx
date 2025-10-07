import { useState, type FC } from 'react';

import type { Route } from './+types/index';
import ProjectCard from '~/components/ProjectCard';

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

  // Pagination button render
  const renderPagination = () => (
    <div className='mt-8 flex justify-center gap-2'>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          type='button'
          key={index + 1}
          onClick={() => setCurrentPage(index + 1)}
          className={`cursor-pointer rounded px-3 py-1 ${
            currentPage === index + 1
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-200'
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <h2 className='mb-8 text-3xl font-bold text-white'>🚀Projects</h2>

      <div className='grid gap-6 sm:grid-cols-2'>
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {totalPages > 1 && renderPagination()}
    </>
  );
};

export default ProjectsPage;
