// @flow
import { createAction } from "@reduxjs/toolkit";

export const createPrefixedActionCreator = (prefix:string) => {
  return (name: string, prepare?: Function) => {
    return createAction(prefix + name, prepare);
  };
};
