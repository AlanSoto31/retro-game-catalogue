import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Game from '../components/Game';

describe('<Game/>', () => {
  let component;
  const game1 = {
    guid: 1, name: 'Banjo Kazoie', platforms: [{ name: '' }, { name: '' }], image: { icon_url: '' },
  };

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Game game={game1} />
      </BrowserRouter>,
    );
  });

  test('Renders content', () => {
    component.getByText('Banjo Kazoie');
  });
});
