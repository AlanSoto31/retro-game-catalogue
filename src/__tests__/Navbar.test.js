import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('<Navbar />', () => {
  let component;

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
  });

  test('should render', () => {
    component.getByText('Home');
  });

  test('should render', () => {
    component.getByText('Axo-Retro-Games');
  });
});
