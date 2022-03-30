import { mocked } from 'jest-mock'
import { SubscribeButton } from '.'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import { render, screen, fireEvent } from '@testing-library/react'

jest.mock('next/router')
jest.mock('next-auth/react')

describe('SignInButton component', () => {
  it('renders correctly', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce({ data: null, status: 'unauthenticated' })

    render(<SubscribeButton />)
    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  });

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn)

    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce({ data: null, status: 'unauthenticated' })

    render(<SubscribeButton />)
    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)
    expect(signInMocked).toHaveBeenCalled()
  });

  it('redirects user to sign in when not authenticated', () => {
    const useRouterMocked = mocked(useRouter)
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValue(
      { 
        data: { 
          user: { 
            name: 'John Doe', 
            email: 'john.doe@email.com'
          }, 
          expires: 'fake-expires',
          activeSubscription: 'fake-subscription'
        }, 
      status: 'authenticated' }
    )

    const pushMock = jest.fn()

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any)

    render(<SubscribeButton />)
    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)
    expect(pushMock).toHaveBeenCalled()
    expect(pushMock).toHaveBeenCalledWith('/posts')
  });
})
