import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import type { Route } from './+types/details.tsx';

export const loader = async ({ request, params }: Route.LoaderArgs) => {
  const { slug } = params;
  const url = new URL('/data/posts-meta.json', request.url);
  const response = await fetch(url.href);
  if (!response.ok) throw new Error('Failed to fetch data');

  const index = await response.json();
  const postMeta = index.find((post: PostMeta) => post.slug === slug);
  if (!postMeta) throw new Response('Not Found', { status: 404 });

  // Dynamically import the raw markdown
  const markdown = await import(`../../posts/${slug}.md?raw`);

  return {
    postMeta,
    markdown: markdown.default,
  };
};

type Props = {
  loaderData: {
    postMeta: PostMeta;
    markdown: string;
  };
};

const BlogPostDetailsPage: FC<Props> = ({ loaderData }) => {
  const { postMeta, markdown } = loaderData;

  console.log(postMeta, markdown);

  return <>Blog Details Page</>;
};

export default BlogPostDetailsPage;
