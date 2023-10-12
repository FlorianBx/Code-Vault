import { Route, Routes } from 'react-router-dom'
import Layout from './pages/layout/Layout.tsx'
import SnippetPage from './pages/snippetPage/SnippetPage.tsx'
import SnippetsPage from './pages/snippetsPage/SnippetsPage.tsx'
import EditorPage from './pages/editorPage/EditorPage.tsx'
import PageNotFound from './pages/pageNotFound/PageNotFound.tsx'

import './App.css'

function App(): React.JSX.Element {
  return (
    <div className="flex h-screen select-none justify-center text-white">
      <Layout>
        <Routes>
          <Route path="/" element={<SnippetsPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/snippet/:id" element={<SnippetPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
