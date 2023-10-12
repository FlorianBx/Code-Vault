import { createContext, useState } from 'react';
import { ContextChildrenProp } from '../models/types';
import { Snippet } from '../models/snippet';

interface SnippetContextType {
  snippet: Snippet | null;
  setSnippet: (snippet: Snippet) => void;
}

const initialContext: SnippetContextType = {
  snippet: null,
  setSnippet: () => {},
};

const SnippetContext = createContext<SnippetContextType | undefined>(undefined);

type SnippetProviderProps = {
  children: React.ReactNode;
}

const SnippetProvider: React.FC<SnippetProviderProps> = ({ children }: JSX.Element) => {
  const [snippet, setSnippet] = useState<SnippetProp | null>(null);

  return (
    <SnippetContext.Provider value={{ snippet, setSnippet }}>
      {children}
    </SnippetContext.Provider>
  );
};

export { SnippetProvider, SnippetContext };