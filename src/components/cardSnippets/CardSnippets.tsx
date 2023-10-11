import type React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PiPushPinLight } from 'react-icons/pi'
import { AiTwotonePushpin } from 'react-icons/ai'
import { RiDeleteBin4Line } from 'react-icons/ri'

interface Snippet {
  id: string
  title: string
  tag: string
  description: string
  createdDate: string
  isPinned: boolean
  code: string
}

interface SnippetProps {
  snippet: Snippet
  handleDelete: (id: string) => void
}

export default function CardSnippets({
  snippet,
  handleDelete
}: SnippetProps): React.JSX.Element {
  const [isPinned, setIsPinned] = useState(snippet.isPinned)
  const { code, title, description, tag, id, createdDate } = snippet
  const navigate = useNavigate()

  const redirectToView = (): void => {
    navigate(`/snippet/${id}`, {
      state: {
        code,
        title,
        description,
        tag
      }
    })
  }

  const handlePin = (): void => {
    setIsPinned((prevIsPinned) => !prevIsPinned)
  }

  return (
    <section className="flex select-none flex-col justify-center">
      <div
        data-testid="card-test"
        className="relative flex h-96 w-72 flex-col rounded-md bg-gray-800 p-4 shadow-lg transition-all ease-out"
      >
        <div className="flex justify-between">
          <h1 data-testid="title-test">{title}</h1>
          <button
            data-testid="pin-button-test"
            type="button"
            onClick={handlePin}
            className="transform transition-transform active:scale-75"
          >
            {!isPinned ? <PiPushPinLight /> : <AiTwotonePushpin />}
          </button>
        </div>
        <div className="flex h-10 w-auto items-center gap-3 pt-4">
          <p className="flex h-8 transform cursor-pointer items-center rounded-lg bg-secondary p-2 text-sm transition-transform active:scale-y-75">
            {tag}
          </p>
        </div>
        <hr className="mt-4 h-0.5 opacity-70" />
        <p data-testid="desc-test" className="basis-3/4 pt-4">
          {description}
        </p>
        <p className="pb-4 pr-1 pt-4 text-right text-sm italic opacity-20">
          {createdDate}
        </p>
        <section className="flex">
          <div className="flex-1">
            <button
              data-testid="delete-btn-test"
              type="button"
              onClick={() => {
                handleDelete(snippet.id)
              }}
              className=" flex h-10 w-10 transform items-center justify-center rounded-lg border-2 border-danger p-1 transition-transform active:scale-x-75"
            >
              <RiDeleteBin4Line className="text-danger" />
            </button>
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="w-20 transform rounded-lg border-2 border-primary-green p-1 text-primary-green transition-transform active:scale-75"
            >
              Copy
            </button>
            <button
              type="button"
              onClick={redirectToView}
              className="w-20 transform rounded-lg border-2 border-blue-600 bg-blue-600 p-1 transition-transform active:scale-75"
            >
              View
            </button>
          </div>
        </section>
      </div>
    </section>
  )
}
