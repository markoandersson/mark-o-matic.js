import apiJson from '../../mocks/api';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
const init = { status: 200, headers: headers };

const getApiResponse = url => {
  const path = new URL(url).pathname;
  const lastPathElement = path.slice(path.lastIndexOf('/') + 1);

  return apiJson[lastPathElement];
};

/**
 * Will return response from json-server api definition file according to requested path.
 */
export const useJsonServerResponses = () => {
  return fetch.mockResponse(req => {
    const response = getApiResponse(req.url);
    return Promise.resolve(JSON.stringify(response));
  }, init);
};

export const mockApiError = (message = 'Error') => {
  return fetch.mockReject(new Error(message));
};

/**
 * Will return given response when next fetch api call is triggered
 */
export const mockApiResponse = response => {
  return fetch.mockResponse(JSON.stringify(response), init);
};

export const resetMockedResponses = () => {
  fetch.resetMocks();
};

export const fetchMock = () => fetch;
