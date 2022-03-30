import Post from '../../pages/posts/preview/[slug]'
import { render, screen } from '@testing-library/react'
import { mocked } from 'jest-mock'
import { useSession } from 'next-auth/react'

const posts = { 
  slug: 'my-new-post', 
  title: 'My new post', 
  content: 'Post excerpt', 
  updatedAt: '10 de Abril' 
}

jest.mock('next-auth/react')

describe('Post Preview page', () => {
  it('renders correctly', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce({ data: null, status: 'unauthenticated' })

    render(<Post post={posts} />)

    expect(screen.getByText("Wanna continue reading?")).toBeInTheDocument()
  })
})