import type { FC } from 'react';

import type { Route } from './+types/index';
import FeaturedProjects from '~/components/FeaturedProjects';
import AboutPreview from '~/components/AboutPreview';
import LatestPost from '~/components/LatestPost';

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: 'The Friendly Dev | Welcome' },
    { name: 'description', content: 'Custom website development' },
  ];
};

export const loader = async ({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> => {
  const url = new URL(request.url);

  const [projectResponse, postResponse] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects`),
    fetch(new URL('/data/posts-meta.json', url)),
  ]);

  if (!projectResponse.ok || !postResponse.ok) {
    throw new Error('Failed to fetch projects or posts');
  }

  const [projects, posts] = await Promise.all([
    projectResponse.json(),
    postResponse.json(),
  ]);

  return { projects, posts };
};

const HomePage: FC<Route.ComponentProps> = ({ loaderData }) => {
  const { projects, posts } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
      <LatestPost posts={posts} />
    </>
  );
};

export default HomePage;
