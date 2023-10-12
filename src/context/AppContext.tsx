import { createContext, useState, JSX } from 'react';
import { Snippet } from '../models/snippet';

interface SnippetContextType {
  snippet: Snippet | null;
  setSnippet: React.Dispatch<React.SetStateAction<Snippet | null>>
}
interface SnippetProviderProps {
  children: React.ReactNode;
}

const defaultSnippetContext: SnippetContextType = {
  snippet: null,
  setSnippet: () => {},
};

const SnippetContext = createContext<SnippetContextType>(defaultSnippetContext);

function SnippetProvider({ children }: SnippetProviderProps): JSX.Element {
  const [snippet, setSnippet] = useState<Snippet | null>(null);

  return (
    <SnippetContext.Provider value={{ snippet, setSnippet }}>
      { children }
    </SnippetContext.Provider>
  );
}

export { SnippetContext, SnippetProvider };
