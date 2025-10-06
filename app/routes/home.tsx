import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Friendly Developer' },
    { name: 'description', content: 'Custom website development' },
  ];
}

export default function Home() {
  return <>My App</>;
}
