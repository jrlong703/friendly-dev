import type { FC } from 'react';
import { Outlet } from 'react-router';
import type { Route } from './+types/main';

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: 'The Friendly Dev' },
    { name: 'description', content: 'Custom website development' },
  ];
};

const MainLayout: FC = () => {
  return (
    <>
      <section className='mx-auto my-8 max-w-6xl px-6'>
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
