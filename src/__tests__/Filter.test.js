import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import Filter from '../components/Filter';

describe('<Filter />', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  const plats = [{ id: 1, name: 'Game Boy' }, { id: 2, name: 'Game Boy Advance' }];
  let component;
  const mockHandler = jest.fn();
  const dummyDispatch = jest.fn();

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    useSelectorMock.mockReturnValue(plats);
    useDispatchMock.mockReturnValue(dummyDispatch);
    component = render(<Filter onChangeFilter={mockHandler} />);
  });

  test('should render', () => {
    component.getByLabelText('Find by your prefer platform');
  });

  test('should call onChange when select an option', () => {
    const selectComponent = component.getByLabelText('Find by your prefer platform');
    fireEvent.change(selectComponent, {
      target: { value: 'Game Boy' },
    });
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
