import { Icon, Menu } from 'antd';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { HomePage } from './views/home';
import { CounterPage } from './views/counter';

export const Navigation = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <Icon type="home" />
        <span>Home</span>
        <Link to="/" />
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="number" />
        <span>Counter</span>
        <Link to="/counter" />
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="file" />
        <span>File</span>
      </Menu.Item>
    </Menu>
  );
};

export const Routes = () => {
  return (
    <Switch>
      <Route path="/counter">
        <CounterPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
