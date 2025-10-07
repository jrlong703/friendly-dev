import type { FC } from 'react';

const ContactPage: FC = () => {
  return (
    <div className='mx-auto mt-12 max-w-3xl bg-gray-900 px-6 py-8'>
      <h2 className='mb-8 text-center text-3xl font-bold text-white'>
        📬Contact Me
      </h2>

      <form className='space-y-6'>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-300'
          >
            Full Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='mt-1 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-100'
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-300'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='mt-1 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-100'
          />
        </div>
        <div>
          <label
            htmlFor='subject'
            className='block text-sm font-medium text-gray-300'
          >
            Subject
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            className='mt-1 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-100'
          />
        </div>
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-300'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            className='mt-1 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-100'
          />
        </div>

        <button
          type='submit'
          className='w-full cursor-pointer rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
