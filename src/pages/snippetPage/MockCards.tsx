interface Snippet {
  id: string
  title: string
  tag: string
  description: string
  createdDate: string
  isPinned: boolean
  code: string
}

const MockCards = (snippet: Snippet): JSX.Element => {
  const { title, description, tag, createdDate } = snippet

  return (
    <section className="flex select-none flex-col justify-center">
      <div
        data-testid="card-test"
        className="relative flex h-96 w-72 flex-col rounded-md bg-gray-800 p-4 shadow-lg transition-all ease-out"
      >
        <div className="flex justify-between">
          <h1 data-testid="title-test">{title}</h1>
          <button type="button" data-testid="pin-button-test" />
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
            <button type="button" data-testid="delete-btn-test" />
          </div>
          <div className="flex justify-end gap-3">
            <button type="button" />
            <button type="button" data-testid="view-btn-test" />
          </div>
        </section>
      </div>
    </section>
  )
}

export default MockCards
