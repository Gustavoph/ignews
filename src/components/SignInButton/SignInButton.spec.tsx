import { SignInButton } from '.'
import { mocked } from 'jest-mock'
import { useSession } from 'next-auth/react'
import { render, screen } from '@testing-library/react'

jest.mock('next-auth/react', )

describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce({ data: null, status: 'unauthenticated' })

    render(
      <SignInButton />
    )
  
    expect(screen.getByText('Sign in with GitHub')).toBeInTheDocument()
  });

  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValue(
      { data: { user: { name: 'John Doe', email: 'john.doe@email.com'}, expires: 'fake-expires' }, 
      status: 'authenticated' }
    )

    render(
      <SignInButton />
    )
  
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  });
})
