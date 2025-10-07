import type { FC } from 'react';

import FeaturedProjects from '~/components/FeaturedProjects';
import type { Route } from './+types/index';

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: 'The Friendly Dev | Welcome' },
    { name: 'description', content: 'Custom website development' },
  ];
};

export const loader = async ({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await response.json();

  return { projects: data };
};

const HomePage: FC<Route.ComponentProps> = ({ loaderData }) => {
  const { projects } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
    </>
  );
};

export default HomePage;
