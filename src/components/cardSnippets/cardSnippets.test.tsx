import { BrowserRouter as Router } from 'react-router-dom'
import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import CardSnippets from './CardSnippets.tsx'

import '@testing-library/jest-dom'

describe('CardSnippets', () => {
  const mockSnippet = {
    id: '1',
    tag: 'java',
    title: 'hello',
    description: 'test 123 123 123',
    createdDate: '12/03/2023',
    isPinned: false,
    code: 'test code'
  }

  const mockDeleteSnippet = vi.fn()

  beforeEach(() => {
    render(
      <Router>
        <CardSnippets
          snippet={mockSnippet}
          handleDelete={mockDeleteSnippet}
        />
      </Router>
    )
  })

  test('renders CardSnippets component', () => {
    const cardSnippets = screen.getByTestId('card-test')
    expect(cardSnippets).toBeInTheDocument()
  })

  test('it should have title', () => {
    const title = screen.getByTestId('title-test')
    expect(title).toBeInTheDocument()
  })

  test('it should have description', () => {
    const desc = screen.getByTestId('desc-test')
    expect(desc).toBeInTheDocument()
  })

  test('it should have copy button', () => {
    const copyButton = screen.getByText('Copy')
    expect(copyButton).toBeInTheDocument()
  })

  test('it should have view button', () => {
    const viewButton = screen.getByText('View')
    expect(viewButton).toBeInTheDocument()
  })

  test('it should have pin button', () => {
    const pinButton = screen.getByTestId('pin-button-test')
    expect(pinButton).toBeInTheDocument()
  })

  // test('it should change when pinned', () => {
  //   render(
  //     <Router>
  //       <CardSnippets
  //         id="1"
  //         tag="java"
  //         title="hello"
  //         description="test 123 123 123"
  //         createdDate="12/03/2023"
  //       />
  //     </Router>,
  //   );
  //   const pinButton = screen.getByTestId('pin-button-test');
  //   fireEvent.click(pinButton);
  //   const toast = screen.getByText('your item has been pinned');
  //   expect(toast).toBeInTheDocument();
  // });

  // test('it should change when unpinned', () => {
  //   render(
  //     <Router>
  //       <CardSnippets
  //         id="1"
  //         tag="java"
  //         title="hello"
  //         description="test 123 123 123"
  //         createdDate="12/03/2023"
  //       />
  //     </Router>,
  //   );
  //   const pinButton = screen.getByTestId('pin-button-test');

  //   act(() => {
  //     fireEvent.click(pinButton);
  //   });
  //   const toast = screen.getByText('your item has been unpinned');
  //   expect(toast).toBeInTheDocument();
  // });

  test('it should have delete button', () => {
    const deleteButton = screen.getByTestId('delete-btn-test')
    expect(deleteButton).toBeInTheDocument()
  })

  // test('it should have a confirmation modal for delete', () => {
  //   render(
  //     <Router>
  //       <CardSnippets
  //         id="1"
  //         tag="java"
  //         title="hello"
  //         description="test 123 123 123"
  //         createdDate="12/03/2023"
  //       />
  //     </Router>,
  //   );
  //   const deleteButton = screen.getByTestId('delete-btn-test');
  //   fireEvent.click(deleteButton);
  //   const modal = screen.getByTestId('modal');
  //   expect(modal).toBeInTheDocument();
  // });
})
