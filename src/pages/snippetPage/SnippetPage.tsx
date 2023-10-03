import React from 'react'
import { RiDeleteBin4Line } from 'react-icons/ri'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { deleteDoc, doc } from 'firebase/firestore'
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
  const navigate = useNavigate()
  const state = location.state as LocationState

  if (!id) return <div>Snippet not found</div>
  const handleClick = async (): Promise<void> => {
    try {
      await deleteDoc(doc(db, 'snippets', id))
      navigate('/')
    } catch (e) {
      console.error('Error removing document: ', e)
    }
  }

  return (
    <div className='flex h-screen w-full flex-col items-center'>
      <div data-testid='snippet-page-test' className='p-4 lg:w-1/2'>
        SnippetPage id:
        <span className='text-green-300'>{id}</span>
        <section className='flex'>
          <p>title:</p>
          <span className='text-green-300'>
            {state?.title ?? 'State error'}
          </span>
        </section>
        <section className='flex'>
          <p>description:</p>
          <span className='text-green-300'>
            {state?.description ?? 'State error'}
          </span>
        </section>
        <section className='mb-12 flex'>
          <p>tag:</p>
          <span className='text-green-300'>{state?.tag ?? 'State error'}</span>
        </section>
        <div className='bg-gray-700 shadow-lg h-48 w-96 text-start p-4 text-xs'>
          <code>{state?.code ?? 'State error'}</code>
        </div>
      </div>
      <button
        onClick={handleClick}
        data-testid='delete-btn-test'
        type='button'
        className=' flex mt-16 h-10 w-1/2 transform items-center shadow-lg hover:shadow-red-500/50 justify-center rounded-lg border-2 border-danger p-1 transition-transform active:scale-x-75'
      >
        <RiDeleteBin4Line className='text-danger hover:text-white' />
      </button>
    </div>
  )
}
