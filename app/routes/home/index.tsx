import type { FC } from 'react';
import type { Route } from './+types/index';

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: 'The Friendly Dev | Welcome' },
    { name: 'description', content: 'Custom website development' },
  ];
};

const Home: FC = () => {
  console.log('Hello from Home...');
  return <section>My App</section>;
};

export default Home;
