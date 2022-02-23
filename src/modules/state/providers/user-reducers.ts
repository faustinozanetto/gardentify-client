import { User } from 'src/generated/graphql';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export interface UserReducerState {
  user: User;
  loggedIn: boolean;
}

const initialState: UserReducerState = {
  user: null,
  loggedIn: false,
};

const userReducer = (state: UserReducerState = initialState, action: Action): UserReducerState => {
  switch (action.type) {
    case ActionType.LOGIN: {
      return action.payload;
    }
    case ActionType.LOGOUT: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default userReducer;
