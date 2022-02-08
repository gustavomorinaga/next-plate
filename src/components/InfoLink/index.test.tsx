import { render, screen } from '@testing-library/react';

import InfoLinkComponent from '.';

describe('Info Link Component', () => {
	test('Link icon must be loaded', () => {
		render(<InfoLinkComponent bgColor="gray.50" />);

		const link = screen.getByText(/This is a template for Next.js/i);

		expect(link).toBeInTheDocument();
	});
});
