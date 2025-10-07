import type { FC } from 'react';

import type { Route } from './+types/index.tsx';

export const loader = async ({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> => {
  const url = new URL('/data/posts-meta.json', request.url);
  const response = await fetch(url.href);
  if (!response.ok) throw new Error('Failed to fetch data');

  const data = await response.json();

  return { posts: data };
};

const BlogPage: FC<Route.ComponentProps> = ({ loaderData }) => {
  const { posts } = loaderData;

  console.log(posts);

  return (
    <>
      <h2 className='mb-8 text-3xl font-bold text-white'>📝Blog</h2>
    </>
  );
};

export default BlogPage;
