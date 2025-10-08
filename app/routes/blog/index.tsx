import { use, useState, type FC } from 'react';

import type { Route } from './+types/index.tsx';
import PostCard from '~/components/PostCard.js';
import Pagination from '~/components/Pagination.js';
import PostFilter from '~/components/PostFilter.js';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  const { posts } = loaderData;
  const filteredPosts = posts.filter((post) => {
    const term = searchTerm.toLowerCase();

    return (
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term)
    );
  });

  const totalPages = Math.ceil(filteredPosts.length / postPerPage);
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

  return (
    <div className='mx-auto mt-10 max-w-3xl bg-gray-900 px-6 py-6'>
      <h2 className='mb-8 text-3xl font-bold text-white'>📝Blog</h2>
      <PostFilter
        searchTerm={searchTerm}
        onSearchChange={(term) => {
          setSearchTerm(term);
          setCurrentPage(1); // reset after filtering
        }}
      />

      <div className='space-y-8'>
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className='text-center text-gray-400'>No matching posts</p>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default BlogPage;
