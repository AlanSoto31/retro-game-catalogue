import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchGameList, fetchPlatforms, fetchGameDetails } from '../redux/actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchGameList', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('should dispath actions', async () => {
    fetch.mockResponse(JSON.stringify({ results: '12345' }));

    const expectedActions = [
      { type: 'SET_LOADING', payload: true },
      { type: 'SHOW_GAMES', payload: '12345' },
    ];

    const store = mockStore();
    await store.dispatch(fetchGameList());

    expect(fetch.mock.calls.length).toEqual(1);
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('should throw an error', async () => {
    fetch.mockReject(new Error('fake error message'));

    const expectedAction = [
      { type: 'SHOW_ERROR', payload: 'Something went wrong loading game list componentError: fake error message' },
    ];

    const store = mockStore();
    await store.dispatch(fetchGameList());

    expect(fetch.mock.calls.length).toEqual(1);
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('fetchPlatforms', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('should dispath actions', async () => {
    fetch.mockResponse(JSON.stringify({ results: '12345' }));

    const expectedAction = [
      { type: 'SHOW_PLATFORMS', payload: '12345' },
    ];

    const store = mockStore();
    await store.dispatch(fetchPlatforms());

    expect(fetch.mock.calls.length).toEqual(1);
    expect(store.getActions()).toEqual(expectedAction);
  });

  test('should throw an error', async () => {
    fetch.mockReject(new Error('fake error message'));

    const expectedAction = [
      { type: 'SHOW_PLAT_ERROR', payload: 'Something went wrong loading filter componentError: fake error message' },
    ];

    const store = mockStore();
    await store.dispatch(fetchPlatforms());

    expect(fetch.mock.calls.length).toEqual(1);
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('fetchGameDetails', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('should dispath actions', async () => {
    fetch.mockResponse(JSON.stringify({ results: '12345' }));

    const expectedAction = [
      { type: 'SHOW_GAME_DETAILS', payload: '12345' },
    ];

    const store = mockStore();
    await store.dispatch(fetchGameDetails());

    expect(fetch.mock.calls.length).toEqual(1);
    expect(store.getActions()).toEqual(expectedAction);
  });

  test('should throw an error', async () => {
    fetch.mockReject(new Error('fake error message'));

    const expectedAction = [
      { type: 'SHOW_ERROR', payload: 'Something went wrong loading game list componentError: fake error message' },
    ];

    const store = mockStore();
    await store.dispatch(fetchGameDetails());

    expect(fetch.mock.calls.length).toEqual(1);
    expect(store.getActions()).toEqual(expectedAction);
  });
});
