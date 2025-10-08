import type { FC } from 'react';

import type { Route } from './+types/index.tsx';
import PostCard from '~/components/PostCard.js';

export const loader = async ({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> => {
  const url = new URL('/data/posts-meta.json', request.url);
  const response = await fetch(url.href);
  if (!response.ok) throw new Error('Failed to fetch data');

  const data = await response.json();
  data.sort((a: PostMeta, b: PostMeta) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return { posts: data };
};

const BlogPage: FC<Route.ComponentProps> = ({ loaderData }) => {
  const { posts } = loaderData;

  return (
    <div className='mx-auto mt-10 max-w-3xl bg-gray-900 px-6 py-6'>
      <h2 className='mb-8 text-3xl font-bold text-white'>📝Blog</h2>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
