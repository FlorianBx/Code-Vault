import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

interface LocationState {
  title?: string;
  description?: string;
  tag?: string;
  code?: string;
}

export default function SnippetPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const state = location.state as LocationState;

  return (
    <div
      data-testid="snippet-page-test"
      className="flex h-screen w-full flex-col items-center"
    >
      <div className="p-4 lg:w-1/2">
        SnippetPage id:
        <span className="text-green-300">{id}</span>
        <section className="flex">
          <p>title:</p>
          <span className="text-green-300">{state?.title ?? 'State error'}</span>
        </section>
        <section className="flex">
          <p>description:</p>
          <span className="text-green-300">{state?.description ?? 'State error'}</span>
        </section>
        <section className="mb-12 flex">
          <p>tag:</p>
          <span className="text-green-300">{state?.tag ?? 'State error'}</span>
        </section>
        <code className="h-48 w-96 bg-gray-700 p-8 shadow-lg">{state?.code ?? 'State error'}</code>
      </div>
    </div>
  );
}
