import { Dispatch } from 'redux';
import { User } from 'src/generated/graphql';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const logIn = (user: User) => {
  return (disptach: Dispatch<Action>) => {
    disptach({
      type: ActionType.LOGIN,
      payload: {
        user,
        loggedIn: true,
      },
    });
  };
};

export const logOut = () => {
  return (disptach: Dispatch<Action>) => {
    disptach({
      type: ActionType.LOGOUT,
      payload: {
        user: null,
        loggedIn: false,
      },
    });
  };
};
