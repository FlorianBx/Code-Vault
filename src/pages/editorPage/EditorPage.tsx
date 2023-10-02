import React from 'react';

export default function EditorPage(): React.JSX.Element {
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen justify-center">
      <form className="mt-8 flex w-screen flex-col p-4 sm:w-2/3">
        <p className="mb-2 text-gray-300">Snippet name</p>
        <input
          placeholder="Enter your snippet name..."
          name="Snippet name"
          className="h-10 w-2/3 rounded-md bg-gray-800 p-2 text-white focus:outline-none"
          type="text"
        />
        <p className="mb-2 mt-4 text-gray-300">Description</p>
        <textarea
          placeholder="Describe your snippet..."
          name="Description"
          className="h-32 w-full rounded-md bg-gray-800 p-2 text-white focus:outline-none"
        />
        <p className="mb-2 mt-4 text-gray-300">Code</p>
        <textarea
          placeholder="Paste your code here..."
          name="Code"
          className="h-64 w-full rounded-md bg-gray-800 p-2 text-white focus:outline-none"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-4 w-48 transform items-end rounded-md bg-primary-green p-2 shadow-lg transition-transform active:scale-90"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
