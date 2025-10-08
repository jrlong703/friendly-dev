import type { FC } from 'react';
import { Link } from 'react-router';

const NotFoundPage: FC = () => {
  return (
    <section className='flex min-h-[70vh] flex-col items-center justify-center px-6 text-center'>
      <h1 className='mb-4 text-6xl font-extrabold text-blue-400'>404</h1>
      <h2 className='mb-2 text-2xl font-semibold text-white'>Page Not Found</h2>
      <p className='mb-6 max-w-md text-gray-400'>
        Sorry, the page you're looking for doesn't exist. It might have been
        moved or deleted.
      </p>
      <Link
        to='/'
        className='inline-block rounded bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700'
      >
        Go Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
