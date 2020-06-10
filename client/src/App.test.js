import React from 'react'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

test('renders Please log in text', () => {
  const fakeAuth = {
    isAuthenticated: () => false
  }
  const history = createMemoryHistory()
  const { getByText } = render(<App auth={fakeAuth} history={history} />)
  const textElement = getByText(/Please log in/i);
  expect(textElement).toBeInTheDocument();
})
