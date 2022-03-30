import Post from '../../pages/posts/[slug]'
import { render, screen } from '@testing-library/react'

const posts = { 
  slug: 'my-new-post', 
  title: 'My new post', 
  content: 'Post excerpt', 
  updatedAt: '10 de Abril' 
}


describe('Post page', () => {
  it('renders correctly', () => {
    render(<Post post={posts} />)

    expect(screen.getByText("My new post")).toBeInTheDocument()
    expect(screen.getByText("10 de Abril")).toBeInTheDocument()
  })
})