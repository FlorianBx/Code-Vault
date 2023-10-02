import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';
import ToastBar from '../../components/toastBar/ToastBar.tsx';
import CardSnippets from '../../components/cardSnippets/CardSnippets.tsx';

interface Snippet {
  id: string;
  title: string;
  tag: string;
  description: string;
  createdDate: string;
  isPinned: boolean;
  code: string;
}

export default function SnippetsPage(): React.JSX.Element {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [hasFetchedSnippets, setHasFetchedSnippets] = useState(false);

  useEffect(() => {
    if (!hasFetchedSnippets) {
      const fetchSnippets = async (): Promise<void> => {
        const snippetsCollection = collection(db, 'snippets');
        const snippetsSnapshot = await getDocs(snippetsCollection);
        const snippetsList = snippetsSnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().name,
          tag: doc.data().tag,
          description: doc.data().description,
          createdDate: new Date(
            doc.data().date.seconds * 1000,
          ).toLocaleString(),
          isPinned: doc.data().pinned,
          code: doc.data().code,
        }));
        setSnippets(snippetsList);
        setHasFetchedSnippets(true);
      };
      void fetchSnippets();
    }
    // console.table(snippets);
  }, [hasFetchedSnippets, snippets]);

  return (
    <div>
      <div className="w-100 sticky right-0 top-0 z-10 flex justify-center p-0">
        <ToastBar state="success" message="Snippet copied to clipboard" />
      </div>
      <section className="flex h-screen flex-wrap justify-center gap-4">
        {snippets.map((snippet) => (
          <CardSnippets
            key={snippet.id}
            id={snippet.id}
            title={snippet.title}
            tag={snippet.tag}
            description={snippet.description}
            createdDate={snippet.createdDate}
            pinned={snippet.isPinned}
            code={snippet.code}
          />
        ))}
      </section>
    </div>
  );
}
