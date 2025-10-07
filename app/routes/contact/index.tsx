import type { FC } from 'react';

import type { Route } from './+types';
import { Form } from 'react-router';

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');
  const data = {
    name,
    email,
    subject,
    message,
  };

  // You could send to database here

  return { message: 'Form submitted successfully', data };
};

const ContactPage: FC<Route.ComponentProps> = ({ actionData }) => {
  return (
    <div className='mx-auto mt-12 max-w-3xl bg-gray-900 px-6 py-8'>
      <h2 className='mb-8 text-center text-3xl font-bold text-white'>
        📬Contact Me
      </h2>

      {actionData?.message ? (
        <p className='mb-6 rounded-lg border border-green-500 bg-green-700 p-4 text-center text-green-100 shadow-md'>
          {actionData.message}
        </p>
      ) : null}

      <Form method='post' className='space-y-6'>
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
      </Form>
    </div>
  );
};

export default ContactPage;
