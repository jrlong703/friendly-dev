import type { FC } from 'react';
import { Link } from 'react-router';

type Props = {
  project: Project;
};

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className='block transform transition duration-300 hover:scale-[1.02]'
    >
      <div className='overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-sm transition hover:shadow-md'>
        <img
          src={project.image}
          alt={project.title}
          className='h-40 w-full object-cover'
        />
        <div className='p-5'>
          <h3 className='mb-1 text-3xl font-semibold text-blue-400'>
            {project.title}
          </h3>
          <p className='mb-2 text-sm text-gray-300'>{project.description}</p>
          <div className='flex items-center justify-between text-sm text-gray-400'>
            <span>{project.category}</span>
            <span>{new Date(project.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
