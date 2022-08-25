import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '.'

describe('Component test: App', () => {
  test('render App', () => {
    render(<App />)
    expect(screen.getByText('Click on the Vite and React logos to learn more'))
  })

  test('click count should increment count', async () => {
    render(<App />)
    expect(screen.findByText(/count is 0/i))

    userEvent.click(screen.getByTestId('button-increment'))
    expect(await screen.findByText(/count is 1/i)).not.toBeEmptyDOMElement()
    screen.debug()
  })
})

