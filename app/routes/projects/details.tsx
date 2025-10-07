import type { FC } from 'react';
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
  console.log(project);

  return <>Project Details</>;
};

export default ProjectDetailsPage;
