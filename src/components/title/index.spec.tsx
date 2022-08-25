import { render, screen } from '@testing-library/react'
import Title from '.'

test('Rendering test: Title', () => {
  const title = 'Let\'s test with vitest!'

  render(<Title title={title} />)

  screen.debug()
  expect(screen.getByText(title)).toBeInTheDocument()
})
