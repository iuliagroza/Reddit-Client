import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Sidebar from './index';

/* Dau render in aplicatie cu Redux la sidebar | fade de 0.04 MODIFICAT */

const renderWithMemory = (
  component: React.ReactElement,
): ReturnType<typeof render> =>
  render(<MemoryRouter>{component}</MemoryRouter>);

describe('Sidebar component', () => {
  beforeEach(() => renderWithMemory(<Sidebar />));

  it('Should render the sidebar without errors', () => {
    expect(screen.getByRole('complementary')).toBeInTheDocument();
  });

  it('Should render the list without errors', () => {
    expect(screen.getByLabelText('Reddit category list')).toBeInTheDocument();
  });
});
