import React from 'react';
import { mockResponse, renderWithRedux, resetMockedResponses } from '../../test-utils';
import { BackendCallComponent } from './backend-call-component';
import { fireEvent } from '@testing-library/react';
import { waitForElement } from '@testing-library/dom';

describe('Test backend call component', function() {
  afterEach(() => {
    resetMockedResponses();
  });

  const renderComponent = () => {
    const { getByText, container } = renderWithRedux(<BackendCallComponent />);

    return {
      button: getByText(/fetch/i),
      getLabel: async () => await waitForElement(() => getByText(/response/i), { container })
    };
  };

  it('should call backend', async function() {
    mockResponse({ response: 'hello world!' });

    const { button, getLabel } = renderComponent();

    fireEvent.click(button);

    expect(await getLabel()).toHaveTextContent('world');
  });
});
