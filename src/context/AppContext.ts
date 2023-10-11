import { createContext, useState } from 'react';
import { ContextChildrenProp } from '../utils/types';
import { as } from 'vitest/dist/reporters-5f784f42.js';

interface SnippetProp {
  id: string
  title: string
  tag: string
  description: string
  createdDate: string
  isPinned: boolean
  code: string
}

const AppContext = createContext<SnippetProp>({
  id: '',
  title: '',
  tag: '',
  description: '',
  createdDate: '',
  isPinned: false,
  code: '',
});

const AppProvider = ({ children }: ContextChildrenProp) => {
  const [snippet, setSnippet] = useState({} as SnippetProp);
  const value = { snippet, setSnippet };

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };