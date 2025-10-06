import type { FC } from 'react';

import type { Route } from './+types/index';
import Hero from '~/components/Hero';

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: 'The Friendly Dev | Welcome' },
    { name: 'description', content: 'Custom website development' },
  ];
};

const Home: FC = () => {
  return (
    <section>
      <Hero name='JR' />
    </section>
  );
};

export default Home;
