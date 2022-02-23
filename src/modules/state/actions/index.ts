import { ActionType } from '../action-types';
import { UserReducerState } from '../providers/user-reducers';

interface LogInAction {
  type: ActionType.LOGIN;
  payload: UserReducerState;
}

interface LogOutAction {
  type: ActionType.LOGOUT;
  payload: UserReducerState;
}

export type Action = LogInAction | LogOutAction;
