import React, { useEffect } from 'react'
import { RiDeleteBin4Line, RiEdit2Line, RiSave2Line } from 'react-icons/ri'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../services/firebase.ts'

interface LocationState {
  title?: string
  description?: string
  tag?: string
  code?: string
}

export default function SnippetPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const state = location.state as LocationState
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = React.useState<boolean>(false)
  const [snippetInfo, setSnippetInfo] = React.useState<LocationState>({
    title: state.title,
    description: state.description,
    tag: state.tag,
    code: state.code
  })

  if (id === undefined) throw new Error('id is undefined')

  const handleDelete = async (): Promise<void> => {
    try {
      await deleteDoc(doc(db, 'snippets', id))
      navigate('/')
    } catch (e) {
      console.error('Error removing document: ', e)
    }
  }

  const handleUpdate = async (): Promise<void> => {
    if (isEditing) {
      try {
        await updateDoc(doc(db, 'snippets', id), {
          name: snippetInfo.title,
          description: snippetInfo.description,
          tag: snippetInfo.tag,
          code: snippetInfo.code
        })
        setSnippetInfo({
          title: snippetInfo.title,
          description: snippetInfo.description,
          tag: snippetInfo.tag,
          code: snippetInfo.code
        })
        setIsEditing(false)
      } catch (e) {
        console.error('Error updating document: ', e)
      }
    } else {
      setIsEditing(true)
    }
  }

  useEffect(() => {}, [snippetInfo])

  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div data-testid="snippet-page-test" className="p-4 lg:w-1/2">
        <section className="flex items-center relative">
          <button
            onClick={() => {
              void handleUpdate()
            }}
            data-testid="update-btn-test"
            type="button"
            className="absolute top-0 right-0 flex h-12 w-12 transform items-center shadow-lg hover:shadow-green-700/70 justify-center rounded-lg border-2 border-primary-green p-1 transition-transform active:scale-x-75"
          >
            {isEditing ? (
              <RiSave2Line className="text-secondary hover:text-white" />
            ) : (
              <RiEdit2Line className="text-primary-green hover:text-white" />
            )}
          </button>
        </section>
        <section className="flex gap-2">
          <p className="text-start font-bold h-4">Name:</p>
          {isEditing ? (
            <input
              data-testid="input-title-test"
              className="bg-gray-700 shadow-lg h-3 w-64 text-start p-4 text-xs"
              defaultValue={snippetInfo.title ?? state?.title}
              onChange={(e) => {
                setSnippetInfo({ ...snippetInfo, title: e.target.value })
              }}
            />
          ) : (
            <span className="text-green-300 text-start">
              {snippetInfo.title ?? state?.title}
            </span>
          )}
        </section>
        <section className="flex gap-2">
          <p className="text-start font-bold h-4">Description:</p>
          {isEditing ? (
            <input
              data-testid="input-title-description"
              className="bg-gray-700 shadow-lg h-3 w-64 text-start p-4 text-xs"
              defaultValue={snippetInfo.description ?? state?.description}
              onChange={(e) => {
                setSnippetInfo({ ...snippetInfo, description: e.target.value })
              }}
            />
          ) : (
            <span className="text-green-300 text-start">
              {snippetInfo.description ?? state?.description}
            </span>
          )}
        </section>
        <section className="flex gap-2 h-12">
          <p className="text-start font-bold h-4">Tag:</p>
          {isEditing ? (
            <input
              data-testid="input-tag-test"
              className="bg-gray-700 shadow-lg h-3 w-64 text-start p-4 text-xs"
              defaultValue={state?.tag ?? 'State error'}
              onChange={(e) => {
                setSnippetInfo({ ...snippetInfo, tag: e.target.value })
              }}
            />
          ) : (
            <span className="text-green-300 text-start">
              {snippetInfo.tag ?? state?.tag}
            </span>
          )}
        </section>
        <section>
          <p className="text-start font-bold h-8">Code:</p>
          {isEditing ? (
            <textarea
              data-testid="input-code-test"
              className="bg-gray-700 shadow-lg h-48 w-96 text-start p-4 text-xs"
              defaultValue={state?.code ?? 'State error'}
              onChange={(e) => {
                setSnippetInfo({ ...snippetInfo, code: e.target.value })
              }}
            />
          ) : (
            <div className="bg-gray-700 shadow-lg h-48 w-96 text-start p-4 text-xs">
              <code>{snippetInfo.code ?? state?.code}</code>
            </div>
          )}
        </section>
      </div>
      <button
        onClick={() => {
          void handleDelete()
        }}
        data-testid="delete-btn-test"
        type="button"
        className=" flex mt-16 h-10 w-1/2 transform items-center shadow-lg hover:shadow-red-500/50 justify-center rounded-lg border-2 border-danger p-1 transition-transform active:scale-x-75"
      >
        <RiDeleteBin4Line className="text-danger hover:text-white" />
      </button>
    </div>
  )
}
