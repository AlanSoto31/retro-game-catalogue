import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import ReactRouter from 'react-router';
import GameDet from '../containers/GameDet';

describe('<GameDet/>', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  const useParamsMock = jest.spyOn(ReactRouter, 'useParams');
  const dummyDispatch = jest.fn();

  let component;
  const game = {
    details: {
      deck: 'Banjo Kazoie',
      name: '',
      platforms: [
        { name: '' },
        { name: '' },
      ],
      image: {
        super_url: '',
        original_url: '',
      },
      developers: [{ name: '' }, { name: '' }],
      genres: [{ name: '' }, { name: '' }],
      original_release_date: '',
    },
    error: null,
  };

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    useParamsMock.mockClear();
    useSelectorMock.mockReturnValue(game);
    useDispatchMock.mockReturnValue(dummyDispatch);
    useParamsMock.mockReturnValue({ guid: '3050' });
    component = render(
      <GameDet />,
    );
  });

  test('Renders content', () => {
    component.getByText('Banjo Kazoie');
  });
});
