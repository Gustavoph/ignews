import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import { mocked } from 'ts-jest/dist/utils/testing'
import Home from '../../pages'

jest.mock('next-auth/react')

describe('Home page', () => {
  it('renders correctly', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce({ data: null, status: 'unauthenticated' })

    render(<Home product={{ priceId: 'fake-price-id', amount: 'R$10,00' }} />)

    expect(screen.getByText("for R$10,00 month")).toBeInTheDocument()
  })
})