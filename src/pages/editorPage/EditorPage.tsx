import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebase.ts'

interface Snippet {
  title: string
  description: string
  code: string
  tag?: string
}

export default function EditorPage(): React.JSX.Element {
  const [snippet, setSnippet] = React.useState({} as Snippet)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, 'snippets'), {
        name: snippet.title,
        description: snippet.description,
        code: snippet.code,
        date: new Date(),
        pinned: false,
        tag: snippet.tag ?? 'No tag'
      })
      console.log('Document written with ID: ', docRef.id) //DEBUGING
      setSnippet({ title: '', description: '', code: '' })
      navigate('/')
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setSnippet({
      ...snippet,
      [e.target.name]: e.target.value
    })
    console.table(snippet)
  }

  return (
    <div className='flex h-screen justify-center'>
      <form className='mt-8 flex w-screen flex-col p-4 sm:w-2/3'>
        <p className='mb-2 text-gray-300'>Snippet name</p>
        <input
          placeholder='Enter your snippet name...'
          name='title'
          className='h-10 w-2/3 rounded-md bg-gray-800 p-2 text-white focus:outline-none'
          type='text'
          required
          onChange={handleInputChange}
        />
        <p className='mb-2 mt-4 text-gray-300'>Description</p>
        <textarea
          placeholder='Describe your snippet...'
          name='description'
          className='h-32 w-full rounded-md bg-gray-800 p-2 text-white focus:outline-none'
          required
          onChange={handleInputChange}
        />
        <p className='mb-2 mt-4 text-gray-300'>Code</p>
        <textarea
          placeholder='Paste your code here...'
          name='code'
          className='h-64 w-full rounded-md bg-gray-800 p-2 text-white focus:outline-none'
          required
          onChange={handleInputChange}
        />
        <div className='flex justify-end'>
          <button
            type='submit'
            onClick={handleSubmit}
            className='mt-4 w-48 transform items-end rounded-md bg-primary-green p-2 shadow-lg transition-transform active:scale-90'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
