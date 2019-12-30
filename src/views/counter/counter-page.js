import React from 'react';
import { CounterComponent } from './counter-component';
import { PageHeader } from 'antd';
export const CounterPage = () => {
  return (
    <div>
      <PageHeader title="Counter" />
      <CounterComponent />
    </div>
  );
};
