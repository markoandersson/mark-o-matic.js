import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from './backend-call';
import { Button, PageHeader } from 'antd';

export const BackendCallPage = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => selectors.isLoading(state));
  const response = useSelector(state => selectors.getResponse(state));

  const onLoad = useCallback(() => {
    dispatch(actions.fetchDataFromBackend({ request: 'kissa13' }));
  }, [dispatch]);

  return (
    <div>
      <PageHeader title="API fetch" />
      <Button onClick={onLoad} loading={loading}>
        Fetch from back-end
      </Button>
      <div>response: {response}</div>
    </div>
  );
};
