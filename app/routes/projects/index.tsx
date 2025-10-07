import type { FC } from 'react';

import type { Route } from './+types/index';

export const loader = async ({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> => {
  const response = await fetch('http://localhost:5000/projects');
  const data = await response.json();

  return { projects: data };
};

const ProjectsPage: FC<Route.ComponentProps> = ({ loaderData }) => {
  const { projects } = loaderData as { projects: Project[] };
  console.log(projects);

  return (
    <>
      <h2 className='mb-8 text-3xl font-bold text-white'>🚀Projects</h2>
    </>
  );
};

export default ProjectsPage;
