import type { FC } from 'react';

type Props = {
  searchTerm: string;
  onSearchChange: (term: string) => void;
};

const PostFilter: FC<Props> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className='mb-6'>
      <input
        type='text'
        value={searchTerm}
        placeholder='Search Posts...'
        onChange={(e) => onSearchChange(e.target.value)}
        className='w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none'
      />
    </div>
  );
};

export default PostFilter;
