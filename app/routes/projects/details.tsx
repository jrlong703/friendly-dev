import type { FC } from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

import type { Route } from './+types/details';

{
  /* 
    Create a client loader just to switch it up and see how it differs from a server loader.
    In a real project, this would be a server loader like in projects.
 */
}
export const clientLoader = async ({
  request,
  params,
}: Route.ClientLoaderArgs): Promise<Project> => {
  const response = await fetch(`http://localhost:5000/projects/${params.id}`);
  if (!response.ok) throw new Response('Project not found', { status: 404 });

  const project: Project = await response.json();
  return project;
};

export const HydrateFallback = () => {
  <div>Loading...</div>;
};

const ProjectDetailsPage: FC<Route.ComponentProps> = ({ loaderData }) => {
  const project = loaderData;

  return (
    <>
      <Link
        to='/projects'
        className='mb-6 flex items-center text-blue-400 transition hover:text-blue-500'
      >
        <FaArrowLeft className='mr-2' /> Back to Projects
      </Link>

      <div className='grid items-start gap-8 md:grid-cols-2'>
        <div>
          <img
            src={project.image}
            alt={project.title}
            className='w-full rounded-lg shadow-md'
          />
        </div>

        <div>
          <h1 className='mb-4 text-3xl font-bold text-blue-400'>
            {project.title}
          </h1>
          <p className='mb-4 text-sm text-gray-300'>
            {new Date(project.date).toLocaleDateString()} • {project.category}
          </p>
          <p className='mb-6 text-gray-200'>{project.description}</p>

          <a
            href={project.url}
            target='_blank'
            className='inline-block rounded bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700'
          >
            View Live Site →
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
