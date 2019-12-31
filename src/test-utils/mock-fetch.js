export const mockResponse = response => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  fetch.mockResponse(JSON.stringify(response), { status: 200, headers: headers });
};

export const resetMockedResponses = () => {
  fetch.resetMocks();
};

export const fetchMock = () => fetch;
