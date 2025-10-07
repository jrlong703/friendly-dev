import type { FC } from 'react';

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: FC<Props> = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className='mt-8 flex justify-center gap-2'>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          type='button'
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`cursor-pointer rounded px-3 py-1 ${
            currentPage === index + 1
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-200'
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
