import Posts from '../../pages/posts'
import { render, screen } from '@testing-library/react'

const posts = [
  { 
    slug: 'my-new-post', 
    title: 'My new post', 
    excerpt: 'Post excerpt', 
    updatedAt: '10 de Abril' 
  }
]

describe('Posts page', () => {
  it('renders correctly', () => {
    render(<Posts posts={posts} />)

    expect(screen.getByText("My new post")).toBeInTheDocument()
  })
})