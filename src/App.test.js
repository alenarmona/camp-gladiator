import React from 'react'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom";
import App from './App'
import '@testing-library/jest-dom/extend-expect'

test('Render workouts page', () => {
	const history = createMemoryHistory()
	const { container } = render(
		<MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
	)
	// verify page content for expected route
  expect(container.innerHTML).toMatch('<h1>Workouts</h1>')
})


test('Workouts page have a hero', () => {
	const history = createMemoryHistory()
	const { container } = render(
		<MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
	)
	// verify page content for expected route
  expect(container.innerHTML).toMatch('class="hero"')
})

it("navigate to a non existing url", () => {
  // Render app
  render(
    <MemoryRouter initialEntries={['/random-page']}>
      <App />
    </MemoryRouter>,
  );

  // Check correct page content showed up
  expect(document.body.innerHTML).toMatch(/Page Not Found/);
});