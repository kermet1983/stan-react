import { generateMockData } from '@/__mocks__/programs.mock';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Program from '../';

// Mock data
const mockPrograms = generateMockData();
const mockProgram = mockPrograms[0];
const navigate = jest.fn();

// Mocking the removeEventListener
const removeEventListener = jest.fn();
beforeEach(() => {
  window.removeEventListener = removeEventListener;
});

// Mock useLocation and useFetch hooks
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: { program: mockProgram },
  }),
  useNavigate: () => navigate,
}));

jest.mock('@/utils/hooks', () => ({
  useFetch: () => ({
    data: mockPrograms,
    loading: false,
    error: null,
  }),
}));

describe('Component: Program', () => {
  test('renders program details when data is fetched', async () => {
    render(
      <MemoryRouter initialEntries={['/program/1']}>
        <Routes>
          <Route path="/program/:programId" element={<Program />} />
        </Routes>
      </MemoryRouter>,
    );
    // Assert that program details are rendered

    expect(screen.getByText('Program 1')).toBeTruthy();
    expect(screen.getByText('Description of Program 1')).toBeTruthy();
    // rating, year, type, genre, language
    expect(screen.getByText('PG | 2022 | movie | Drama | English')).toBeTruthy();
    expect(screen.getByAltText('Program 1')).toBeTruthy(); // Check for image alt text
  });

  test('navigates back to home page when Backspace key is pressed', async () => {
    jest.spyOn(window, 'addEventListener');
    jest.spyOn(window, 'removeEventListener');

    render(
      <MemoryRouter initialEntries={['/program/1']}>
        <Routes>
          <Route path="/program/:programId" element={<Program />} />
        </Routes>
      </MemoryRouter>,
    );

    // Trigger Backspace key press
    fireEvent.keyDown(document, { key: 'Backspace' });

    // Assert that navigation function was called and event listener was added and removed
    expect(navigate).toHaveBeenCalledWith('/', { state: { programId: '1' } });
    expect(window.addEventListener).toHaveBeenCalled();
    expect(window.removeEventListener).toHaveBeenCalled();
  });

  test('fetches program from api if not on useLocation state', () => {
    jest.spyOn(require('react-router-dom'), 'useLocation').mockReturnValue({
      state: { program: null },
    });

    render(
      <MemoryRouter initialEntries={['/program/1']}>
        <Routes>
          <Route path="/program/:programId" element={<Program />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText('Program 1')).toBeTruthy();
    expect(screen.getByText('Description of Program 1')).toBeTruthy();
    // rating, year, type, genre, language
    expect(screen.getByText('PG | 2022 | movie | Drama | English')).toBeTruthy();
    expect(screen.getByAltText('Program 1')).toBeTruthy(); // Check for image alt text
  });
});
