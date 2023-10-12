import { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase.ts'
import ToastBar from '../../components/toastBar/ToastBar.tsx'
import CardSnippets from '../../components/cardSnippets/CardSnippets.tsx'
import type { Snippet } from '../../models/snippet'

export default function SnippetsPage(): React.JSX.Element {
  const [snippets, setSnippets] = useState<Snippet[]>([])
  const [hasFetchedSnippets, setHasFetchedSnippets] = useState(false)

  const deleteSnippet = async (id: string): Promise<void> => {
    try {
      await deleteDoc(doc(db, 'snippets', id))
      setSnippets(snippets.filter((snippet) => snippet.id !== id))
    } catch (e) {
      console.error('Error removing document: ', e)
    }
  }

  useEffect(() => {
    if (!hasFetchedSnippets) {
      const fetchSnippets = async (): Promise<void> => {
        const snippetsCollection = collection(db, 'snippets')
        const snippetsSnapshot = await getDocs(snippetsCollection)
        const snippetsList = snippetsSnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().name,
          tag: doc.data().tag,
          description: doc.data().description,
          createdDate: new Date(
            doc.data().date.seconds * 1000
          ).toLocaleString(),
          isPinned: doc.data().pinned,
          code: doc.data().code
        }))
        setSnippets(snippetsList)
        setHasFetchedSnippets(true)
      }
      void fetchSnippets()
    }
    // console.table(snippets);
  }, [hasFetchedSnippets, snippets])

  return (
    <div className="p-4">
      <div className="w-100 sticky right-0 top-0 z-10 flex justify-center p-0">
        <ToastBar state="success" message="Snippet copied to clipboard" />
      </div>
      <section className="flex h-screen flex-wrap justify-center gap-4">
        {snippets.map((snippet) => (
          <CardSnippets
            key={snippet.id}
            snippet={snippet}
            handleDelete={(id) => {
              void deleteSnippet(id)
            }}
          />
        ))}
      </section>
    </div>
  )
}
