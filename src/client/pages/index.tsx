import React from 'react';
import { NextPage } from 'next';

const { info } = console;

const HomePage: NextPage = () => {
  const onFormSubmitted = async (event: React.FormEvent) => {
    event.preventDefault();

    const res = await fetch('api/sample/endpoint', {
      body: JSON.stringify({
        name: (event.target as Partial<{ name: { value: string } }>).name.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    info(result, ' < result');
  };

  return (
    <form onSubmit={onFormSubmitted}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <button type="submit">Go</button>
    </form>
  );
};

export default HomePage;
